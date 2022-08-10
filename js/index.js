import {Router} from "./router.js"

const router = new Router();

router.add('/home', "/pages/home.html")
router.add('/universe', "/pages/universe.html")
router.add('/exploration', "/pages/exploration.html")
router.add(404, "/pages/404.html")


router.handle();
window.onpopstate = () => router.handle();
window.route = () => router.route();
const saibaMais = document.querySelector("#botao");


saibaMais.addEventListener('click', () => {
    
    document.querySelector('.pages').innerHTML='universe.html'
       
})

// const routes= {
//     "/" : ,"/pages/home.html"
//     "/universe" : "/pages/universe.html",
//     "/exploration" : "/pages/exploration.html",
//     404 : "/pages/404.html"

// }



// handle();
// window.onpopstate = () => handle();
// window.route = () => route();