import diplomas from '../utils/diplomas';

const Education = () => {
        const view = `<div class="grid justify-center justify-items-center text-center">
        <p class="bg-green-400 rounded h-auto text-white m-2 p-2 text-2xl font-black">CURSOS</p>
        <div class="flex flex-wrap w-full justify-center">
            ${diplomas.map(diploma => `
                <div class="grid justify-items-center rounded flex-shrink skill-card bg-blue-vue text-white m-2 p-5">
                    <img src="${diploma.img}" alt="${diploma.fileName}" class="w-20 h-20 m-5">
                    <p class="font-bold text-lg">${diploma.name}</p>
                    <p>${diploma.time} horas de teoria y practica</p>
                    <a href="${diploma.fileURL}" style="background-color: white; border-radius: 2px; padding: 5px; margin: 5px; color: rgba(13, 97, 119, 1);" target="_blank"> Ver Diploma </a>
                </div>
            `).join('')}
        </div>
    </div>`
    return view;
}

export default Education;