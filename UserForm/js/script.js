const selects = document.querySelectorAll(".select")
const options_lists = document.querySelectorAll(".options-list")
const options = document.querySelectorAll(".option")
//切换语言菜单得显示和隐藏
selects[0].addEventListener("click", () => {
    options_lists[0].classList.toggle("active");
    selects[0].querySelector(".fa-angle-down").classList.toggle("fa-angle-up")
})
//切换语言
options.forEach((option) => {
    option.addEventListener("click", () => {
        options.forEach((option) => { option.classList.remove("selected") });
        selects[0].querySelector("span").innerHTML = option.innerHTML;
        option.classList.add("selected");
        options_lists[0].classList.toggle("active")
        selects[0].querySelector(".fa-angle-up").classList.toggle("fa-angle-up")
    })
})

// 第二个下拉菜单
selects[1].addEventListener("click", () => {
    options_lists[1].classList.toggle("active");
    selects[1].querySelector(".fa-angle-down").classList.toggle("fa-angle-up")
})
//切换语言
options.forEach((option) => {
    option.addEventListener("click", () => {
        options.forEach((option) => { option.classList.remove("selected") });
        selects[1].querySelector("span").innerHTML = option.innerHTML;
        option.classList.add("selected");
        options_lists[1].classList.toggle("active")
        selects[1].querySelector(".fa-angle-up").classList.toggle("fa-angle-up")
    })
})