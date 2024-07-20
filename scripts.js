// Lấy các phần tử
const modal = document.getElementById('product-modal');
const closeButton = document.getElementById('close-modal');
const imageLeft = document.querySelector('.image-left img');
const imageMid = document.querySelector('.image-mid img');
const imageRight = document.querySelector('.image-right img');
const orderForm = document.getElementById('order-form');

// Hiển thị modal khi nhấp vào ảnh
function openModal(description, price) {
    document.getElementById('product-description').innerText = description;
    document.getElementById('product-price').innerText = price;
    modal.style.display = 'block';
}

// Đóng modal
function closeModal() {
    modal.style.display = 'none';
}

// Xử lý sự kiện khi nhấp vào ảnh
imageLeft.addEventListener('click', () => openModal('Nem dài: Đặc điểm nổi bật ...', 'Giá: 100.000 VNĐ'));
imageMid.addEventListener('click', () => openModal('Nem ngắn: Đặc điểm nổi bật ...', 'Giá: 150.000 VNĐ'));
imageRight.addEventListener('click', () => openModal('Nem đặc biệt: Đặc điểm nổi bật ...', 'Giá: 200.000 VNĐ'));

// Xử lý sự kiện khi nhấp vào nút đóng
closeButton.addEventListener('click', closeModal);

// Đóng modal khi nhấp ra ngoài modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Xử lý việc gửi đơn hàng
orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Ngăn chặn hành vi gửi form mặc định

    const quantity = document.getElementById('quantity').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Thực hiện gửi dữ liệu đơn hàng qua email hoặc API ở đây

    // Ví dụ hiển thị thông báo
    alert(`Đơn hàng của bạn đã được gửi!\n\nSản phẩm: ${document.getElementById('product-description').innerText}\nSố lượng: ${quantity}\nTên: ${name}\nEmail: ${email}\nSố điện thoại: ${phone}\nĐịa chỉ: ${address}`);

    // Đóng modal sau khi gửi
    closeModal();
});

orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Ngăn chặn hành vi gửi form mặc định

    const quantity = document.getElementById('quantity').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    const orderData = {
        productDescription: document.getElementById('product-description').innerText,
        productPrice: document.getElementById('product-price').innerText,
        quantity: quantity,
        name: name,
        email: email,
        phone: phone,
        address: address
    };

    fetch('http://localhost:3000/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
    })
    .then(response => response.json())
    .then(data => {
        alert(`Đơn hàng của bạn đã được gửi!\n\nSản phẩm: ${orderData.productDescription}\nSố lượng: ${quantity}\nTên: ${name}\nEmail: ${email}\nSố điện thoại: ${phone}\nĐịa chỉ: ${address}`);
        closeModal();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

