let a = document.querySelector("#guonian");
let time = 5;

let arr = ["one🍕", "two🍔", "three🍟", "four🌭",
    "five🍿", "six🧂", "seven🥓", "eight🥚", "nine🥟", "ten🍞"
];

let suijishu = Math.floor(Math.random() * 5);
let arrsuiji = ["10斗币", "20斗币", "30斗币", "40斗币", "50斗币"];

let dianji = 0;
a.addEventListener("click", i);

function i() {
    dianji++;
    console.log(dianji);
    if (dianji == 1) {
        a.removeEventListener('click', i);
        b();


    } else if (dianji == 2) {
        a.innerHTML = "Click on the red envelope, there's a surprise";
        document.querySelector(".hongbao").style.display = "block";
        document.querySelector(".dianwo").style.display = "block";
    }
}

let qian = document.querySelector(".hongbao");
qian.addEventListener("click", () => {
    document.querySelector(".hongbao").style.display = "none";
    document.querySelector(".dianwo").style.display = "none";

    document.querySelector(".qian").style.display = "block";
    a.innerHTML = "🥟Congratulations on winning the grand prize . " + arrsuiji[suijishu] + "🥟";
})


function b() {

    if (time >= 0) {
        a.innerHTML = arr[time - 1];
        if (time == 0) {
            a.innerHTML = "🎉Happy new year, Click I have red envelope🎆";
            a.addEventListener('click', i);

            // document.querySelector(".hongbao").style.display == "none";
        }
        time--;
        setTimeout(b, 1000);
    }
}