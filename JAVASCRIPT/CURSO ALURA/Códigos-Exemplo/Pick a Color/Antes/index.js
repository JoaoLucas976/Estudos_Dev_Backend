const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green']
const btn = document.getElementById('btn')

btn.addEventListener('click', function(){
    let randNum = getRandomColor()
    console.log(randNum)
    document.body.style.background = colors[randNum]
    document.getElementsByClassName('color')[0].innerHTML = colors[randNum]
})
console.log(colors)

function getRandomColor (){
    return Math.floor(Math.random() * colors.length)
}