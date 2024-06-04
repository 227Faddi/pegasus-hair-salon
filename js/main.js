let navBtn = document.querySelector('#nav-btn');
let navBar = document.querySelector('nav')


navBtn.addEventListener('click', dropNav)
function dropNav(){
    navBar.classList.toggle('hidden-nav')
}


if (window.matchMedia('(max-width: 600px)').matches) {

    let backTopBtn = document.querySelector('#btn-backtop')

    backTopBtn.addEventListener('click', backTop)
    function backTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    window.addEventListener('scroll', showScroll)
    function showScroll(){
        if(window.scrollY > 20){
            backTopBtn.classList.remove('hidden')
        } else{
            backTopBtn.classList.add('hidden')
        }
    }
}

