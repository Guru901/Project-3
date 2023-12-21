const hvrImg = document.querySelectorAll(".arr-img");
const btn_1 = document.querySelector(".add-cart-1");
const btn_2 = document.querySelector(".add-cart-2");
const btn_3 = document.querySelector(".add-cart-3");
const btn_4 = document.querySelector(".add-cart-4");

hvrImg.forEach(function (elem, index) {
    elem.addEventListener("mouseover", function () {
        if (index === 0) {
            btn_1.style.opacity = "1";
            btn_1.style.visibility = "visible";
            btn_1.style.pointerEvents = "all";
        }
        if (index === 1) {
            btn_2.style.opacity = "1";
            btn_2.style.visibility = "visible";
            btn_2.style.pointerEvents = "all";
        }
        if (index === 2) {
            btn_3.style.opacity = "1";
            btn_3.style.visibility = "visible";
            btn_3.style.pointerEvents = "all";
        }
        if (index === 3) {
            btn_4.style.opacity = "1";
            btn_4.style.visibility = "visible";
            btn_4.style.pointerEvents = "all";
        }
    });
    elem.addEventListener("mouseleave", function () {
        if (index === 0) {
            btn_1.style.opacity = "0";
            btn_1.style.visibility = "hidden";
            btn_1.style.pointerEvents = "none";
        }
        if (index === 1) {
            btn_2.style.opacity = "0";
            btn_2.style.visibility = "hidden";
            btn_2.style.pointerEvents = "none";
        }
        if (index === 2) {
            btn_3.style.opacity = "0";
            btn_3.style.visibility = "hidden";
            btn_3.style.pointerEvents = "none";
        }
        if (index === 3) {
            btn_4.style.opacity = "0";
            btn_4.style.visibility = "hidden";
            btn_4.style.pointerEvents = "none";
        }
    });
});

if (btn_1) {
    btn_1.style.opacity = "1";
    btn_1.style.visibility = "visible";
    btn_1.style.pointerEvents = "all";
}

if (btn_2) {
    btn_2.style.opacity = "1";
    btn_2.style.visibility = "visible";
    btn_2.style.pointerEvents = "all";
}
if (btn_3) {
    btn_3.style.opacity = "1";
    btn_3.style.visibility = "visible";
    btn_3.style.pointerEvents = "all";
}
if (btn_4) {
    btn_4.style.opacity = "1";
    btn_4.style.visibility = "visible";
    btn_4.style.pointerEvents = "all";
}

