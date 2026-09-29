function check() {
    const email = document.querySelector('input[type="email"]').value;
    const email1 = "@gmail.com"
    const password = document.querySelector('input[type="password"]').value;
    if (email.endsWith(email1) && password.length >= 8 && password.length <= 20 && /[a-zA-Z]/.test(password)) {
        alert(" تم الدخول  بشكل صحيح")
    } else {
        alert("خطا في ادخال البيانات ")
    }



}