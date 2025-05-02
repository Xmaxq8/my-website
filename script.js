document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // إرسال بيانات تسجيل الدخول إلى السيرفر
  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
  .then(response => {
    if (response.status === 200) {
      document.getElementById("login-section").style.display = "none";
      document.getElementById("dashboard").style.display = "block";
      loadCouples(); // تحميل الأزواج
    } else {
      document.getElementById("error-message").innerText = "اسم المستخدم أو كلمة المرور غير صحيحة!";
    }
  });
});

// تحميل الأزواج
function loadCouples() {
  fetch('/get-couples')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.querySelector("#couplesTable tbody");
      tableBody.innerHTML = ""; // مسح البيانات السابقة
      data.forEach(couple => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${couple.couple_id}</td>
          <td>${couple.egg_count}</td>
          <td>${couple.treatment}</td>
          <td><button>حذف</button></td>
        `;
        tableBody.appendChild(row);
      });
    });
}
