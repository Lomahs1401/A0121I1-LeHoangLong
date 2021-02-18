let physics = prompt("Nhập điểm Vật lý: ");
let chemistry = prompt("Nhập điểm Hóa học: ");
let biology = prompt("Nhập điểm Sinh học: ");
a = parseInt(physics);// a là điểm môn Lý
b = parseInt(chemistry); // b là điểm môn Hóa
c = parseInt(biology); // c là điểm môn Sinh
let sum = a + b + c;
let average = sum / 3;
document.write("Điểm tổng là " + sum);
document.write("<br/>");
document.write("Điểm trung bình là " + average);