const body = document.querySelector('body')

/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */

const card = document.createElement('div')
card.classList.add('card')
card.style.width = '18rem'

const image = document.createElement('img')
image.src = 'https://i.ytimg.com/vi/_adJBzQgfsg/maxresdefault.jpg'
image.classList.add('card-img-top')
image.alt = 'coolCar'

console.log(image);

body.appendChild(card)
card.appendChild(image)

const cardBody = document.createElement('div')
cardBody.classList.add('card-body')

const cardTitle = document.createElement('h5')
cardTitle.classList.add('card-title')
cardTitle.textContent = 'Cool Car'

const cardPara = document.createElement('p')
cardPara.classList.add('card-text')
cardPara.textContent = "my next car"

const link = document.createElement('a')
link.classList.add('btn', 'btn-primary')
link.herf = 'https://www.mercedes-benz.com/en/vehicles/passenger-cars/mercedes-benz-concept-cars/vision-eq-silver-arrow-show-car-world-premiere/'
link.textContent = "Go to site"

cardBody.appendChild(cardTitle)
cardBody.appendChild(cardPara)
cardBody.appendChild(link)

card.appendChild(cardBody)
console.log(card);