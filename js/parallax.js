const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;
let rotateDegree = 0;

function update (cursorPos) {
    parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotateSpeed = el.dataset.rotation

        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth/2 ? 1 : -1;
        let zvalue = (cursorPos - parseFloat(getComputedStyle(el).left) * isInLeft * 0.1);

        el.style.transform = `
        translate3d(calc(-50% + ${-xValue * speedx}px), calc(-50% + ${yValue * speedy}px), ${zvalue * speedz}px)
        rotateY(${rotateDegree * rotateSpeed}deg)
        perspective(2300px)
        `;
    });
}

update(0);

/*window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth/2;
    yValue = e.clientY - window.innerHeight/2;

    rotateDegree = (e.clientX / (window.innerWidth/2)) * 20;

    update(e.clientX);
});*/

// throttle mousemove event
var th = _.throttle(function(e) {
    xValue = e.clientX - window.innerWidth/2;
    yValue = e.clientY - window.innerHeight/2;

    rotateDegree = (e.clientX / (window.innerWidth/2)) * 20;

    update(e.clientX);
}, 10);

window.addEventListener("mousemove", th);