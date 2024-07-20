const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware để phân tích dữ liệu JSON
app.use(bodyParser.json());

// Route để xử lý yêu cầu POST tới /order
app.post('/order', (req, res) => {
    const orderData = req.body;
    console.log('Received order:', orderData);

    // Xử lý dữ liệu đơn hàng tại đây (ví dụ: lưu trữ vào cơ sở dữ liệu)
    // ...

    res.status(200).json({ message: 'Order received successfully' });
});

// Bắt đầu server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
