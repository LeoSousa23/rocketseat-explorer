import { controls } from './elements.js'
import * as actions from './actions.js'
import * as el from './elements.js'
import { updateDisplay } from './timer.js'
import state from './state.js'

// funcao de observador de click nos botoes
export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action]() != "function") {
      return
    }
    
    actions[action]()
  })
}

export function setMinutes() {
  el.minutes.addEventListener('focus', () => {
    el.minutes.textContent = ""
  })
  // /\d/ é uma expressão regular que verifica se oq foi digitado é um numero. Se sim, ele retorna "true" e permite digitar numero, sen nao retorna "false" e bloqueia td quer for diferente de numero.
  el.minutes.onkeypress = (event) => /\d/.test(event.key)

  el.minutes.addEventListener('blur', (event) => {
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time

    state.minutes = time
    state.seconds = 0

    updateDisplay()
    el.minutes.removeAttribute('contenteditable')
  })
}