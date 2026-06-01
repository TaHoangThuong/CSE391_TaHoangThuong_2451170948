Câu A1

<div class="container">
    <div class="row">
        <div class="col-12 col-md-6 col-lg-3">Box 1</div>
        <div class="col-12 col-md-6 col-lg-3">Box 2</div>
        <div class="col-12 col-md-6 col-lg-3">Box 3</div>
        <div class="col-12 col-md-6 col-lg-3">Box 4</div>
    </div>
</div>
Bảng layout ở 3 kích thước:

| Kích thước         |     < 768px<br>(Mobile)      |               768px - 991px (Tablet)               |      ≥ 992px<br>(Desktop)      |
| :----------------- | :--------------------------: | :------------------------------------------------: | :----------------------------: |
| **Class áp dụng**  |           `col-12`           |                     `col-md-6`                     |           `col-lg-3`           |
| **Số cột mỗi box** |         12/12 = 100%         |                     6/12 = 50%                     |           3/12 = 25%           |
| **Box layout**     | 1 box/hàng, xếp<br>chồng dọc | 2 box/hàng (Box1+Box2<br>hàng 1, Box3+Box4 hàng 2) | 4 box nằm ngang<br>cùng 1 hàng |

Sơ đồ layout:

|                                                                                                                                                                Mobile (< 768px):                                                                                                                                                                |                                                                                                   Tablet (768–991px):                                                                                                   |                           Desktop (≥ 992px):                            |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------: |
| ┌─────────────┐<br>│ &nbsp;&nbsp;&nbsp;&nbsp;Box 1&nbsp;&nbsp;&nbsp;&nbsp; │<br>├─────────────┤<br>│ &nbsp;&nbsp;&nbsp;&nbsp;Box 2&nbsp;&nbsp;&nbsp;&nbsp; │<br>├─────────────┤<br>│ &nbsp;&nbsp;&nbsp;&nbsp;Box 3&nbsp;&nbsp;&nbsp;&nbsp; │<br>├─────────────┤<br>│ &nbsp;&nbsp;&nbsp;&nbsp;Box 4&nbsp;&nbsp;&nbsp;&nbsp; │<br>└─────────────┘ | ┌──────────┬──────────┐<br>│ &nbsp;&nbsp;Box 1&nbsp;&nbsp; │ &nbsp;&nbsp;Box 2&nbsp;&nbsp; │<br>├──────────┼──────────┤<br>│ &nbsp;&nbsp;Box 3&nbsp;&nbsp; │ &nbsp;&nbsp;Box 4&nbsp;&nbsp; │<br>└──────────┴──────────┘ | ┌────┬────┬────┬────┐<br>│ B1 │ B2 │ B3 │ B4 │<br>└────┴────┴────┴────┘ |

- col-md-6 có nghĩa là: Trên màn hình có kích thước ≥ 768px (medium), box này chiếm 6/12 cột = 50% chiều rộng. Khi màn hình nhỏ hơn 768px, class này không có tác dụng nữa.

Tại sao không cần viết col-sm-12?

- Class col-12 có nghĩa là áp dụng cho tất cả kích thước (từ xs trở lên), bao gồm cả sm. Breakpoint hoạt động theo kiểu "từ điểm đó trở lên", nên col-12 đã bao phủ mọi kích thước nhỏ hơn md rồi. Viết thêm col-sm-12 là thừa vì col-12 đã lo hết phần đó.

Câu A2

1. Giải thích class d-none d-md-block:

- d-none : display: none — ẩn phần tử này trên tất cả màn hình (bắt đầu từ xs)
- d-md-block : display: block — hiện lại phần tử khi màn hình ≥ 768px (md trở lên)
  Kết hợp lại: Ẩn trên mobile (< 768px), hiện ra trên tablet và desktop (≥ 768px).

Dùng để giấu một element khỏi màn hình nhỏ, ví dụ: sidebar, menu ngang, banner quảng cáo...

2. Liệt kê 5 spacing utilities:
   Cú pháp chung: {m/p}{direction}-{size} (m = margin, p = padding)

|   Class   | Ý nghĩa                    | CSS tương đương                                                      |
| :-------: | :------------------------- | :------------------------------------------------------------------- |
|  `mt-3`   | Margin top size 3          | `margin-top: 1rem` (16px)                                            |
|  `mb-4`   | Margin bottom size 4       | `margin-bottom: 1.5rem` (24px)                                       |
|  `px-4`   | Padding trái + phải size 4 | `padding-left: 1.5rem; padding-right: 1.5rem`                        |
|  `py-2`   | Padding trên + dưới size 2 | `padding-top: 0.5rem; padding-bottom: 0.5rem`                        |
| `mb-auto` | Margin bottom tự động      | `margin-bottom: auto` — dùng để đẩy element xuống dưới trong flexbox |
| `mx-auto` | Margin trái+phải = auto    | `margin-left: auto; margin-right: auto` — căn giữa theo chiều ngang  |

3. Sự khác nhau giữa .container, .container-fluid, .container-md:

|       Class        | Đặc điểm                                                    | Khi nào dùng                                                    |
| :----------------: | :---------------------------------------------------------- | :-------------------------------------------------------------- |
|    `.container`    | Có max-width cố định theo từng breakpoint, tự căn giữa      | Nội dung chính của trang, bài viết, product grid                |
| `.container-fluid` | Luôn rộng 100% màn hình, không có max-width                 | Hero section, header/footer full width, background ảnh          |
|  `.container-md`   | Full width khi < 768px, chuyển sang fixed width khi ≥ 768px | Khi muốn full width trên mobile nhưng có max-width trên tablet+ |

Câu C1

1. Quy trình đổi màu $primary sang #E63946:
   Cần cài đặt và dùng SASS. Các bước:

Bước 1: Cài đặt Node.js và npm, sau đó cài dependencies:

npm install bootstrap sass

Bước 2: Tạo cấu trúc thư mục:

project/
├── src/
│ └── scss/
│ └── custom.scss

Bước 3: Chỉnh file custom.scss

// Override $primary TRƯỚC khi import Bootstrap
$primary: #E63946;

// SAU ĐÓ mới import Bootstrap
@import "bootstrap/scss/bootstrap";

Bước 4: Build SASS ra CSS:

npx sass src/scss/custom.scss src/css/style.css
Bước 5: Trong HTML, dùng style.css

Kết quả: Tất cả btn-primary, bg-primary, text-primary... đều đổi sang màu đỏ #E63946.

Công cụ cần: Node.js, npm, SASS compiler. File cần modify: custom.scss (file SASS của mình tạo), không đụng vào file Bootstrap gốc.

2. Tại sao KHÔNG nên override trực tiếp .btn-primary { background: red; } ?

- Phải dùng !important nhiều: Bootstrap có specificity cao, muốn override phải thêm !important vào mọi chỗ → code xấu, khó đọc

- Chỉ fix được bề mặt: Nếu override .btn-primary, màu chỉ đổi ở button. Nhưng text-primary, border-primary, bg-primary vẫn xanh Bootstrap → website bị loạn màu, không đồng bộ

- Khó maintain sau này: Mỗi lần Bootstrap ra version mới có thêm class mới, lại phải đi tìm override thêm. Rất mệt.

- Dùng SASS variables thì: Chỉ cần đổi $primary: #E63946 một lần, Bootstrap tự generate lại toàn bộ color system — button, badge, alert, border, text... đều đồng bộ.

Câu C2 (10đ) — So sánh CSS thuần vs Bootstrap
Viết CSS thuần cho 1 Navbar responsive:

/_ CSS thuần — navbar _/
nav {
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
background-color: #343a40;
position: relative;
}
.nav-logo { color: white; font-size: 1.5rem; text-decoration: none; }
.nav-menu { display: flex; list-style: none; gap: 1.5rem; margin: 0; padding: 0; }
.nav-menu a { color: white; text-decoration: none; }
.nav-menu a:hover { color: #adb5bd; }
.hamburger { display: none; background: none; border: none; cursor: pointer; }
.hamburger span { display: block; width: 25px; height: 3px; background: white; margin: 5px 0; }

@media (max-width: 991px) {
.hamburger { display: block; }
.nav-menu {
display: none;
flex-direction: column;
position: absolute; top: 100%; left: 0; right: 0;
background: #343a40; padding: 1rem 2rem;
}
.nav-menu.active { display: flex; }
/_ + cần JavaScript để toggle class "active" _/
}
/_ Tổng: ~30 dòng CSS + cần thêm JS _/

Bootstrap version:

<!-- Bootstrap: ~15 dòng HTML, 0 dòng CSS, JS có sẵn -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" 
            data-bs-toggle="collapse" data-bs-target="#menu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="menu">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
      </ul>
    </div>
  </div>
</nav>
| Tiêu chí | CSS thuần | Bootstrap |
| :--- | :--- | :--- |
| **Số dòng CSS** | ~30 dòng CSS + JS | 0 dòng CSS |
| **Thời gian phát triển** | ~30-60 phút | ~5-10 phút |
| **Khả năng tùy biến** | Rất cao, hoàn toàn kiểm soát | Cần SASS để tùy biến sâu |
| **Cross-browser** | Phải tự test | Bootstrap đã test sẵn |

Khi NÊN dùng Bootstrap:

- Làm prototype, demo nhanh
- Dashboard, admin panel (không cần thiết kế độc đáo)
- Dự án nhỏ, team ít người, không có designer

Khi KHÔNG NÊN dùng Bootstrap:

- Cần thiết kế độc đáo, riêng biệt (landing page thương hiệu cao cấp)
- Dự án chỉ cần 1-2 component đơn giản (load cả Bootstrap = lãng phí)
- Đang học CSS thuần để nắm nền tảng vững
- Cần tối ưu performance tuyệt đối (bundle size Bootstrap khá lớn ~22KB gzip)
