const cursor = document.querySelector('#cursor')
const leftSpans = document.querySelectorAll('.cover .left span')
const rightSpans = document.querySelectorAll('.cover .right span')
document.addEventListener('mousemove', (event) => {
    cursor.style.left = event.x + "px";
    cursor.style.top = event.y + "px";
})
const tl = gsap.timeline();
let head = document.querySelector('#main_content h1').textContent.split(' ')
let heading = document.createElement('h1')
let span = document.createElement('div');
let h1 = document.querySelector('#main_content h1')
for (let i = 0; i < head.length; i++) {
    // heading.innerText += `<div>${head[i]}</div>`
    let textWord = Array.from(head[i]);
    textWord.map((text) => {
        span.textContent += `<span>${text}</span>`;
        console.log(text)

    })
    // console.log(head[i].split(' ').forEach(e => `< span > ${ e }</span > `))
}
console.log(span)
h1.innerHTML = span.textContent;


function setLoadingAnimation(el) {
    tl.from(el, {
        duration: 0.4,
        x: 200,
        opacity: 0,
        stagger: 0.2,
    })
    tl.to(el, {
        x: 0,
        opacity: 1,
    })
}
function doAnimations() {
    tl.from(leftSpans, {
        duration: 0.4,
        x: -200,
        opacity: 0,
        stagger: {
            each: 0.4,
            from: 'end'
        },
    })
    tl.to(leftSpans,
        {
            x: 0,
            opacity: 1,
        })
    setLoadingAnimation(rightSpans);
    tl.to(".cover div", {
        fontSize: '5vw'
    })
    tl.to('.cover .right span', {
        duration: 1,
        x: 200,
        opacity: 0,
        stagger: { each: 0.3, from: "end" }
    })
    tl.to('.cover .left span', {
        duration: 1,
        x: -200,
        opacity: 0,
        stagger: 0.3
    })
    tl.to('.cover', {
        background: 'unset',
        display: 'none'
    })
    tl.from("body", {
        // scale: 0.7,
        opacity: 0.6,
        y: 70
    })
    tl.to("body", {
        // scale: 1,
        y: 0,
        opacity: 1,
    })
    // animated heading
    tl.from(document.querySelectorAll('#main_content h1 span'), {
        y: 100,
        opacity: 0,
        duration: 0.3,
        stagger: 0.1
    })
    tl.to(document.querySelectorAll('#main_content h1 span'), {
        y: 0,
        opacity: 1
    })

}
doAnimations()