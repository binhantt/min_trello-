import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('users')
    .addColumn('id', 'integer', col => col.autoIncrement().primaryKey())
    .addColumn('username', 'varchar(255)', col => col.notNull().unique())
    .addColumn('email', 'varchar(255)', col => col.notNull().unique())
    .addColumn('password', 'varchar(255)', col => col.notNull())
    .addColumn('created_at', 'datetime', col => col.notNull().defaultTo(sql`now()`))
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('users').execute()
} 