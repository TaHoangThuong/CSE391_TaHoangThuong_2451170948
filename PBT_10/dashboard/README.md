# Multi-API Dashboard

## Mô tả

Dashboard tổng hợp dữ liệu từ nhiều API khác nhau, sử dụng Promise.allSettled() để xử lý song song.

## APIs sử dụng (4 APIs)

| Widget          | API             | Endpoint                     |
| :-------------- | :-------------- | :--------------------------- |
| 🌤️ Weather      | Open-Meteo      | `/v1/forecast`               |
| 👥 Random Users | RandomUser.me   | `/api/?results=5`            |
| 🐕 Random Dogs  | Dog CEO         | `/api/breeds/image/random/6` |
| 📝 Posts        | JSONPlaceholder | `/posts?_limit=5`            |

## Cách chạy

1. Mở file index.html bằng trình duyệt
2. Click "Refresh All" để load lại tất cả data

## Chức năng

- Gọi song song 4 APIs dùng Promise.allSettled()
- Loading tổng thể khi đang fetch
- Mỗi widget có trạng thái riêng (loading/success/error)
- 1 API lỗi KHÔNG ảnh hưởng widget khác
- Nút "Refresh All" - gọi lại tất cả APIs
- Hiển thị thời gian fetch: "Loaded in X ms"
