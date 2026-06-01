# Photo Gallery - Infinite Scroll

## Mô tả

Gallery ảnh với tính năng Infinite Scroll (cuộn vô hạn) và Lazy Loading (tải ảnh khi cần).

## API sử dụng

Lorem Picsum: https://picsum.photos/v2/list?page=1&limit=20

API trả về danh sách ảnh với thông tin:

- id: ID của ảnh
- author: Tác giả
- width, height: Kích thước gốc
- download_url: URL ảnh gốc

## Cách chạy

1. Mở file index.html bằng trình duyệt
2. Cuộn xuống để xem thêm ảnh

## Chức năng

- Load 20 ảnh đầu tiên khi mở trang
- Infinite Scroll: Tự động load thêm khi cuộn gần cuối
- Lazy Loading: Ảnh chỉ load khi xuất hiện trong viewport
- Loading indicator "Đang tải thêm..."
- Lightbox: Click ảnh → xem ảnh lớn
- Responsive Grid: 4 cột (desktop), 2 cột (tablet), 1 cột (mobile)
