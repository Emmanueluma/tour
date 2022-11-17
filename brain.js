let searchBtn = document.getElementById('search-btn');
let form = document.getElementById('form');
let loginForm = document.getElementById('loginSection');
let loginBtn = document.getElementById('login-btn');



form.style.height = '0px';
form.style.opacity = 0;

searchBtn.addEventListener('click', e => {
    console.log('hello');
    let height = form.style.height;
    if (height == '0px') {
        searchBtn.classList.remove('fa-search');
        searchBtn.classList.add('fa-times');
        form.style.height = '70px';
        form.style.opacity = 1;
    } else {
        searchBtn.classList.remove('fa-times');
        searchBtn.classList.add('fa-search');
        form.style.height = '0px';
        form.style.opacity = 0;
    }
    
});


loginForm.style.height = '0px';
loginForm.style.opacity = 0;

loginBtn.addEventListener('click', e => {
    let height = loginForm.style.height;
    if (height == '0px') {
        searchBtn.classList.remove('fa-search');
        searchBtn.classList.add('fa-times');
        loginForm.style.height = '100%';
        loginForm.style.opacity = 1;
    } else {
        searchBtn.classList.remove('fa-times');
        searchBtn.classList.add('fa-search');
        loginForm.style.height = '0px';
        loginForm.style.opacity = 0;
    }
    
});



