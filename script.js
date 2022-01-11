function imRight(buttonNum){
    //Changes the linked text bef
    let other = buttonNum==1? 2 : 1
    document.getElementById(`text${buttonNum}`).innerText = "I'm right!"
    let otherButton = document.getElementById(`text${other}`)
    otherButton.innerText = otherButton.innerText?"No, I'm right!":""
}


function warn(){
    //An alert that is trigged when hovering over the linked element
    alert("Hey, I told you not to hover over me!")
}


let form = document.querySelector('#passform')
form.addEventListener('submit',event=>{
    //Checks for the correct password, alerts if incorrect and changes h1 element if correct
    let heading = document.querySelector('.prob3and4').querySelector('h1')
    if(form.pass.value!=="12345678"){
    alert("INCORRECT PASSWORD!")
    heading.innerText = "..."
    }
    else{
    heading.innerText = "You're in."
    }
    form.pass.value=""
    event.preventDefault()
})
let volform = document.querySelector('#volform')
volform.addEventListener('submit',event=>{
    //Calculates the volume of a sphere using user input for the radius
    let vol = Math.pow(volform.volume.value,3)*Math.PI*4/3;
    alert(`The volume of a sphere with radius of ${volform.volume.value} is ${vol}`)
    volform.volume.value=""
    event.preventDefault()
})