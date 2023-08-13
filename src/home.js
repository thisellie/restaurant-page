import beef from './beef-broccoli.jpg'

export default function () {
  const header = document.createElement('header')

  const a = document.createElement('a')
  const logoImg = document.createElement('img')
  a.href = '#'
  logoImg.src = 'https://placehold.co/100x50'

  const nav = document.createElement('nav')
  const ul = document.createElement('ul')
  const links = ['Home', 'Menu', 'Contact']

  links.forEach(link => {
    const a = document.createElement('a')
    const li = document.createElement('li')
    a.textContent = link
    a.href = '#'
    li.appendChild(a)
    ul.appendChild(li)
  })

  a.appendChild(logoImg)
  nav.appendChild(ul)
  header.append(a, nav)

  // TODO: Move main.js here
  const main = document.createElement('main')

  const beefImg = new Image()
  beefImg.src = beef

  const article = document.createElement('article')

  const h1 = document.createElement('h1')
  h1.textContent = 'Try out our new delicacy!'

  const h3 = document.createElement('h3')
  h3.textContent = 'For $5 only'

  const button = document.createElement('button')
  button.textContent = 'Order now'

  article.append(h1, h3, button)

  main.append(article, beefImg)

  document.body.appendChild(main)

  const footer = document.createElement('footer')

  const p = document.createElement('p')
  p.textContent = 'Created by thisellie'

  footer.appendChild(p)

  document.body.append(header, main, footer)
}

