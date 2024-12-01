// Active navbar link
const currentPath = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav a').forEach(link =>{
    const linkPath = link.getAttribute('href');
    if(linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')){
        link.classList.add('active')
    }else{
        link.classList.remove('active')
    }
})



// switch Form

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


















