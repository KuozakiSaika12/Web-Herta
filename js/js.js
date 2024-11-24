// const currentPath = window.location.pathname.split('/').pop();

// document.querySelectorAll('.main-nav .nav a').forEach(link =>{
//     if(link.getAttribute('href').includes(currentPath)){
//         link.classList.add('active')
//     }else{
//         link.classList.remove('active')
//     }
// })

const currentPath = window.location.pathname.split('/').pop(); // ดึงชื่อไฟล์ของหน้า
document.querySelectorAll('.nav a').forEach(link => {
const linkPath = link.getAttribute('href'); // ดึงค่า href ของ link
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
        link.classList.add('active'); // เพิ่ม active class
    } else {
        link.classList.remove('active'); // ลบ active class ถ้าไม่ตรง
    }
});


