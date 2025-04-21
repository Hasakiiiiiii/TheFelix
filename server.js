const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware xử lý form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve file tĩnh từ thư mục hiện tại
app.use(express.static(path.join(__dirname)));

// API nhận form gửi về
app.post('/submit-form', (req, res) => {
    // Kiểm tra xem có nhận được dữ liệu từ form không
    console.log('🔥 Dữ liệu nhận được:', req.body);  // In toàn bộ dữ liệu nhận được
  
    const { ho_ten, so_dien_thoai } = req.body;
    console.log('Tên:', ho_ten);
    console.log('Số điện thoại:', so_dien_thoai);
  
    res.send('✅ Đã nhận thông tin!');
  });
  

  app.listen(PORT, () => {
    console.log(`Server đang chạy tại cổng ${PORT}`);
  });
