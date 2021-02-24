import Header from "../templates/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import Skills from "../pages/Skills";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import Portfolio from "../pages/Portfolio";
import Footer from "../templates/Footer";

const routes = {
    "/": Home(),
    "/about": About(),
    "/skills": Skills(),
    "/experience": Experience(),
    "/education": Education(),
    "/portfolio": Portfolio()
};

const router = async() => {
    const header = null || document.getElementById('header');
    let content = null || document.getElementById('content');
    const footer = null || document.getElementById('footer');

    header.innerHTML = await Header();
    footer.innerHTML = await Footer();
    let hash = getHash();
    let route = hash === '/' ? '/' : hash
        // let render = routes[`/${route}`] ? routes[`/${route}`] : Error404;

    // content.innerHTML = await render();

    switch (route) {
        case "/":
            {
                return content.innerHTML = routes["/"];
            }
        case "about":
            {
                return content.innerHTML = routes["/about"];
            }
        case "skills":
            {
                return content.innerHTML = routes["/skills"];
            }
        case "experience":
            {
                return content.innerHTML = routes["/experience"];
            }
        case "education":
            {
                return content.innerHTML = routes["/education"];
            }
        case "portfolio":
            {
                return content.innerHTML = routes["/portfolio"];
            }
        default:
            {
                return content.innerHTML = Error404();
            }
    }
};

export default router;