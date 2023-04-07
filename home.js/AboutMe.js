let get_color_1 = document.querySelector('.logo_k');
let get_color_2 = document.querySelector('.logo_i');
let get_color_3 = document.querySelector('.logo_d');
let get_color_4 = document.querySelector('.logo_o');

let color_huan = ["MediumBlue", "DeepSkyBlue", "IndianRed", "GoldenRod", "Khaki", "AliceBlue", "YellowGreen", "Indigo", "DarkSeaGreen", "black"]
let shuzu = [get_color_1, get_color_2, get_color_3, get_color_4]


setInterval(() => {
    color_hanshu()
}, 3000);

function color_hanshu() {
    for (let a = 0; a < shuzu.length; a++) {
        let random_suiji = Math.floor(Math.random() * 10);
        let b = shuzu[a];
        console.log(color_huan[random_suiji])
        b.style.color = color_huan[random_suiji];
    }
    console.log("-------------------i m color分界线-------------------------")
}