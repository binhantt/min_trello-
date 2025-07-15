import * as path from 'path'
import { createPool } from 'mysql2'
import { promises as fs } from 'fs'
import {
  Kysely,
  Migrator,
  MysqlDialect,
  FileMigrationProvider,
} from 'kysely'
import { Database } from './config/types'

async function migrateToLatest() {
  const db = new Kysely<Database>({
    dialect: new MysqlDialect({
      pool: createPool({
        host: 'localhost',
        database: 'min_trello',
        user: 'root',
        password: '',
        port: 3306,
        connectionLimit: 10,
      }),
    }),
  })

  const migrator = new Migrator({
    db,
    provider: new FileMigrationProvider({
      fs,
      path,
      // Đặt đường dẫn migration hợp lý (ví dụ: migrations trong src/config)
      migrationFolder: path.join(__dirname, 'migrations'),
    }),
  })

  const { error, results } = await migrator.migrateToLatest()

  results?.forEach((it) => {
    if (it.status === 'Success') {
      console.log(`migration "${it.migrationName}" was executed successfully`)
    } else if (it.status === 'Error') {
      console.error(`failed to execute migration "${it.migrationName}"`)
    }
  })

  if (error) {
    console.error('failed to migrate')
    console.error(error)
    process.exit(1)
  }

  await db.destroy()
}

migrateToLatest()