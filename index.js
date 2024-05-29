// Function handleTabSwitch

const tabButtons = document.querySelectorAll(".nav-link");
const handleTabSwitch = (event) => {
  tabButtons.forEach((nav) => {
    // Đặt lại icon mặc định
    let icon = nav.querySelector("span");
    icon.innerHTML = "📒";
  });
  // Đặt icon active
  let iconActive = event.target.querySelector("span");
  iconActive.innerHTML = "📖";
};

tabButtons.forEach((nav) => {
  nav.onclick = handleTabSwitch;
});

// Đảm bảo tab đầu tiên được active khi tải trang
document.querySelector(".nav-link.active").click();

// Function kiểm tra số nguyên tố
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Function tìm số nguyên tố đầu tiên
const firstPrime = (arr) => {
  return arr.find(isPrime);
  // for (let i = 0; i < arr.length; i++) {
  //   if (isPrime(arr[i])) {
  //     return arr[i];
  //   }
  // }
  // return null;
};

// Tạo mảng
let arrDaySo = [];

// Thêm số
document.getElementById("btnThemSo").onclick = () => {
  let soN = document.getElementById("nhapSoN").value * 1;
  arrDaySo.push(soN);
  document.getElementById("themSoN").innerHTML += `${soN}, `;
};

// Reset Input
document.getElementById("btnResetInput").onclick = () => {
  document.getElementById("formSoN").reset();
  document.getElementById("nhapSoN").focus();
};

// Reset Array
document.getElementById("btnResetArray").onclick = () => {
  arrDaySo = [];
  document.getElementById("formSoN").reset();
  document.getElementById("themSoN").innerHTML = "";
  document.getElementById("nhapSoN").focus();
};

// Tính tổng số dương
document.getElementById("btnTinhTong").onclick = () => {
  let tong = 0;
  arrDaySo.forEach((number) => {
    number > 0 ? (tong += number) : null;
  });
  document.getElementById("tinhTong").innerHTML = `Tổng số dương: ${tong}`;
};

// Đếm số dương
document.getElementById("btnDemSo").onclick = () => {
  let count = 0;
  arrDaySo.forEach((number) => {
    number > 0 ? count++ : null;
  });
  document.getElementById("demSo").innerHTML = `Số dương: ${count}`;
};

// Tìm số nhỏ nhất
document.getElementById("btnTimSoNhoNhat").onclick = () => {
  let arrNewDaySo = [...arrDaySo];
  arrNewDaySo.sort((a, b) => a - b);
  let min = arrNewDaySo[0];
  document.getElementById("timSoNhoNhat").innerHTML = `Số nhỏ nhất: ${min}`;
};

// Tìm số dương nhỏ nhất
document.getElementById("btnTimSoDuongNhoNhat").onclick = () => {
  let arrNewDaySo = [...arrDaySo];
  arrNewDaySo.sort((a, b) => b - a);
  let minDuong = arrNewDaySo[0];
  if (minDuong <= 0) {
    document.getElementById("timSoDuongNhoNhat").innerHTML =
      "Không có số dương trong mảng";
  } else {
    arrNewDaySo.forEach((number) => {
      number > 0 && number < minDuong ? (minDuong = number) : null;
    });
    document.getElementById(
      "timSoDuongNhoNhat"
    ).innerHTML = `Số dương nhỏ nhất: ${minDuong}`;
  }
};

// Tìm số chẵn cuối cùng
document.getElementById("btnTimSoChanCuoiCung").onclick = () => {
  let arrNewDaySo = arrDaySo.filter((number) => number % 2 === 0);
  if (arrNewDaySo.length == 0) {
    document.getElementById("timSoChanCuoiCung").innerHTML =
      "Không có số chẵn trong mảng";
  } else {
    let lastEvenNumber = arrNewDaySo[arrNewDaySo.length - 1];
    document.getElementById(
      "timSoChanCuoiCung"
    ).innerHTML = `Số chẵn cuối cùng: ${lastEvenNumber}`;
  }
};

// Đổi chỗ 2 giá trị trong mảng
document.getElementById("btnDoiCho").onclick = () => {
  let arrNewDaySo = [...arrDaySo];
  let index1 = document.getElementById("index1").value * 1;
  let index2 = document.getElementById("index2").value * 1;
  if (
    index1 < 0 ||
    index2 < 0 ||
    index1 > arrNewDaySo.length - 1 ||
    index2 > arrNewDaySo.length - 1
  ) {
    alert("Giá trị vị trí nhập vào chưa hợp lệ! Vui lòng nhập lại");
  } else {
    let temp = arrNewDaySo[index1];
    arrNewDaySo[index1] = arrNewDaySo[index2];
    arrNewDaySo[index2] = temp;
    document.getElementById("doiCho").innerHTML = `Mảng sau khi đổi: `;
    arrNewDaySo.forEach((number) => {
      document.getElementById("doiCho").innerHTML += `${number}, `;
    });
  }
};

// Sắp xếp tăng dần
document.getElementById("btnSapXep").onclick = () => {
  let arrNewDaySo = [...arrDaySo];
  arrNewDaySo.sort((a, b) => a - b);
  document.getElementById("sapXep").innerHTML = `Mảng sau khi sắp xếp: `;
  arrNewDaySo.forEach((number) => {
    document.getElementById("sapXep").innerHTML += `${number}, `;
  });
};

// Tìm số nguyên tố đầu tiên
document.getElementById("btnTimSoNguyenTo").onclick = () => {
  let arrNewDaySo = arrDaySo.filter((num) => {
    if (Number.isInteger(num)) {
      return num;
    }
  });
  if (firstPrime(arrNewDaySo) == null) {
    document.getElementById(
      "timSoNguyenTo"
    ).innerHTML = `Không có số nguyên tố`;
  } else {
    document.getElementById(
      "timSoNguyenTo"
    ).innerHTML = `Số nguyên tố đầu tiên: ${firstPrime(arrNewDaySo)}`;
  }
};

// Đếm số nguyên
document.getElementById("btnDemSoNguyen").onclick = () => {
  let count = 0;
  arrDaySo.forEach((num) => {
    Number.isInteger(num) ? count++ : null;
  });
  document.getElementById("demSoNguyen").innerHTML = `Số nguyên: ${count}`;
};

// So sánh số lượng số dương và số lượng số âm
document.getElementById("btnSoSanh").onclick = () => {
  let countDuong = 0;
  let countAm = 0;
  arrDaySo.forEach((num) => {
    if (num > 0) {
      countDuong++;
    } else if (num < 0) {
      countAm++;
    }
  });
  if (countDuong > countAm) {
    document.getElementById(
      "soSanh"
    ).innerHTML = `Số dương > Số âm (${countDuong} > ${countAm})`;
  } else if (countDuong < countAm) {
    document.getElementById(
      "soSanh"
    ).innerHTML = `Số dương < Số âm (${countDuong} < ${countAm})`;
  } else {
    document.getElementById(
      "soSanh"
    ).innerHTML = `Số dương = Số âm (${countDuong} = ${countAm})`;
  }
};
