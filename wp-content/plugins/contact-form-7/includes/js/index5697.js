const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Multer setup để đọc form kiểu multipart/form-data
const upload = multer();

// Serve file tĩnh từ thư mục hiện tại
app.use(express.static(path.join(__dirname)));

// Route xử lý form POST
app.post('/submit-form', upload.none(), (req, res) => {
    console.log('🔥 Dữ liệu nhận được:', req.body);

    const { ho_ten, so_dien_thoai } = req.body;

    console.log('Tên:', ho_ten);
    console.log('Số điện thoại:', so_dien_thoai);

    res.send('✅ Đã nhận thông tin!');
});

app.listen(port, () => {
    console.log(`🚀 Server đang chạy tại: http://localhost:${port}`);
});
