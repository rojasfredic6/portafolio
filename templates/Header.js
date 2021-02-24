const Header = () => { const view = `
<div class="Header-content grid text-gray-50 text-center place-items-center shadow-xl">
    <div class="Header-title">
        <h1 class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"> FREDIC YOHANY ROJAS PARRA </h1>
        <h5 class="m-3"> A Front End Developer in its early days </h5>
    </div>
    <nav class="Header-nav grid w-full content-center">
        <input id="menutoggle" type="checkbox" name="menu" style="display: none;">
        <label id="Header-menu" class="flex justify-center items-center" for="menutoggle">
          <i class=" text-2xl fas fa-chevron-circle-down"></i>
        </label>
        <ul id="Header-ul-list" class="grid grid-cols-6 text-sm text-center sm:text-sm md:text-base lg:text-lg font-thin justify-around">
            <li>
                <a href="#/"> Home </a>
            </li>
            <li>
                <a href="#/about/"> About </a>
            </li>
            <li>
                <a href="#/skills/"> Skills </a>
            </li>
            <li>
                <a href="#/experience/"> Experience </a>
            </li>
            <li>
                <a href="#/education/"> Education </a>
            </li>
            <li>
                <a href="#/portfolio/"> Portfolio </a>
            </li>
        </ul>
    </nav>
</div>
`; return view; }
export default Header;
