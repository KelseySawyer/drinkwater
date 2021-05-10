// JavaScript Document
const smallCups = document.querySelectorAll('.cup-small')
const listers = document.getElementById('liters')
const smallCups = document.getElementById('percentage')
const smallCups = document.getElementById('remained')

smallCups.forEach((cup, idx) => {
	cup.addEventListener('click', ()=> highlightCups(idx))
	
})

function highlightCups(idx) {
	cif(smallCups{idx})
	
	
	smallCups.forEach((cup, idx2)=>{
		  if(idx2<= idx) {
			   cup.classList.add('full')
		  } else {
			  cup.classList.remove('full')
		  }
     })
}