import beef from './beef-broccoli.jpg'

const home = () => {
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

  const main = document.querySelector('main')
  main.append(article, beefImg)
}

const menu = () => {
  const p = document.createElement('p')
  p.textContent = 'This is the menu page'
  const main = document.querySelector('main')
  main.append(p)
}

const contact = () => {
  const p = document.createElement('p')
  p.textContent = 'This is the contact page'
  const main = document.querySelector('main')
  main.append(p)
}

export { home, menu, contact }

