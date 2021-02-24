import './style.css'
import router from './router/index'

// window.addEventListener('load', router);
// window.addEventListener('hashchange', router);

const init = () => {
    router(location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/');

    window.addEventListener("hashchange", () => {
        router(location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/');
    })
}

window.addEventListener("load", init)