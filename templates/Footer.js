const Footer = () => {
    const view = `
        <div class="flex items-center flex-col md:flex-row">
          <div class="flex flex-1 flex-col items-center">
            <p class="p-1">Email:</p>
            <p class="bg-white text-gray-700 p-1.5 rounded"> rojas.fredic6@gmail.com </p>
          </div>
          <div class="flex flex-1 flex-col items-center">
            <p class="p-1">Cellphone:</p>
            <p class="bg-white text-gray-700 p-1.5 rounded"> 3106725629 </p>
          </div>
          <div class="flex flex-1 flex-col items-center">
            <p class="p-1">Github: </p>
            <p class="bg-white text-gray-700 p-1.5 rounded"> <a href="https://github.com/rojasfredic6"> https://github.com/rojasfredic6 </a></p>
          </div>
          <div class="flex flex-1 flex-col items-center">
            <p class="p-1">LinkedIn: </p>
            <p class="bg-white text-gray-700 p-1.5 rounded"> <a href="https://www.linkedin.com/in/fredic-yohany-rojas-parra-65ba8012b/">https://www.linkedin.com/in/fredic-yohany-rojas-parra-65ba8012b/</a></p>
          </div>
        </div>
    `
    return view;
}

export default Footer;
