function computerPlay(){
	let score =  Math.floor(Math.random(1)*3)

	if (score ===0){
			return "rock"
	}    
	else if (score===1){
			return "paper"
	}
	else if (score===2){
			return "scissors"
	}
}

function playRound(player1){
	if (player1==='rock' && computerPlay() =='scissors'){
			let score = "You win! rock beats scissors"
			return score
	}
	if (player1=== 'rock' && computerPlay()==='paper'){
			let score = "You lose! paper beats rock"
			return score
	}
	if (player1==='paper' && computerPlay()=='scissors'){
			let score = "You lose! scissors beats paper"
			return score
	}
	if (player1==='paper' && computerPlay()=='rock'){
			let score = "You win! paper beats rock"
			return score
	}
	if (player1==='scissors' && computerPlay()=='rock'){
			let score = "You lose! rock beats scissors"
			return score
	}
	if (player1==='scissors' && computerPlay()=='paper'){
			let score = "You win! scissors beats paper"
			return score
	}
	else{
			return "It was a fair draw, repeat game..."
	}
}

const container = document.querySelector('#Container')
const p = document.createElement('p')
const p1 = document.createElement('p')
const p2 = document.createElement('p')
const pin = document.createElement('p')
p.style.display = 'display'
p.appendChild(pin)
container.appendChild(p2)
container.appendChild(p1)
container.appendChild(p)

let count =0
const rock = document.querySelector('.rock')
rock.addEventListener('click', (e)=>{
	p.innerHTML = playRound('rock')
	console.log(count)
	count++;
	if (count>5){
		rock.disabled = true
		paper.disabled = true
		scissor.disabled = true
	}
})

const paper = document.querySelector('.paper')
paper.addEventListener('click', ()=>{
	p1.innerHTML = playRound('paper')
	count++
	if (count>5){
		rock.disabled = true
		paper.disabled = true
		scissor.disabled = true
	}
})

const scissor = document.querySelector('.scissor')
scissor.addEventListener('click', ()=>{
	p2.innerHTML = playRound('scissors')
	count++
	if (count>5){
		rock.disabled = true
		paper.disabled = true
		scissor.disabled = true
	}
})

function sockMerchant(n, ar) {
	// Write your code here
	let pair1=10;
	let pair2=20;
	let pair3=30;
	let freq1=0;
	let freq2=0;
	let freq3=0;
	let freq =0;
	let i;
	let j;
	
		for (i in ar){
			j= i+1
			if (ar[i] ==ar[1]){console.log(ar[i], ar[i+1])}
		}
	
}
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
let arr = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]
a = sockMerchant(10, arr)


