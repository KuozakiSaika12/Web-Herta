function toggleform(form){
    document.getElementById('regis-form').style.display = "none";
    document.getElementById('login-form').style.display = "none";
    if(form === 'login'){
        document.getElementById('title').textContent = "Login";
        document.getElementById('login-form').style.display = "block";

    }
    else if(form === 'register'){
        document.getElementById('title').textContent = "Register";
        document.getElementById('regis-form').style.display = "block";
    }
}

