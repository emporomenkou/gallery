let images_array = [
    "images/image1.png",
    "images/image2.png",
    "images/image3.png",    
]
let leftButton = document.getElementById('vlevo-button')
leftButton.classList.add('hidden')
let rightButton = document.getElementById('vpravo-button')
let currentIndex = 0
let currentImage = document.getElementById('current-image')
currentImage.src = images_array[0]
function goRight(){
    let currentImage = document.getElementById('current-image')
    currentIndex++
    currentImage.src = images_array[currentIndex]
    leftButton.classList.remove('hidden')  
    if (currentIndex === images_array.length - 1){
        rightButton.classList.add('hidden')          
    }    
}

function goLeft(){
    let currentImage = document.getElementById('current-image')
    currentIndex--
    currentImage.src = images_array[currentIndex]
    rightButton.classList.remove('hidden')
    if (currentIndex === 0){
        leftButton.classList.add('hidden')          
    }      
}

leftButton.addEventListener('click', goLeft)
rightButton.addEventListener('click', goRight)