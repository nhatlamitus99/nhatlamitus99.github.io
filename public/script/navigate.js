
var listProducts = [];

listProducts.push({cate: "Nước Giặt Xả", name: "Nước Giặt Xả Amity 2 Trong 1 (5kg/Can) Hương Nước Hoa Diệt Khuẩn", brand: "Amity", price: 172, image: "../../public/images/featured-product/nuocgiatxa_1.jpg"})
listProducts.push({cate: "Nước Giặt Xả", name: "Nước Giặt Xả Amity 2 Trong 1 Hương Hoa Cỏ Thơm Mát Chống Bay Màu và Giữ Màu Sắc Nguyên Bản Cho Trang Phục (2kg/Can)", brand: "Amity", price: 76, image: "../../public/images/featured-product/nuocgiatxa_2.jpg"})
listProducts.push({cate: "Nước Giặt Xả", name: "Nước Rửa Chén Amity Hương Chanh Sả Diệt Khuẩn Can 3,8kg", brand: "Amity", price: 80, image: "../../public/images/featured-product/nuocgiatxa_3.jpg"})
listProducts.push({cate: "Nước Giặt Xả", name: "Nước Giặt Xả Amity 2 Trong 1 Hương Hoa Cỏ Thơm Mát Chống Bay Màu và Giữ Màu Sắc Nguyên Bản Cho Trang Phục (3,8kg/Can)", brand: "Amity", price: 143, image: "../../public/images/featured-product/nuocgiatxa_4.jpg"})
listProducts.push({cate: "Nước Giặt Xả", name: "Nước Giặt Xả Amity 2 Trong 1 Hương Hoa Cỏ Thơm Mát Chống Bay Màu và Giữ Màu Sắc Nguyên Bản Cho Trang Phục (5 kg/Can)", brand: "Amity", price: 172, image: "../../public/images/featured-product/nuocgiatxa_5.jpg"})
listProducts.push({cate: "Nước Giặt Xả", name: "Nước Giặt, Xả Amity 2 Trong 1 Nhãn Hồng Diệt Khuẩn Và Khử Mùi (Can 2,0kg)", brand: "Amity", price: 76, image: "../../public/images/featured-product/nuocruachen_1.jpg"})
listProducts.push({cate: "Nước Rửa Chén", name: "Nước Rửa Chén Amity Hương Chanh Mềm Dịu Cho Da Tay Sạch Nhanh Chén Bát Can 3,8kg", brand: "Amity", price: 80, image: "../../public/images/featured-product/nuocruachen_2.jpg"})
listProducts.push({cate: "Nước Rửa Chén", name: "Nước Rửa Chén Amity Hương Trà Xanh Khử Sạch Mùi tanh Can 3,8kg", brand: "Amity", price: 80, image: "../../public/images/featured-product/nuocruachen_3.jpg"})

listProducts.push({cate: "Nước Giặt Xả", name: "Nước Giặt Xả Hygiene Thái Lan", brand: "Hygiene", price: 120, image: "../../public/images/featured-product/hygiene_1.jpg"})
listProducts.push({cate: "Nước Giặt Xả", name: "Túi Nước Xả Hygiene Size Lớn", brand: "Hygiene", price: 90, image: "../../public/images/featured-product/hygiene_2.jpg"})
listProducts.push({cate: "Nước Giặt Xả", name: "Dây Nước Xả ", brand: "Hygiene", price: 19, image: "../../public/images/featured-product/hygiene_3.jpg"})
listProducts.push({cate: "Nước Giặt Xả", name: "Túi Nước Xả Hygiene Size Nhỏ", brand: "Hygiene", price: 50, image: "../../public/images/featured-product/hygiene_4.jpg"})
listProducts.push({cate: "Kem Đánh Răng", name: "Kem Đánh Răng Fresh & White", brand: "Fresh & White", price: 29, image: "../../public/images/featured-product/hygiene_5.jpg"})


function setData(id) {
    localStorage.setItem("id", id);
}

function loadData() {
    document.getElementById('brand').innerHTML = listProducts[localStorage.getItem("id")].cate;
    document.getElementById('name').innerHTML = listProducts[localStorage.getItem("id")].name;
    document.getElementById('cost').innerHTML = listProducts[localStorage.getItem("id")].price + ".000 đ";
    document.getElementById('image').setAttribute("src", listProducts[localStorage.getItem("id")].image);
    if(listProducts[localStorage.getItem("id")].brand != "Amity") {
        document.getElementById('detail').innerHTML = "Sản phẩm chất lượng, giá cả hợp lý, phù hợp với mọi gia đình Việt.";
    }
}

loadData();

