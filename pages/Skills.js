const skills = () => {
        const skills = [{
                logo: "https://assets.stickpng.com/thumbs/5847f5bdcef1014c0b5e489c.png",
                tecnologia: "HTML5",
                nivel: 90
            },
            {
                logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                tecnologia: "JavaScript",
                nivel: 50
            },
            {
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
                tecnologia: "CSS3",
                nivel: 80
            },
            {
                logo: "https://static.platzi.com/media/achievements/badge-basico-vue-js-a86950de-232c-4ebe-b635-a0bba62f87ae.png",
                tecnologia: "Vue.js",
                nivel: 70
            },
            {
                logo: "https://4.bp.blogspot.com/-rtNRVM3aIvI/XJX_U07Z-II/AAAAAAAAJXY/YpdOo490FTgdKOxM4qDG-2-EzcNFAWkKACK4BGAYYCw/s1600/logo%2Bfirebase%2Bicon.png",
                tecnologia: "Firebase",
                nivel: 60
            },
            {
                logo: "https://static.platzi.com/media/achievements/badge-spa-javascript-vanilla-71b296fc-7041-4084-9f94-0ed5e1b53d18.png",
                tecnologia: "SPA with Js Vanilla",
                nivel: 50
            },
            {
                logo: "https://user-images.githubusercontent.com/7110136/29002857-9e802f08-7ab4-11e7-9c31-604b5d0d0c19.png",
                tecnologia: "Vuex",
                nivel: 70
            },
            {
                logo: "https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png",
                tecnologia: "MySQL",
                nivel: 50
            },
            {
                logo: "https://static.platzi.com/media/achievements/badge-mongo-db-5f684168-798f-42ad-a17c-2e8f0c40a477.png",
                tecnologia: "MongoDB",
                nivel: 40
            }
        ];
        const view = `
        <div class="grid justify-center justify-items-center text-center">
            <p class="bg-green-400 rounded h-auto text-white m-2 p-2 text-2xl font-black">SKILLS</p>
            <div class="flex flex-wrap w-full justify-center">
                ${skills.map(skill => `
                    <div class="grid justify-items-center rounded flex-shrink skill-card bg-blue-vue text-white m-2 p-5">
                        <img src="${skill.logo}" alt="${skill.tecnologia}" class="w-20 h-20 m-5">
                        <p class="font-bold text-lg">${skill.tecnologia}</p>
                        <label for="hability">${skill.nivel}%</label>
                        <meter id="hability" min="0" max="100" low="33" hight="66" optimum="80" value="${skill.nivel}">at ${skill.nivel}/100</>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    return view;
}

export default skills;