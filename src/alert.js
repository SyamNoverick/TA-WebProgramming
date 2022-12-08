const alertButton = document.querySelector(".cartButton");
alertButton.addEventListener("click", function () {
  alert("Ini adalah cart");
});

// function luasAlasSegitiga(alas, tinggi) {
//   let alasSegitiga = alas;
//   let tinggiSegitiga = tinggi;

//   return (alasSegitiga * tinggiSegitiga) / 2;
// }

// alert(luasAlasSegitiga(8, 15));

// soal kelompok 1

/* 1. bagaimana cara menghitung bangunan luas datar dengan menggunakan javascript*/

function bangunLuasDatar(panjang, lebar) {
  return panjang * lebar;
}

console.log(bangunLuasDatar(10, 10));

/* 2. tuliskan source code panjang diameter lingkaran*/

function diameterLingkaran(r) {
  return 2 * r;
}

console.log(diameterLingkaran(8));

const buttonFindOut = document.querySelector(".find-out").onClick;
const buttonLogin = document.querySelector(".login-button").onClick;
const appendButton = document.querySelector(".button-append");

const typoHome = document.getElementById("typo-home");

function changeColor() {
  typoHome.style.color = "red";
}

function changeColor2() {
  typoHome.style.color = "blue";
}

if (buttonFindOut.onClick) {
  changeColor();
} else if (buttonLogin.onClick) {
  changeColor2();
}

// if adalah percabangan dimana jika suatu kondisi terpenuhi maka scope ini akan dijalankan
// dan jika tidak maka akan ke scope else
