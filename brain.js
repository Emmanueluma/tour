let searchBtn = document.getElementById('search-btn');
let form = document.getElementById('form');
let loginForm = document.getElementById('loginSection');
let loginBtn = document.getElementById('login-btn');
let mainLoginForm = document.getElementById('loginForm');
let searchBtn1 = document.getElementById('search-btn1');
let menuBar = document.getElementById('menu-bar');
let ul = document.getElementById('ul');
let links = document.getElementsByClassName('a');
let v1 = document.getElementById('one');
let v2 = document.getElementById('two');
let v3 = document.getElementById('third');
let v4 = document.getElementById('fourth');
let v5 = document.getElementById('fifth');
let videoBg = document.getElementById('videoBg');


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
mainLoginForm.style.display = "none";

loginBtn.addEventListener('click', e => {
    let height = loginForm.style.height;
    if (height == '0px') {
        loginForm.style.height = '100%';
        loginForm.style.opacity = 1;
        mainLoginForm.style.display = "block";
        searchBtn1.addEventListener('click', e => {
            loginForm.style.height = '0px';
        loginForm.style.opacity = 0;
        mainLoginForm.style.display = "none";
        });
    } else {
        loginForm.style.height = '0px';
        loginForm.style.opacity = 0;
        mainLoginForm.style.display = "none";
    }
});

ul.style.height = '0vh';
ul.style.opacity = 0;
menuBar.addEventListener('click', e => {
    if (ul.style.height == '50vh') {
        menuBar.classList.add('fa-bars');
        menuBar.classList.remove('fa-times');
        ul.style.height = '0vh';
        ul.style.opacity = 0;
    }else {
        menuBar.classList.remove('fa-bars');
        menuBar.classList.add('fa-times');
        ul.style.height = '50vh';
        ul.style.opacity = 1;
    }
})
v1.classList.add('active');
vi(v1,1);
vi(v2,2);
vi(v3,3);
vi(v4,4);
vi(v5,5);





function vi(video,number) {
    video.addEventListener('click', e=> {
        videoBg.src = 'images/vid-' + number + '.mp4';
        v1.classList.remove('active');
        v2.classList.remove('active');
        v3.classList.remove('active');
        v4.classList.remove('active');
        v5.classList.remove('active');
        video.classList.toggle('active');
    });
}




