Câu A1

Hàm tính thuế: nếu lương > 11 triệu thì thuế = 10%, còn lại = 0% Trả về object gồm thuong (thuế) và thuc_nhan (lương thực nhận)

1. Cách 1 — Function Declaration:

function tinhThueBaoHiem(luong) {
let thuong = 0;
if (luong > 11000000) {
thuong = luong \* 0.1;
}
let thuc_nhan = luong - thuong;
return { thuong, thuc_nhan };
}

2. Cách 2 — Function Expression:

const tinhThueBaoHiem = function(luong) {
let thuong = 0;
if (luong > 11000000) {
thuong = luong \* 0.1;
}
let thuc_nhan = luong - thuong;
return { thuong, thuc_nhan };
};

3. Cách 3 — Arrow Function:

const tinhThueBaoHiem = (luong) => {
let thuong = 0;
if (luong > 11000000) {
thuong = luong \* 0.1;
}
let thuc_nhan = luong - thuong;
return { thuong, thuc_nhan };
}; 4. Câu hỏi: 3 cách có khác nhau về Hoisting không?

- Có, khác nhau!

- Function Declaration thì được HOISTING (kéo lên đầu). Tức là mình có thể GỌI hàm TRƯỚC khi khai báo, JS không báo lỗi:

console.log(tinhThueBaoHiem(15000000));

function tinhThueBaoHiem(luong) {
}

- Function Expression và Arrow Function thì KHÔNG được hoisting (vì nó gán vào biến const/let). Nếu gọi trước khi khai báo sẽ bị lỗi:

console.log(tinhThueBaoHiem(15000000));
const tinhThueBaoHiem = (luong) => {
};

Câu A2

Đoạn 1 — Counter với Closure:

const c = counter();
console.log(c.increment()); // → 1
console.log(c.increment()); // → 2
console.log(c.increment()); // → 3
console.log(c.decrement()); // → 2
console.log(c.getCount()); // → 2

Giải thích: Biến count nằm trong hàm counter() (closure). Mỗi lần gọi increment() thì count tăng lên 1. decrement() thì giảm xuống 1. Cả increment, decrement, getCount đều "nhớ" được biến count của hàm cha.

Đoạn 2 — var vs let trong vòng lặp setTimeout:

Output sau 200ms:

var: 3
var: 3
var: 3
let: 0
let: 1
let: 2

- Với var: Biến i là FUNCTION SCOPE (hoặc global scope). Tức là chỉ có 1 biến i dùng chung cho cả vòng lặp. Khi setTimeout chạy sau 100ms thì vòng lặp for đã chạy xong rồi, i lúc này = 3. Cả 3 callback đều dùng chung biến i đó nên in ra 3 cả.

- Với let: Biến j là BLOCK SCOPE. Mỗi vòng lặp tạo ra một biến j MỚI riêng biệt (j=0, j=1, j=2). Mỗi callback "nhớ" biến j của vòng lặp tương ứng. Nên khi setTimeout chạy sau 200ms vẫn in đúng 0, 1, 2.

Câu A3

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Lấy các số chẵn
const soChans = nums.filter(n => n % 2 === 0);
// → [2, 4, 6, 8, 10]

// 2. Nhân mỗi số với 3
const nhanBa = nums.map(n => n \* 3);
// → [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

// 3. Tính tổng tất cả
const tongCong = nums.reduce((sum, n) => sum + n, 0);
// → 55

// 4. Tìm số đầu tiên > 7
const timDuoc = nums.find(n => n > 7);
// → 8

// 5. Kiểm tra CÓ số > 10 không
const coSoLon = nums.some(n => n > 10);
// → false

// 6. Kiểm tra TẤT CẢ đều > 0
const tatCaDuongKhong = nums.every(n => n > 0);
// → true

// 7. Tạo mảng "Số X là [chẵn/lẻ]"
const danhSachChanLe = nums.map(n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`);
// → ["Số 1 là lẻ", "Số 2 là chẵn", ...]

// 8. Đảo ngược mảng (không mutate gốc)
const daoNguoc = [...nums].reverse();
// → [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

Câu A4

const product = {
name: "iPhone 16",
price: 25990000,
specs: { ram: 8, storage: 256, color: "Titan" }
};

// Destructuring
const { name, price, specs: { ram, color } } = product;
console.log(name, price, ram, color); // "iPhone 16" 25990000 8 "Titan"
console.log(specs); // ReferenceError: specs is not defined

- Giải thích: Khi viết specs: { ram, color } thì JS lấy specs ra để destructure tiếp, nhưng KHÔNG tạo biến specs. Muốn dùng specs thì phải viết const { name, specs } = product riêng.

// Spread
const updated = { ...product, price: 23990000, sale: true };
console.log(updated.price); // 23990000 (bị ghi đè)
console.log(updated.sale); // true
console.log(product.price); // 25990000 (gốc KHÔNG đổi vì spread tạo object mới)

// Spread gotcha
const copy = { ...product };
copy.specs.ram = 16;
console.log(product.specs.ram); // 16

- Giải thích spread gotcha: { ...product } chỉ copy NÔNG (shallow copy). Tức là các property bình thường (name, price) được copy giá trị. Nhưng specs là một object → chỉ copy địa chỉ tham chiếu (reference), KHÔNG tạo object mới. Nên copy.specs và product.specs vẫn trỏ vào CÙNG 1 object trong bộ nhớ. Sửa copy.specs.ram cũng = sửa product.specs.ram.

Câu C1

Code sau khi refactor (dưới 10 dòng):

function processOrders(orders) {
return orders
.filter(order => order.status === "completed" && order.total > 100000)
.map(({ id, customer, total }) => ({
id,
customer,
total,
discount: total _ 0.1,
finalTotal: total - total _ 0.1
}))
.sort((a, b) => b.finalTotal - a.finalTotal);
}

So sánh trước và sau:

| Trước                           | Sau                               |
| :------------------------------ | :-------------------------------- |
| Dùng `var` (không tốt)          | Dùng `const/let` + arrow function |
| 2 vòng `for` lồng nhau để sort  | Dùng `.sort()` 1 dòng             |
| Tạo object thủ công từng trường | Dùng destructuring + shorthand    |
| ~25 dòng                        | ~9 dòng                           |
| Khó đọc                         | Đọc như tiếng Anh tự nhiên        |

Câu C2

const miniArray = {
// map: chạy qua từng phần tử, áp dụng fn, thêm vào mảng mới
map(arr, fn) {
let result = [];
for (let i = 0; i < arr.length; i++) {
result.push(fn(arr[i], i, arr));
}
return result;
},

    // filter: chạy qua từng phần tử, nếu fn trả true thì giữ lại
    filter(arr, fn) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
        return result;
    },

    // reduce: gom tất cả lại thành 1 giá trị
    reduce(arr, fn, initialValue) {
        let acc = initialValue;
        for (let i = 0; i < arr.length; i++) {
            acc = fn(acc, arr[i], i, arr);
        }
        return acc;
    }

};

// Test:
console.log(miniArray.map([1,2,3], x => x \* 2)); // → [2, 4, 6]
console.log(miniArray.filter([1,2,3,4], x => x > 2)); // → [3, 4]
console.log(miniArray.reduce([1,2,3,4], (a, b) => a + b, 0)); // → 10
