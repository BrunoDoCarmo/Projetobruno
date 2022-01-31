const createNavbar = () => {
  let navbar = document.querySelector('.sidebar');
  navbar.innerHTML = `
    <header class="header">
      <div class="image-text">
        <span class="image">
          <img src="img/perfil.jpg" alt="">
        </span>
        <div class="text header-text">
          <span class="name">ColingLab</span>
          <span class="profession">Web developer</span>
        </div>
      </div>
      <i class='bx bx-chevron-right toggle'></i>
    </header>
    <div class="menu-bar">
      <div class="menu">
        <li class="search-box">
          <i class='bx bx-search icon'></i>
          <input type="text" placeholder="Search...">
        </li>
        <ul class="menu-links">
          <li class="nav-links">
            <a href="#">
              <i class='bx bx-home icon'></i>
              <span class="text nav-text">Dashboard</span>
            </a>
          </li>
          <li class="nav-links">
            <a href="#">
              <i class='bx bx-home icon'></i>
              <span class="text nav-text">Dashboard</span>
            </a>
          </li>
          <li class="nav-links">
            <a href="#">
              <i class='bx bx-home icon'></i>
              <span class="text nav-text">Dashboard</span>
            </a>
          </li>
          <li class="nav-links">
            <a href="#">
              <i class='bx bx-home icon'></i>
              <span class="text nav-text">Dashboard</span>
            </a>
          </li>
          <li class="nav-links">
            <a href="#">
              <i class='bx bx-home icon'></i>
              <span class="text nav-text">Dashboard</span>
            </a>
          </li>
          <li class="nav-links">
            <a href="#">
              <i class='bx bx-home icon'></i>
              <span class="text nav-text">Dashboard</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="buttom-content">
        <li class="">
          <a href="#">
            <i class='bx bx-log-out icon'></i>
            <span class="text nav-text">Logout</span>
          </a>
        </li>
        <li class="mode">
          <div class="moon-sum">
            <i class="bx bx-moon icon moon"></i>
            <i class="bx bx-sun icon sun"></i>
          </div>
          <span class="mode-text text">Tema Claro</span>
          <div class="toggle-switch">
            <span class="switch"></span>
          </div>
        </li>
      </div>
    </div>  
  `;
}
createNavbar();
const body = document.querySelector("body"),
      sidebar = document.querySelector(".sidebar"),
      toggle = document.querySelector(".toggle"),
      searchBtn = document.querySelector(".search-box"),
      modeSwitch = document.querySelector(".toggle-switch"),
      modeText = document.querySelector(".mode-text");
      
      modeSwitch.addEventListener("click", () =>{
        body.classList.toggle('dark')

        if(body.classList.contains("dark")){
          modeText.innerHTML = "Tema Escuro"
        } else {
          modeText.innerHTML = "Tema Claro"
        }
      });
      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle('close')
      });
      searchBtn.addEventListener("click", () =>{
        sidebar.classList.remove('close')
      });
      let list = document.querySelectorAll('.sidebar li a');
      function activeLink(){
        list.forEach((item) =>
        item.classList.remove('hovered'));
        this.classList.add('hovered');
      }
      list.forEach((item) =>
      item.addEventListener('mouseover', activeLink))

export default createNavbar;