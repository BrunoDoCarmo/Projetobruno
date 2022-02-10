let user = document.querySelector('#user')
let validUser = false
let pass = document.querySelector('#pass')
let validPass = false
let autenticando = document.querySelector('#autenticando')
let acessando = document.querySelector('#acessar')
let preloader = document.querySelector('.preloader')
let btnlogin = document.querySelector('.btn-login')

var esconder
var textfield = document.querySelectorAll(".textfield");
user.addEventListener('keyup', () => {
  if (user.value.length <= 4) {
    user.setAttribute('style', 'color: red;border-color: red; ')
    validUser = false
  } else {
    user.setAttribute('style', 'color: #00ff88;border-color: green;')
    validUser = true
  }
})
pass.addEventListener('keyup', () => {
  if (pass.value.length <= 3) {
    pass.setAttribute('style', 'color: red;border-color: red; ')
    validPass = false
  } else {
    pass.setAttribute('style', 'color: #00ff88;border-color: green;')
    validPass = true 
  }
})

function acessar(){
  if (validUser && validPass) {
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    listaUser.push({
      userCad: user.value,
      passCad: pass.value
    })
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    setTimeout(()=>{
      window.location.href = 'home.html'
    },3000)
    autenticando.setAttribute('style', 'display:block')
    autenticando.innerHTML = '<strong>Autenticando</strong>'
    acessando.setAttribute('style', 'display:none')
    for (esconder = 0; esconder < textfield.length; esconder++) {
      textfield[esconder].style.display = "none";
    }
    btnlogin.setAttribute('style', 'display:none')
    preloader.setAttribute('style', 'display:block')
  } else {
    acessando.setAttribute('style', 'display:block')
    autenticando.setAttribute('style', 'display:none')
    preloader.setAttribute('style', 'display:none')
    for (esconder = 0; esconder < textfield.length; esconder++) {
      textfield[esconder].setAttribute('style', 'display:block')
    }
    btnlogin.setAttribute('style', 'display:block')
  }
}