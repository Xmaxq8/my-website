const express = require('express');
const { Client } = require('pg');  // استيراد مكتبة PostgreSQL
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// إعداد body-parser لتحليل البيانات المستلمة
app.use(bodyParser.json());

// إعداد الاتصال بقاعدة البيانات (PostgreSQL) باستخدام الرابط الخارجي من Render
const client = new Client({
  connectionString: 'postgresql://farm_zajel_43uh_user:rOgWumVlUJsBEpiFpmnLrokD79pt33gv@dpg-d07cv1ruibrs73fcejsg-a.ohio-postgres.render.com/farm_zajel_43uh',
  ssl: {
    rejectUnauthorized: false,  // تأكيد الاتصال عبر SSL
  },
});

// الاتصال بقاعدة البيانات
client.connect()
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Connection error', err.stack));

// مسار لإضافة الأزواج
app.post('/add-couple', (req, res) => {
  const { coupleId, eggCount } = req.body;  // استقبال البيانات من المستخدم

  // إدخال البيانات إلى قاعدة البيانات
  const query = 'INSERT INTO couples (couple_id, egg_count) VALUES ($1, $2)';
  client.query(query, [coupleId, eggCount], (err, result) => {
    if (err) {
      return res.status(500).send('Error adding couple');  // في حالة الخطأ
    }
    res.status(200).send('Couple added successfully');  // إذا تم بنجاح
  });
});

// بدء الخادم على المنفذ 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
