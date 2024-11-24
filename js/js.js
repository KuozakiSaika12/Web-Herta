const currentPath = window.location.pathname.split('/').pop();

document.querySelectorAll('.main-nav .nav a').forEach(link =>{
    if(link.getAttribute('href').includes(currentPath)){
        link.classList.add('active')
    }else{
        link.classList.remove('active')
    }
})




