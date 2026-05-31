Câu A1

1. Static

- Vẫn chiếm chỗ trong flow : Có
- Tham chiếu vị trí: Không dùng top/left/right/bottom
- Cuộn theo trang: Có
- Usecase: Mặc định

2. Relative

- Vẫn chiếm chỗ trong flow : Có
- Tham chiếu vị trí: Vị trí gốc của nó
- Cuộn theo trang: Có
- Usecase: Dịch nhẹ element hoặc làm mốc tạo độ cho absolute con

3. Absolute

- Vẫn chiếm chỗ trong flow : Không
- Tham chiếu vị trí: Gần phần tử cha không phải là static nhất
- Cuộn theo trang: Có
- Usecase: Badge, dropdown, tooltip, overlay

4. Fixed

- Vẫn chiếm chỗ trong flow : Không
- Tham chiếu vị trí: viewport
- Cuộn theo trang: Không
- Usecase: Chatbutton, sticky navbar, modal overlay

5. Sticky

- Vẫn chiếm chỗ trong flow : chiếm chỗ đến khi chạm ngưỡng
- Tham chiếu vị trí: viewport khi đã chạm ngưỡng

- Cuộn theo trang: Khi đã chạm ngưỡng

- Usecase: Sticky header, sticky sidebar

- Absolute tham chiếu body khi tất cả cha đều là static và tham chiếu parent khi cha gần nhất không phải là static.

- Nearest positioned ancestor: phần tử cha gần nhất có position khác static.

Câu A2

1. Trường hợp 1:

- Bố cục: 4 cột đều nhau cùng hàng.
  [ Item 1 ][ Item 2 ][ Item 3 ][ Item 4 ]

2. Trường hợp 2:

- Bố cục: 3 hàng, 2 cột. mỗi hàng có 2 item(width + margin = 50% mỗi item).
  [ Item 1 ][ Item 2 ]
  [ Item 3 ][ Item 4 ]
  [ Item 5 ][ Item 6 ]

3. Trường hợp 3:

- Bố cục: item 1 sát trái, item 2 ở giữa, item 3 sát phải
  [ Item 1 ] [ Item 2 ] [ Item 3 ]

4. Trường hợp 4:

- Bố cục: 3 cột trên 1 hàng. Cột 1 = 200px cố định, Cột 2 = linh hoạt (chiếm phần còn lại), Cột 3 = 200px cố định, giữa các item có gap 20px.
  [200px] [ 1fr (co giãn) ] [200px]

5. Trường hợp 5:

- Bố cục: 3 hàng, hàng 1 hàng 2 đầy 3 item, hàng 3 chỉ có 1 item và 2 ô còn lại trống,các item có gap 10px.
  [ Item 1 ] [ Item 2 ] [ Item 3 ]
  [ Item 4 ] [ Item 5 ] [ Item 6 ]
  [ Item 7 ] [ ] [ ]

Câu C1

1. Navigation bar ngang (logo + menu + buttons):

- Lựa chọn: Flexbox
- Giải thích: Thanh điều hướng (Navbar) bản chất là một bố cục 1 chiều (1D) theo trục ngang. Flexbox là công cụ hoàn hảo nhất ở đây vì nó giúp dễ dàng căn chỉnh các phần tử theo hàng dọc (align-items: center) và phân bổ khoảng cách linh hoạt giữa các khối bằng justify-content: space-between hoặc tận dụng thuộc tính margin-left: auto để đẩy cụm nút bấm về góc phải.

2. Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước):

- Lựa chọn: Grid
- Giải thích: Đây là bố cục 2 chiều (2D) dạng lưới (rows & columns) cố định nghiêm ngặt về số cột nhưng vô định về số hàng. Sử dụng Grid giúp bạn định hình cấu trúc 3 cột bằng một dòng code duy nhất: grid-template-columns: repeat(3, 1fr). Khi số lượng ảnh tăng lên, trình duyệt sẽ tự động ngắt dòng và tạo hàng mới một cách đồng đều mà không cần tính toán thủ công hay lo bị vỡ dòng như Flexbox.

3. Layout blog: main content + sidebar:

- Lựa chọn: Grid (hoặc Flexbox đều tốt, nhưng Grid tối ưu hơn cho layout tổng thể)
- Giải thích: Đây là bộ khung (Page Layout) vĩ mô của một trang web. Dùng Grid giúp bạn kiểm soát hoàn toàn tỷ lệ độ rộng giữa main và sidebar (ví dụ: grid-template-columns: 3fr 1fr) kết hợp với thuộc tính gap để tạo khoảng cách cố định. Grid giữ cho cấu trúc trang ổn định ngay cả khi nội dung bên trong vùng main hoặc sidebar thay đổi độ dài một cách đột ngột.

4. Footer với 4 cột thông tin (Về chúng tôi, Liên kết, Hỗ trợ, Liên hệ):

- Lựa chọn: Kết hợp cả hai (Grid + Flexbox)
- Giải thích: \* Grid (Bên ngoài): Dùng để chia layout tổng thể của Footer thành 4 cột đều nhau (hoặc co giãn responsive linh hoạt từ 1 cột trên mobile thành 4 cột trên desktop) bằng grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)).

* Flexbox (Bên trong): Dùng cho danh sách các liên kết nhỏ bên trong từng cột. Các thẻ <ul> chứa link sẽ chuyển sang dạng display: flex; flex-direction: column; để xếp hàng dọc và dễ dàng căn chỉnh khoảng cách giữa các thẻ <li>.

5. Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy):

- Lựa chọn: Flexbox
- Giải thích: Bản chất của card sản phẩm là luồng nội dung 1 chiều theo trục dọc (flex-direction: column). Điểm mấu chốt để "nút luôn dính đáy" (ngay cả khi phần text ở giữa dài ngắn khác nhau) là đặt thuộc tính margin-top: auto cho phần tử nút bấm (hoặc đặt flex-grow: 1 cho phần text ở giữa). Cơ chế giãn cách thông minh này của Flexbox xử lý gọn gàng hơn nhiều so với việc chia hàng cố định của CSS Grid.

Câu C2

1. Lỗi 1: Cards không đều chiều cao — nút "Mua" bị nhảy lên/xuống

- Nguyên nhân: .card không dùng Flexbox column, nên chiều cao mỗi card phụ thuộc vào content bên trong (ảnh, tiêu đề dài/ngắn, mô tả...). Nút "Mua" không được "ghim" xuống đáy.
  .card-container { display: flex; flex-wrap: wrap; }
  .card {
  width: 30%;
  margin: 1.5%;
  display: flex;
  flex-direction: column;
  }
  .card img { width: 100%; height: 200px; object-fit: cover;}
  .card h3 { font-size: 18px; }
  .card .btn {
  padding: 10px;
  margin-top: auto;
  }

2. Lỗi 2: Muốn items nằm giữa cả ngang lẫn dọc trong container 100vh, nhưng item vẫn dính góc trái trên

- Nguyên nhân: Thiếu justify-content: center và align-items: center. display: flex mặc định là justify-content: flex-start và align-items: stretch.
  .hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  }
  .hero-content {
  text-align: center;
  }

3. Lỗi 3: Sidebar bị co lại khi content quá dài

- Nguyên nhân: Khi dùng display: flex các phần tử bên trong sẽ thành flex item và có thuộc tính mặc định là flex-shrink: 1 (tự động thu nhỏ nếu container không đủ chỗ). Khi .content chứa nội dung quá dài flexbox phải chia lại không gian như là thu nhỏ sidebar.
  .layout { display: flex; background-color: yellowgreen;}
  .sidebar {
  width: 250px;
  flex-shrink: 0;
  background-color: aquamarine;
  }
  .content { flex: 1; background-color: chartreuse;}
