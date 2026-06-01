# User Directory - Quản lý Người dùng

## Mô tả

Ứng dụng quản lý danh sách người dùng với đầy đủ CRUD operations (Create, Read, Update, Delete).

## API sử dụng

JSONPlaceholder: https://jsonplaceholder.typicode.com

| Method     | Endpoint     | Mô tả               |
| :--------- | :----------- | :------------------ |
| **GET**    | `/users`     | Lấy danh sách users |
| **GET**    | `/users/:id` | Lấy chi tiết 1 user |
| **POST**   | `/users`     | Tạo user mới        |
| **PUT**    | `/users/:id` | Cập nhật user       |
| **DELETE** | `/users/:id` | Xóa user            |

## Cách chạy

1. Mở file index.html bằng trình duyệt
2. Hoặc dùng Live Server trong VS Code

## Chức năng

- READ: Load và hiển thị danh sách users dạng card
- CREATE: Form thêm user mới → POST lên API
- UPDATE: Form sửa user → PUT lên API
- DELETE: Xác nhận xóa → DELETE API
- EARCH: Tìm kiếm user theo name/email (client-side filter)
- Loading states: Skeleton loader khi đang fetch
- Error handling: Toast notification khi có lỗi
