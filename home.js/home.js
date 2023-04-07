// 以下调用函数
// 以上调用函数

let time = document.querySelector('.daohang_zuo');
let ren_tishi = document.querySelector('.tishi');
let shijiantishi = document.querySelector('.time_tishi');
let suijishu = Math.floor(Math.random() * 5);


setInterval(() => {
    gengxin()
}, 1000);

function add(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function gengxin() {
    let d = new Date();
    let c = d.getHours(); //小时
    let f = d.getMinutes(); //分钟
    let e = d.getSeconds(); //秒   

    c = add(c);
    f = add(f);
    e = add(e)
    time.children[0].innerText = c + ":" + f + ":" + e;
    // setTimeout(gengxin(), 1000);
}

tishiyu();

function tishiyu() {
    let wenhou = ["A healthy body is wealth", "Air is the source of health", "Cherish the source of life, shut down every bit", "The tap is in tears", "The world is wonderful because of life, and life is happy because of health"];
    ren_tishi.innerText = wenhou[suijishu];
}

setInterval(() => {
    shijian_tishi();

}, 1000);

function shijian_tishi() {
    let d = new Date();
    let c = d.getHours(); //小时

    let time_tishi = ["Go to bed early, it's very late", "Good morning. It's another good day", "Good noon. Did you take a nap ?", "Good afternoon. Do you have afternoon tea", "Good evening. Did you have a good time today", "It's late. It's time to go to bed!"];
    if (c >= 0 && c <= 6) {
        shijiantishi.innerText = time_tishi[0];
    } else if (c >= 7 && c <= 11) {
        shijiantishi.innerText = time_tishi[1];
    } else if (c >= 12 && c <= 15) {
        shijiantishi.innerText = time_tishi[2];
    } else if (c >= 16 && c <= 19) {
        shijiantishi.innerText = time_tishi[3];
    } else if (c >= 20 && c <= 22) {
        shijiantishi.innerText = time_tishi[4];
    } else if (c >= 23 && c <= 24) {
        shijiantishi.innerText = time_tishi[5];
    }
}


let bian = document.querySelector('.bianhuan');
let bian_two = document.querySelector('.bianhuan_two');

let one = document.querySelector('.mode_one');
let two = document.querySelector('.mode_two');

let cishu = 1;
bian_two.addEventListener("click", () => {
    cishu++;
    console.log(cishu);
    if (cishu % 2 == 0) {
        one.style.backgroundColor = 'black';
        two.style.backgroundColor = '#3B3B3B';

    } else {
        one.style.backgroundColor = 'darkslategray';
        two.style.backgroundColor = 'darkolivegreen';

    }

});
bian.addEventListener("click", () => {
    cishu++;
    console.log(cishu);
    if (cishu % 2 == 0) {
        one.style.backgroundColor = 'black';
        two.style.backgroundColor = '#3B3B3B';

    } else {
        one.style.backgroundColor = 'darkslategray';
        two.style.backgroundColor = 'darkolivegreen';

    }

});



document.onkeydown = function() {

    if (window.event && window.event.keyCode == 123) {
        alert("Wonderland Tips : The function key has been disabled");
        event.keyCode = 0;
        event.returnValue = false;
    }
    if (window.event && window.event.keyCode == 13) {
        window.event.keyCode = 505;
    }
    if (window.event && window.event.keyCode == 8) {
        alert(str + "\n请使用Del键进行字符的删除操作！");
        window.event.returnValue = false;
    }

}