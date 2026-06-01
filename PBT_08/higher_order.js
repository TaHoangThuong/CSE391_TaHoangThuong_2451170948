// Hàm 1: pipe() — Nối chuỗi các functions lại
// pipe nhận vào nhiều function, trả về 1 function mới
// function mới đó chạy input qua từng function theo thứ tự

function pipe(...fns) {
  // fns là mảng các function
  // dùng reduce để chạy qua từng fn, kết quả của fn này là đầu vào của fn tiếp theo
  return function (x) {
    return fns.reduce((ketQua, fn) => fn(ketQua), x);
  };
}

// Test pipe:
const process = pipe(
  (x) => x * 2, // 5 => 10
  (x) => x + 10, // 10 => 20
  (x) => x.toString(), // 20 => "20"
  (x) => "Kết quả: " + x, // "20" => "Kết quả: 20"
);
console.log("=== pipe ===");
console.log(process(5)); // => "Kết quả: 20"
console.log(process(3)); // => "Kết quả: 16"

// Hàm 2: memoize() — Lưu cache kết quả đã tính
// Lần đầu tính thật => lưu vào cache
// Lần sau gọi với cùng tham số => lấy trong cache luôn, không tính lại

function memoize(fn) {
  // cache là object lưu kết quả: { "tham_so": ket_qua }
  const cache = {};

  return function (n) {
    // kiểm tra đã có trong cache chưa
    if (cache[n] !== undefined) {
      console.log("Lấy từ cache:", n);
      return cache[n];
    }
    // chưa có => tính thật rồi lưu vào cache
    const result = fn(n);
    cache[n] = result;
    return result;
  };
}

// Test memoize:
const expensiveCalc = memoize((n) => {
  console.log("Đang tính...");
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += i;
  }
  return result;
});

console.log("\n=== memoize ===");
console.log(expensiveCalc(1000000)); // => "Đang tính..." rồi in kết quả
console.log(expensiveCalc(1000000)); // => "Lấy từ cache" (không tính lại!)
console.log(expensiveCalc(500000)); // => "Đang tính..." (tham số mới)
console.log(expensiveCalc(500000)); // => "Lấy từ cache"

// Hàm 3: debounce() — Trì hoãn thực hiện
// Gọi nhiều lần liên tiếp => chỉ thực hiện sau khi dừng gọi được `delay` ms
// Ứng dụng thực tế: ô tìm kiếm — người dùng đang gõ thì chưa search,
// gõ xong dừng mới search

function debounce(fn, delay) {
  let timeoutId = null; // lưu id của setTimeout

  return function (...args) {
    // nếu đang đợi thì hủy đi
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // đặt lại timer mới
    timeoutId = setTimeout(() => {
      fn(...args);
      timeoutId = null;
    }, delay);
  };
}

// Test debounce:
const search = debounce((query) => {
  console.log("Đang tìm kiếm:", query);
}, 500);

console.log("\n=== debounce ===");
// gọi liên tiếp => chỉ lần cuối (sau 500ms) mới thực sự chạy
search("i"); // bị hủy
search("ip"); // bị hủy
search("iph"); // bị hủy
search("ipho"); // bị hủy
search("iphon"); // bị hủy
search("iphone"); // => sau 500ms mới in "Đang tìm kiếm: iphone"

// Hàm 4: retry() — Thử lại nếu bị lỗi
// Gọi fn, nếu lỗi thì thử lại, thử tối đa maxAttempts lần

async function retry(fn, maxAttempts = 3) {
  let lastError = null;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      console.log(`Lần thử ${attempt}/${maxAttempts}...`);
      const result = await fn();
      console.log("Thành công!");
      return result;
    } catch (error) {
      lastError = error;
      console.log(`Lần ${attempt} thất bại: ${error.message}`);

      // nếu chưa hết lần thử thì chờ 1 giây rồi thử lại
      if (attempt < maxAttempts) {
        console.log("Đợi 1 giây rồi thử lại...");
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }
  }

  // đã hết lần thử mà vẫn lỗi => ném lỗi ra ngoài
  throw new Error(
    `Thất bại sau ${maxAttempts} lần thử. Lỗi cuối: ${lastError.message}`,
  );
}

// Test retry:
console.log("\n=== retry ===");

// Giả lập API lúc thất bại lúc thành công
let demLanGoi = 0;
const fakeApiCall = () => {
  demLanGoi++;
  return new Promise((resolve, reject) => {
    if (demLanGoi < 3) {
      reject(new Error("Lỗi kết nối mạng"));
    } else {
      resolve({ data: "Dữ liệu trả về thành công!" });
    }
  });
};

// chạy test
retry(fakeApiCall, 3)
  .then((result) => console.log("Kết quả:", result))
  .catch((err) => console.log("Lỗi cuối cùng:", err.message));
