let showmenu = (toggleId, navId) => {
    let toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showmenu('navtoggle', 'navmenu')

let navlink = document.querySelectorAll('.nav-link')
function linkaction() {
    navlink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    let navmenu = document.getElementById('navmenu')
    navmenu.classList.remove('show')
}
navlink.forEach(n => n.addEventListener('click', linkaction))

let sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
sr.reveal('.home-title', {})
sr.reveal('.button', { delay: 200 })
sr.reveal('.home-img', { delay: 400 })
sr.reveal('.home-social-icon', { interval: 200 })
sr.reveal('.about-title', {})
sr.reveal('.about-img', {delay: 200})
sr.reveal('.about-subtitle', { delay: 300 })
sr.reveal('.about-text', { delay: 400 })
sr.reveal('.academia', { delay: 600 })
sr.reveal('.skills-title', {})
sr.reveal('.tech-skills', {delay:100})
sr.reveal('.tech-skills-text', { delay: 200 })
sr.reveal('.tech-skill', { interval: 400 })
sr.reveal('.soft-skills', {})
sr.reveal('.soft-skills-text', { delay: 200 })
sr.reveal('.soft-skill', { interval: 400 })
sr.reveal('.projects-title', {})
sr.reveal('.projects-text', {delay:200})
sr.reveal('.content', { interval: 400 })
sr.reveal('.certificates-title', {})
sr.reveal('.certificate-container', { delay: 200 })
sr.reveal('.contact-input', { interval: 100 })

let section = document.querySelectorAll('section');
let navlist = document.querySelector('.nav-list')
window.onscroll = () => {
    navlist.classList.remove('active');
    section.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 110;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .nav-list .nav-item a[href*=' + id + ']').classList.add('active');
            });
        };
    });
}



mail = document.querySelector('.mail')
mail.addEventListener('mouseenter', () => {
    console.log('hovered')
    mail.classList.remove('bx-envelope-open')
    mail.classList.add('bx-envelope')

    setTimeout(() => {
        mail.classList.remove('bx-envelope')
        mail.classList.add('bx-mail-send')
        mail.style.transform = 'translateX(5rem)'
    }, 100);
});
mail.addEventListener('mouseleave', () => {
    mail.classList.remove('bx-mail-send')
    mail.classList.add('bx-envelope-open')
    mail.style.transform = 'translateX(0)'
});


call = document.querySelector('.call')
call.addEventListener('mouseenter', () => {
    console.log('hovered')
    call.classList.remove('bxs-phone')
    call.classList.add('bxs-phone-call')

    setTimeout(() => {

        call.classList.add('bx-tada')

    }, 100);
});
call.addEventListener('mouseleave', () => {
    call.classList.remove('bx-tada')
    call.classList.remove('bxs-phone-call')
    call.classList.add('bxs-phone')
});

discord=document.querySelector('.discord')
discord.addEventListener('mouseover',()=>{
    document.querySelector('.discord-info').classList.remove('discord-info-hide')
    document.querySelector('.discord-info').classList.add('discord-info-show')
});
discord.addEventListener('mouseleave',()=>{
    document.querySelector('.discord-info').classList.remove('discord-info-show')
    document.querySelector('.discord-info').classList.add('discord-info-hide')
});










