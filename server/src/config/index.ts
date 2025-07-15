import express from 'express'
import cors from './cors';
import limit from './limit';
import router from '../routers';
import { startServer } from './sever';
import { accessLogger } from './access';
import { db } from './database';

const app = express();
app.use(cors);
app.use(limit);
app.use(accessLogger);
app.use(express.json());
app.use("/api", router);

// Kiểm tra kết nối database trước khi start server
async function bootstrap() {
  try {

    console.log('✅ Kết nối database thành công!');
    startServer(app);
  } catch (error) {
    console.error('❌ Kết nối database thất bại:', error);
    process.exit(1);
  }
}

bootstrap();

export default app; 