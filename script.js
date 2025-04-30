// متغيرات للتخزين المؤقت للبيانات
let selectedLanguage = 'ar';  // لغة البداية هي العربية
let userData = {};

// قائمة أسماء المستخدمين وكلمة المرور
const validUsers = ['1111'];
const validPassword = '1111';

// اختيار اللغة وتحديث النصوص بناءً عليها
function selectLanguage(language) {
    selectedLanguage = language;
    loadText();
    document.getElementById('language-selection').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
}

// تحميل النصوص المترجمة حسب اللغة المختارة
function loadText() {
    const texts = {
        ar: {
            loginTitle: "تسجيل الدخول",
            usernamePlaceholder: "اسم المستخدم",
            passwordPlaceholder: "كلمة المرور",
            loginButton: "تسجيل الدخول",
            dashboardTitle: "لوحة التحكم",
            noEggsTitle: "الأزواج التي لا تحتوي على بيض",
            withEggsTitle: "الأزواج التي تحتوي على بيض",
            withTreatmentTitle: "الأزواج التي تتلقى علاجًا",
            withEggsTreatmentTitle: "الأزواج التي تحتوي على بيض وتتلقى علاجًا",
            chicksTitle: "الفراخ",
            addButton: "إضافة سجل جديد"
        },
        hi: {
            loginTitle: "लॉगिन",
            usernamePlaceholder: "यूजरनेम",
            passwordPlaceholder: "पासवर्ड",
            loginButton: "लॉगिन करें",
            dashboardTitle: "डैशबोर्ड",
            noEggsTitle: "अंडे नहीं होने वाले जोड़े",
            withEggsTitle: "अंडे वाले जोड़े",
            withTreatmentTitle: "इलाज ले रहे जोड़े",
            withEggsTreatmentTitle: "अंडे और इलाज दोनों वाले जोड़े",
            chicksTitle: "चूजे",
            addButton: "नया रिकॉर्ड जोड़ें"
        }
    };

    const text = texts[selectedLanguage];

    document.getElementById('login-title').innerText = text.loginTitle;
    document.getElementById('username').placeholder = text.usernamePlaceholder;
    document.getElementById('password').placeholder = text.passwordPlaceholder;
    document.getElementById('login-button').innerText = text.loginButton;
    document.getElementById('dashboard-title').innerText = text.dashboardTitle;
    document.getElementById('no-eggs-title').innerText = text.noEggsTitle;
    document.getElementById('with-eggs-title').innerText = text.withEggsTitle;
    document.getElementById('with-treatment-title').innerText = text.withTreatmentTitle;
    document.getElementById('with-eggs-treatment-title').innerText = text.withEggsTreatmentTitle;
    document.getElementById('chicks-title').innerText = text.chicksTitle;
    document.getElementById('add-button').innerText = text.addButton;
}

// وظيفة تسجيل الدخول (محاكاة)
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // التحقق من اسم المستخدم وكلمة المرور
    if (validUsers.includes(username) && password === validPassword) {
        userData = { username };
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
    } else {
        document.getElementById('error-message').innerText = 'اسم المستخدم أو كلمة المرور غير صحيحة';
    }
}

// إضافة سجل جديد (محاكاة)
function addNewRecord() {
    // هذه هي الوظيفة التي ستقوم بإضافة البيانات عبر API
    alert('إضافة سجل جديد');
}

// تحميل النصوص عند تحميل الصفحة
loadText();
