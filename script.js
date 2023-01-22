const form = document.querySelector("form")
const nlw = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0,5)
  const dayExist = nlw.dayExists(today)

  if(dayExist){
    alert("Dia ja existe ❌")
    return
  }
  alert("Dia adicionado com sucesso ✅")
  nlw.addDay(today)
}

function save() {
  localStorage.setItem('nlwhabits', JSON.stringify(nlw.data))
}

const data = JSON.parse(localStorage.getItem('nlwhabits')) || {}
nlw.setData(data)
nlw.load()