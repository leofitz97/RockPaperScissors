const container = document.querySelector('#Container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
const p = document.createElement('p')
p.textContent = "Hey! I'm red!"
p.style.color = 'red'
const h3 = document.createElement('h3')
h3.textContent = "Hey! I'm blue!"
h3.style.color = 'blue'
const div = document.createElement('div')
div.style.border = 'black'
div.style.backgroundColor = 'pink'
const div1 = document.createElement('div')
const h1 = document.createElement('h1')
h1.textContent = "I'm in a div"
h1.style.color = 'cyan'
const me_too = document.createElement('p')
me_too.textContent = "Me too!"
me_too.style.color = 'snow'
me_too.style.backgroundColor = 'indigo'
div1.appendChild(h1)
div1.appendChild(me_too)
div.appendChild(div1)
container.appendChild(content);
container.appendChild(p)
container.appendChild(h3)
container.appendChild(div)

const btn = document.querySelector('#btn')
btn.onclick = () => alert('Hi, my page')
const btnn = document.querySelector('#btnn')
btnn.addEventListener('click', function(e) {
    console.log(e.target.style.backgroundColor='blue')
})