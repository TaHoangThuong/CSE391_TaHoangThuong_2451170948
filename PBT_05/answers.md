Câu A1

1. Thẻ meta viewport chuẩn:
<meta name="viewport" content="width=device-width, initial-scale=1.0">

- name="viewport" — Khai báo đây là thẻ điều khiển viewport (vùng nhìn thấy của trang)
- content="width=device-width" — Đặt chiều rộng trang bằng đúng chiều rộng màn hình thiết bị
- initial-scale=1.0 — Mức zoom ban đầu là 100%, không zoom in hay zoom out

2. Nếu thiếu thẻ <meta viewport>, iPhone sẽ coi trang web là web desktop và thu nhỏ toàn bộ trang để vừa màn hình. Kết quả là chữ nhỏ li ti, phải zoom mới đọc được, trải nghiệm rất tệ.

3. Mobile-First: Viết CSS cho mobile trước (mặc định), sau đó dùng min-width để thêm style cho màn hình lớn hơn.

.grid-product {
display: grid;
grid-template-columns: 1fr;
}

@media (min-width: 768px) {
.grid-product {
grid-template-columns: repeat(2,1fr);  
 }
}
Desktop-First: Viết CSS cho desktop trước, dùng max-width để "rút bớt" khi màn hình nhỏ.

.grid-product {
display: grid;
grid-template-columns: repeat(4,1fr);
}

@media (max-width: 768px) {
.grid-product {
grid-template-columns: 1fr;  
 }
}

- Mobile-First được khuyên dùng vì:

* Điện thoại tải ít CSS hơn → trang nhanh hơn
* 60% người dùng dùng mobile (theo chương 13)
* Desktop thêm CSS = OK, ngược lại = lãng phí băng thông

Câu A2

|  Tên   | Kích thước | Thiết bị         | Lưới sản phẩm nên mấy cột? |
| :----: | :--------- | :--------------- | :------------------------- |
| **xs** | < 576px    | Điện thoại dọc   | 1 cột                      |
| **sm** | ≥ 576px    | Điện thoại ngang | 1-2 cột                    |
| **md** | ≥ 768px    | Tablet           | 2 cột                      |
| **lg** | ≥ 992px    | Desktop nhỏ      | 3 cột                      |
| **xl** | ≥ 1200px   | Desktop lớn      | 4 cột                      |

Câu A3

Phân tích code CSS:

- 375px: 100%
- 600px: 540px
- 800px: 720px
- 1000px: 960px
- 1400px: 1140px

Câu A4

- 4 tính năng chính của SCSS:

1. Variables ($primary-color) Khai báo biến để dùng lại giá trị, sửa 1 chỗ = thay đổi khắp nơi.

$primary-color: #3182ce;
$font-body: 'Inter', sans-serif;

.btn {
background: $primary-color;
font-family: $font-body;
}
.header {
background: $primary-color;
}

2. Nesting (viết CSS lồng nhau) Viết CSS theo cấu trúc HTML, tránh lặp selector cha nhiều lần.

.navbar {
background: #1a202c;

    ul {
        display: flex;

        li a {
            color: white;

            &:hover {   /* & = thẻ cha (a) → a:hover */
                color: $primary-color;
            }
        }
    }

}

3. Mixins (@mixin, @include) Giống như "hàm" trong lập trình — định nghĩa 1 lần, dùng nhiều lần.

@mixin flex-center {
display: flex;
justify-content: center;
align-items: center;
}

.hero {
@include flex-center;
height: 100vh;
}

.card {
@include flex-center;
}

4. @extend / Inheritance Kế thừa style từ selector khác, tránh lặp code.

%btn-base {
padding: 12px 24px;
border: none;
border-radius: 8px;
cursor: pointer;
}

.btn-primary {
@extend %btn-base;
background: #3182ce;
color: white;
}

.btn-danger {
@extend %btn-base;
background: #e53e3e;
color: white;
}

- Trình duyệt chỉ hiểu CSS thuần — nó không có engine để xử lý biến SCSS, nesting, mixin. File .scss cần qua bước compile (biên dịch) để chuyển thành .css thông thường trước khi trình duyệt đọc.

Câu C1

- Shoppe
  Mobile (375px — iPhone SE):

- Header: Chỉ hiển thị logo + icon tìm kiếm + icon giỏ hàng. Navigation ẩn hoàn toàn.
- Hamburger menu ☰ ở góc trái để mở danh mục
- Lưới sản phẩm: 2 cột (không phải 1 — Shopee ưu tiên hiện nhiều sp)
- Banner hero: Full width, ảnh thay đổi tỉ lệ
- Flash sale: Scroll ngang (horizontal scroll)
- Footer: Thu gọn, ẩn nhiều links không quan trọng

Tablet (768px):

- Header: Hiện thanh search rộng hơn, một số nav items xuất hiện
- Lưới sản phẩm: 3-4 cột
- Sidebar danh mục: Bắt đầu xuất hiện ở một số trang
- Flash sale: Hiện nhiều item hơn

\*\*Desktop (1440px):

- Header: Full navigation ngang, search bar to, icons
- Lưới sản phẩm: 5-6 cột
- Sidebar trái: Danh mục đầy đủ
- Layout 2 cột (sidebar + content)

Câu C2

1. Wireframe

### MOBILE (< 768px):

| Giao diện hiển thị (Wireframe)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Mô tả cấu trúc & Thuộc tính                                                                                                                                                                                                                                              |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ┌────────────────────┐<br>│ Logo Gọi │<br>├────────────────────┤<br>│ │<br>│ HERO IMAGE │<br>│ (toàn màn hình) │<br>├────────────────────┤<br>│ [Đặt bàn ngay ▼] │<br>├────────────────────┤<br>│ ẢNH MÓN ĂN │<br>│ [img][img] │<br>│ [img][img] │<br>│ [img][img] │<br>├────────────────────┤<br>│ FORM ĐẶT BÀN │<br>│ [Chọn ngày ] │<br>│ [Chọn giờ ] │<br>│ [Số người ] │<br>│ [Ghi chú ] │<br>│ [ ĐẶT BÀN ] │<br>├────────────────────┤<br>│ BẢN ĐỒ │<br>│ (nhúng iframe) │<br>├────────────────────┤<br>│ FOOTER │<br>└────────────────────┘ | **Header:** logo + số điện thoại (bỏ nav)<br><br>**Full width, height:** 250px<br><br>**CTA button** nổi bật<br><br>**2 cột** ảnh<br><br><br><br><br>**Stack dọc**, full width<br><br><br><br><br><br>**Maps thu nhỏ**, full width<br><br><br>**Minimal:** địa chỉ + SĐT |

**Ẩn trên mobile:** Links nav, sidebar, decorative images

---

### TABLET (768px - 1023px):

| Giao diện hiển thị (Wireframe)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Mô tả cấu trúc & Thuộc tính                                                                                                            |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| ┌──────────────────────────────────────┐<br>│ Nhà Hàng ABC [Menu] [Về chúng tôi] │<br>├──────────────────────────────────────┤<br>│ │<br>│ HERO IMAGE (full width) │<br>│ "Trải nghiệm ẩm thực đỉnh cao" │<br>│ [ Đặt bàn ngay ] │<br>├──────────────────────────────────────┤<br>│ [img][img][img] │<br>│ [img][img][img] │<br>├─────────────────┬────────────────────┤<br>│ FORM ĐẶT BÀN │ BẢN ĐỒ │<br>│ [Chọn ngày ] │ (Google Maps) │<br>│ [Chọn giờ ] │ │<br>│ [Số người ] │ │<br>│ [Ghi chú ] │ │<br>│ [ ĐẶT BÀN ] │ │<br>├─────────────────┴────────────────────┤<br>│ FOOTER │<br>└──────────────────────────────────────┘ | **Header:** Có thanh điều hướng đầy đủ<br><br>**height:** 350px<br><br><br><br>**3 cột** ảnh món ăn<br><br><br>**2 cột:** form \| maps |

2. CSS skeleton

- { box-sizing: border-box; margin: 0; padding: 0; }

.header {
display: flex;
justify-content: space-between;
align-items: center;
padding: 16px;
}
.nav-links { display: none; }
.phone-cta { display: block; }

.hero {
width: 100%;
height: 250px;
background-size: cover;
background-position: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

.food-grid {
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 12px;
padding: 16px;
}

.booking-section {
display: grid;
grid-template-columns: 1fr;
gap: 24px;
padding: 16px;
}

.booking-form input,
.booking-form select,
.booking-form textarea {
width: 100%;
padding: 12px;
margin-bottom: 12px;
}

@media (min-width: 768px) {
.nav-links { display: flex; gap: 24px; }
.phone-cta { display: none; }

    .hero { height: 350px; }

    .food-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .booking-section {
        grid-template-columns: 1fr 1fr;
    }

}

@media (min-width: 1024px) {
.hero { height: 500px; }

    .food-grid {
        grid-template-columns: repeat(6, 1fr);
    }

    .booking-section {
        grid-template-columns: 2fr 3fr;
    }

}

- Compile SCSS:

sass scss/style.scss style.css
