const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function (e) {
    span.classList.add('animated', 'rubberBand')
}))

spans.forEach(span => span.addEventListener('mouseout', function (e) {
    span.classList.remove('animated', 'rubberBand')
}))

const htmlBar = document.querySelector('.bar-html')
const javaScriptBar = document.querySelector('.bar-javascript')
const javaBar = document.querySelector('.bar-java')
const cssBar = document.querySelector('.bar-css')
const cBar = document.querySelector('.bar-c')

var t1 = new TimelineLite()

t1.fromTo(htmlBar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(90% - 6px)', ease: Power4.easeOut })
    .fromTo(javaScriptBar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(95% - 6px)', ease: Power4.easeOut })
    .fromTo(javaBar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(75% - 6px)', ease: Power4.easeOut })
    .fromTo(cssBar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(70% - 6px)', ease: Power4.easeOut })
    .fromTo(cBar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(85% - 6px)', ease: Power4.easeOut })

const contoller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
})

    .setTween(t1)
    .addTo(contoller)

const showRequiredCategory = event => {
    const getId = event.id
    const links = document.querySelectorAll('work-category button')
    for (i = 0, links.length; i++) {
        if (links[i].hasAttribute('class')) {
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')
    const getCategory = document.querySelector('.category-${getId}')
    const categories = document.querySelectorAll('div[class ^= "category-"]')

    for (i = 0, categories.length; i++) {
        if (categories[i].hasAttribute('class')) {
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }

    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')
}


