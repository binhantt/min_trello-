# Mini Trello Realtime

Dự án này là một ứng dụng quản lý công việc dạng Trello, hỗ trợ realtime, sử dụng Node.js, Express, MySQL (Kysely), và React (ở client).

## Tính năng chính
- Quản lý bảng công việc (board), danh sách (list), thẻ (card)
- API RESTful cho người dùng, bài viết, v.v.
- Kết nối database MySQL qua Kysely
- Middleware: CORS, rate limit, access logger
- Hỗ trợ migration tự động cho database

## Cấu trúc thư mục
```
Mini Trello realtime/
  client/           # Frontend React
  server/
    src/
      config/       # Cấu hình, middleware, database, migration
      migrations/   # Các file migration cho Kysely
      routers/      # Các router Express
      index.ts      # Khởi động server
```

## Hướng dẫn cài đặt
1. **Cài đặt dependencies**
   ```sh
   cd server
   npm install
   ```
2. **Cấu hình database**
   - Sửa thông tin trong `src/config/database.ts` cho đúng với MySQL của bạn.
3. **Chạy migration tạo bảng**
   ```sh
   npx ts-node src/config/migrations.ts
   ```
4. **Chạy server**
   ```sh
   npx ts-node src/config/index.ts
   ```

## Một số API mẫu
- `GET /api/users` — Lấy danh sách người dùng
- `GET /api/posts` — Lấy danh sách bài viết

## Ghi chú
- Frontend React nằm trong thư mục `client/`
- Có thể mở rộng thêm các bảng, router, middleware tùy ý

---
Nếu có thắc mắc hoặc lỗi, hãy kiểm tra lại cấu hình database và migration! 