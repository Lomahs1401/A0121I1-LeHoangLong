function clickFunction() {
    var amount = document.getElementById('amount').value;
    var fromCurrency = document.getElementById('from').value;
    var toCurrency = document.getElementById('to').value;
    if (isNaN(amount)) {
        alert("Tiền tệ phải là một số!");
        return;
    }
    if (fromCurrency === "VNĐ" && toCurrency === "Dollar") {
        amount /= 23000;
        alert("Chuyển đổi thành công. Số tiền chuyển đổi là: " + amount + " USD");
    }
    if (fromCurrency === "VNĐ" && toCurrency === "Nhân dân tệ") {
        amount /= 3500;
        alert("Chuyển đổi thành công. Số tiền chuyển đổi là: " + amount + " Nhân dân tệ");
    }
    if (fromCurrency === "VNĐ" && toCurrency === "Yên") {
        amount /= 200;
        alert("Chuyển đổi thành công. Số tiền chuyển đổi là: " + amount + " Yên");
    }
    if (fromCurrency === 'VNĐ' && toCurrency === 'Won'){
        amount /= 20;
        alert("Chuyển đổi thành công. Số tiền chuyển đổi là: " + amount + " Won");
    }
    if (fromCurrency === "Dollar" && toCurrency === "VNĐ") {
        amount *= 23000;
        alert("Chuyển đổi thành công. Số tiền chuyển đổi là: " + amount + " VNĐ");
    }
    if (fromCurrency === "Dollar" && toCurrency === "Nhân dân tệ") {
        amount *= 6.4;
        alert("Chuyển đổi thành công. Số tiền chuyển đổi là: " + amount + " Nhân dân tệ");
    }
    if (fromCurrency === "Dollar" && toCurrency === "Yên") {
        amount *= 105;
        alert("Chuyển đổi thành công. Số tiền chuyển đổi là: " + amount + " Yên");
    }
    if (fromCurrency === "Dollar" && toCurrency === "Won") {
        amount *= 1000 ;
        alert("Chuyển đổi thành công. Số tiền chuyển đổi là: " + amount + " Won");
    }
    if (fromCurrency === "Nhân dân tệ" && toCurrency === "VNĐ") {
        amount *= 3500;
        alert("Chuyển đổi thành công. Số tiền chuyển đổi là: " + amount + " VNĐ");
    }
    if (fromCurrency === "Nhân dân tệ" && toCurrency === "Dollar") {
        amount *= 0.15;
        alert("Chuyển đổi thành công. Số tiền chuyển đổi là: " + amount + " USD");
    }
    if (fromCurrency === "Nhân dân tệ" && toCurrency === "Yên") {
        amount *= 16;
        alert("Chuyển đổi thành công. Số tiền chuyển đổi là: " + amount + " Yên");
    }
    if (fromCurrency === "Nhân dân tệ" && toCurrency === "Won") {
        amount *= 170;
        alert("Chuyển đổi thành công. Số tiền chuyển đổi là: " + amount + " Won");
    }
    if (fromCurrency === "Yên" && toCurrency === "VNĐ") {
        amount *= 200 ;
        alert("Chuyển đổi thành công. Số tiền chuyển đổi là: " + amount + " VNĐ");
    }
    if (fromCurrency === "Yên" && toCurrency === "Dollar") {
        amount *= 0.0094;
        alert("Chuyển đổi thành công. Số tiền chuyển đổi là: " + amount + " USD");
    }
    if (fromCurrency === "Yên" && toCurrency === "Nhân dân tệ") {
        amount *= 0.061;
        alert("Chuyển đổi thành công. Số tiền chuyển đổi là: " + amount + " Nhân dân tệ");
    }
    if (fromCurrency === "Yên" && toCurrency === "Won") {
        amount *= 10;
        alert("Chuyển đổi thành công. Số tiền chuyển đổi là: " + amount + " Won");
    }
    if (fromCurrency === "Won" && toCurrency === "VNĐ") {
        amount *= 20;
        alert("Chuyển đổi thành công. Số tiền chuyển đổi là: " + amount + " VNĐ");
    }
    if (fromCurrency === "Won" && toCurrency === "Dollar") {
        amount *= 0.0009;
        alert("Chuyển đổi thành công. Số tiền chuyển đổi là: " + amount + " USD");
    }
    if (fromCurrency === "Won" && toCurrency === "Nhân dân tệ") {
        amount *= 0.005;
        alert("Chuyển đổi thành công. Số tiền chuyển đổi là: " + amount + " Nhân dân tệ");
    }
    if (fromCurrency === "Won" && toCurrency === "Yên") {
        amount *= 0.1;
        alert("Chuyển đổi thành công. Số tiền chuyển đổi là: " + amount + " Yên");
    }
}



