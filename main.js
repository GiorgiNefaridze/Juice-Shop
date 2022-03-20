//Burger Menu functional
const closeIcon = document.querySelectorAll(".burger div");
const burger = document.getElementById("burger");
const burgerMenu = document.querySelector('.burger_active');

burger.addEventListener('click', () => {
    burgerMenu.classList.toggle("burger_close");
})
closeIcon.forEach(e => {
    e.addEventListener('click', () => {
        burgerMenu.classList.toggle("burger_close");
    })
})
//Scroll to top functional
const scroll_up = document.getElementById("scroll_up");
scroll_up.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

window.addEventListener('scroll', () => {
    let coordinate = 1130;
    let scrollOnY = window.scrollY;

    if (scrollOnY >= coordinate) {
        scroll_up.style.display = "block";
    } else
        scroll_up.style.display = "none"
})
//Form submit button functional
function submitAlert() {
    Swal.fire({
        icon: 'error',
        title: 'ბოდიშით',
        text: 'საიტი არ არის დამთავრებული',
        footer: '<a href="https://www.facebook.com/profile.php?id=100028579554170">გაქ შეკითხვა?</a>'
    })
}