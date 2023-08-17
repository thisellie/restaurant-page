import 'normalize.css'
import './style.scss'
import { contact, home, menu } from './tabs'

const header = document.createElement('header')

const nav = document.createElement('nav')
const ul = document.createElement('ul')
const links = ['Home', 'Menu', 'Contact']

links.forEach(link => {
  const p = document.createElement('p')
  const li = document.createElement('li')
  p.textContent = link
  p.addEventListener('click', event => {
    const text = event.target.textContent
    main.replaceChildren()
    if (text === 'Home') home()
    if (text === 'Menu') menu()
    if (text === 'Contact') contact()
  })
  li.appendChild(p)
  ul.appendChild(li)
})

nav.appendChild(ul)
header.appendChild(nav)

const main = document.createElement('main')

const footer = document.createElement('footer')

const p = document.createElement('p')
p.textContent = 'Created by thisellie'

footer.appendChild(p)

document.body.append(header, main, footer)

// TODO: Create tab switching logic
home()
// menu()
// contact()

