const mountains = document.querySelector('.home-mountains img');
const title = document.querySelector('h1');

gsap.to(mountains, {
    y: 100,
    scrollTrigger: {
        trigger: 'home-mountains',
        scrub: true
    }
})

gsap.to(title, {
    y: 600,
    scale: 1.5,
    scrollTrigger: {
        trigger: 'home-mountains',
        scrub: true
    }
})