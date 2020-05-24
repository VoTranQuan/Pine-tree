$(document).ready(function () {
    let news_data = ["PineTree - Miễn Phí Giao Dịch Chứng Khoán Phái Sinh", "PineTree - Thông Báo Gói Ưu Đãi Lãi Suất Ký Quỹ", "PineTree - Thông Báo Cập Nhật Thông Tin Khách Hàng Định Kỳ 2020"];
    let breaking = new Typed("#breaking-news", {
        strings: news_data,
        typeSpeed: 50,
        backSpeed: 50,
        loop: 3
    });
})