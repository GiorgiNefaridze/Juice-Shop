//Kits section (scrolling functional)
window.addEventListener('scroll', () => {
    const line = document.querySelector('.line')
    const coor = window.scrollY;
    // console.log(coor);

    switch (true) {
        case (coor >= 0 && coor <= 475):
            line.style.width = "210px"
            line.style.marginLeft = "0px"
            break;
        case (coor > 475 && coor < 963):
            line.style.width = "130px"
            line.style.marginLeft = "225px"
            break;
        case (coor > 663 && coor < 1440):
            line.style.width = "160px"
            line.style.marginLeft = "367px"
            break;
        case (coor > 1440):
            line.style.width = "130px";
            line.style.marginLeft = "540px";
            break;
    }
})