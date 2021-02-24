import portfolio from "../utils/portafolio";
import Portafolio from "../utils/portafolio";

const Portfolio = () => {
        const view = `
    <div class="grid justify-center text-center>
        <div class="flex flex-wrap justify-center">
            ${Portafolio.map(portfolio => `
                <div class="grid justify-items-center rounded flex-shrink skill-card bg-blue-vue text-white m-2 p-5">
                    <p class="font-bold text-lg">${portfolio.title}</p>
                    <p><span class="font-bold">Descripcion: </span>${portfolio.description} </p>
                    <p><span class="font-bold">Elaborado con: </span>${portfolio.skills}</p>
                    <a href="${portfolio.github}" style="background-color: white; border-radius: 2px; padding: 5px; margin: 5px; color: rgba(13, 97, 119, 1);" target="_blank"> Github </a>
                </div>
            `).join('')}
        </div>
    </div>
    `
    return view;
}

export default Portfolio;