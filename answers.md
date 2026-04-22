Câu A1 (Nguồn: 01_introduction_html_universe.md 1.1 Kiến trúc Client-Server, 1.2 HTTP, 1.3 Browser Rendering.)
1. Thứ tự ít nhất 5 bước khi gõ https://shopee.vn:
   - DNS lookup: Trình duyệt tra cứu địa chỉ IP của shopee.vn từ DNS server.
   - TCP connection: Thiết lập kết nối TCP với server.
   - HTTP request: Gửi GET request đến server.
   - Server processing: Server xử lý request, trả về HTML/CSS/JS.
   - Browser rendering: Parse HTML, load CSS/JS, render trang.
2. Trong DevTools của Chrome, tab Network cho thấy thông tin:
   - Mã trạng thái: Cho biết yêu cầu thành công (200) hay thất bại (404, 500).
   - Tổng thời gian: Thời gian để trang web tải hoàn tất.
   - Loại tệp: Phân biệt giữa file HTML, CSS, JavaScript hay hình ảnh.
./screenshots/network_practice.png.png

Câu A2 (Nguồn: 04_visible_part_html.md)
- Trang web bị đánh giá SEO thấp vì:
  + dùng `<div class="header">` thay vì `<header>` cho phần đầu trang.
  + dùng `<div class="menu">` thay vì `<nav>` cho phần điều hướng.
  + dùng `<div class="main">` thay vì `<main>` cho phần nội dung chính.
  + dùng `<div class ="product">` thay vì `<article>` cho phần sản phẩm.
  + dùng `<div class="footer">` thay vì `<footer>` cho phần chân trang.
  => Google không hiểu cấu trúc.

Câu A3
[ Hộp 1 ] (div: là các phần tử khối => bắt đầu trên một dòng mới)
Text A Text B (span chiếm vừa đủ chiều ngang của nội dung, không làm ngắt dòng)
[ Hộp 2 ]
Text C Text D (text D in đậm(strong))
[ Hộp 3 ]

Câu A4
<thead>: tiêu đề cột
<tbody></tbody>: dữ liệu chính
<tfoot>: tổng kết
Lý do không nên dùng table để tạo layout cho trang web:
1. Không phải thẻ semantic => Google không hiểu cấu trúc.
2. Khó responsive(table khó co giãn linh hoạt theo màn hình)
3. Ảnh hưởng đến SEO (Screenreader sẽ hiểu nhầm là bảng dữ liệu)

Câu C1


<header> <!-- header cho phần đầu trang -->
    <div class="logo">THT Shop</div>
    <nav aria-label="Main menu"> <a href="/">Trang chủ</a> | <a href="/products">Sản phẩm</a>
    </nav>
</header>

<nav aria-label="breadcrumb"> <!-- điều hướng -->
    <ol style="display: flex; list-style: none;"> <!-- ol vìbreadcrumb có thứ tự -->
        <li><a href="/">Home</a></li>
        <li>&nbsp;>&nbsp;</li>
        <li><a href="/mobile">Điện thoại</a></li>
        <li>&nbsp;>&nbsp;</li>
        <li aria-current="page">iPhone 16</li>
    </ol>
</nav>

<main> <!-- main cho nội dung chính -->
    <article> <section id="gallery">
            <header><h3>Hình ảnh thực tế</h3></header>
            <figure> <img src="[main.jpg](https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-1_3.png)" alt="Mặt trước iPhone 16">
                <div class="thumbnails">
                    <img src="[side.jpg](https://thegioialo.vn/wp-content/uploads/2024/06/iPhone-16-3-1.jpg)" alt="Cạnh bên">
                    <img src="[back.jpg](https://photo.znews.vn/w660/Uploaded/yqdlcqrwq/2024_06_24/12026062024.jpg)" alt="Mặt lưng">
                    </div>
                <figcaption>Hình ảnh chi tiết mẫu iPhone 16</figcaption>
            </figure>
        </section>

        <section id="product-details">
            <h2>iPhone 16 - Chính hãng VN/A</h2> <data value="25990000">25.990.000đ</data> <div class="rating-badge">4.9/5 ⭐ (1.2k đánh giá)</div>
            <article class="summary">
                <h4>Mô tả sản phẩm:</h4>
                <p>Chip A18 Pro mạnh mẽ, camera điều khiển bằng nút bấm mới...</p>
            </article>
        </section>

        <section id="specification">
            <h3>Cấu hình chi tiết</h3>
            <table border="1"> <caption>Bảng so sánh cấu hình</caption>
                <tr>
                    <th scope="row">Màn hình</th> <td>OLED 6.3 inch</td>
                </tr>
                <tr>
                    <th scope="row">Dung lượng</th>
                    <td>256GB / 512GB</td>
                </tr>
            </table>
        </section>

        <section id="user-reviews">
            <h3>Bình luận từ người mua</h3>
            <section class="comment-item"> <strong>Tạ Hoàng Thương:</strong>
                <blockquote>Máy dùng rất mượt, giao hàng nhanh!</blockquote> </section>
        </section>
    </article>
</main>

<aside> <h4>Có thể bạn cũng thích</h4>
    <ul> <li><a href="/samsung-s24">Samsung Galaxy S24 Ultra</a></li>
        <li><a href="/iphone-15">iPhone 15 Pro Max</a></li>
    </ul>
</aside>

<footer> <!-- footer cho cuối trang -->
    <p>&copy; 2026</p>
</footer>

Câu C2
Việc cho rằng chỉ cần dùng <div> và đặt tên lớp (class) là đủ là một tư duy phiến diện, chỉ nhìn thấy sự tiện lợi nhất thời mà bỏ qua những giá trị cốt lõi của phát triển Web bền vững. Dưới đây là những lý do tại sao HTML ngữ nghĩa là bắt buộc:
- Tối ưu hóa công cụ tìm kiếm (SEO): Google Bot và các công cụ tìm kiếm không hiểu được ý nghĩa của các tên lớp do chúng ta tự đặt (ví dụ: <div class="tieude">). Thay vào đó, chúng tìm kiếm các thẻ như <h1>, <header>, hay <article> để xác định cấu trúc dữ liệu quan trọng nhất. Nếu chỉ dùng <div>, trang web sẽ trở thành một "vùng đất bằng phẳng" không có điểm nhấn, khiến khả năng xếp hạng tìm kiếm bị giảm sút nghiêm trọng.
- Khả năng tiếp cận (Accessibility): Đây là trách nhiệm đạo đức và kỹ thuật. Những người khiếm thị sử dụng phần mềm đọc màn hình (Screen Readers) dựa vào các thẻ ngữ nghĩa để điều hướng. Khi gặp thẻ <nav>, máy sẽ báo "Đây là menu"; khi gặp <main>, máy sẽ nhảy thẳng đến nội dung chính. Một trang web toàn <div> sẽ khiến họ hoàn toàn lạc lối vì máy không thể hiểu cấu trúc của nó.




