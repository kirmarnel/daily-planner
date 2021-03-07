var currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate);

var hour = moment().hour();


//if statments to compare time

    if (hour == 9) {
        document.querySelector('#nine').classList.add('present')
        
    }
    else if (hour > 9) {
        document.querySelector('#nine').classList.add('past')
    }
    else {
        document.querySelector('#nine').classList.add('future')
    }
    
    if (hour == 10) {
        document.querySelector('#ten').classList.add('present')
        
    }
    else if (hour > 10) {
        document.querySelector('#ten').classList.add('past')
    }
    else {
        document.querySelector('#ten').classList.add('future')
    }

    if (hour == 11) {
        document.querySelector('#eleven').classList.add('present')
        
    }
    else if (hour > 11) {
        document.querySelector('#eleven').classList.add('past')
    }
    else {
        document.querySelector('#eleven').classList.add('future')
    }

    if (hour == 12) {
        document.querySelector('#twelve').classList.add('present')
        
    }
    else if (hour > 12) {
        document.querySelector('#twelve').classList.add('past')
    }
    else {
        document.querySelector('#twelve').classList.add('future')
    }

    if (hour == 13) {
        document.querySelector('#one').classList.add('present')
        
    }
    else if (hour > 13) {
        document.querySelector('#one').classList.add('past')
    }
    else {
        document.querySelector('#one').classList.add('future')
    }

    if (hour == 14) {
        document.querySelector('#two').classList.add('present')
        
    }
    else if (hour > 14) {
        document.querySelector('#two').classList.add('past')
    }
    else {
        document.querySelector('#two').classList.add('future')
    }

    if (hour == 15) {
        document.querySelector('#three').classList.add('present')
        
    }
    else if (hour > 15) {
        document.querySelector('#three').classList.add('past')
    }
    else {
        document.querySelector('#three').classList.add('future')
    }

    if (hour == 16) {
        document.querySelector('#four').classList.add('present')
        
    }
    else if (hour > 16) {
        document.querySelector('#four').classList.add('past')
    }
    else {
        document.querySelector('#four').classList.add('future')
    }

    if (hour == 17) {
        document.querySelector('#five').classList.add('present')
        
    }
    else if (hour > 17) {
        document.querySelector('#five').classList.add('past')
    }
    else {
        document.querySelector('#five').classList.add('future')
    }

    //local storage
   var textInput1 = document.querySelector('#textInput1')
   function save1 () {
       localStorage.setItem('input1' , textInput1.value)
   }
   var btn1=document.querySelector('#btn1')
   btn1.addEventListener('click' , save1)
   var storedInput1=localStorage.getItem('input1')
   if (storedInput1){
       textInput1.textContent= storedInput1
   }
   
   var textInput2 = document.querySelector('#textInput2')
   function save2 () {
       localStorage.setItem('input2' , textInput2.value)
   }
   var btn2=document.querySelector('#btn2')
   btn2.addEventListener('click' , save2)
   var storedInput2=localStorage.getItem('input2')
   if (storedInput2){
       textInput2.textContent= storedInput2
   }

   var textInput3 = document.querySelector('#textInput3')
   function save3 () {
       localStorage.setItem('input3' , textInput3.value)
   }
   var btn3=document.querySelector('#btn3')
   btn3.addEventListener('click' , save3)
   var storedInput3=localStorage.getItem('input3')
   if (storedInput3){
       textInput3.textContent= storedInput3
   }

   var textInput4 = document.querySelector('#textInput4')
   function save4 () {
       localStorage.setItem('input4' , textInput4.value)
   }
   var btn4=document.querySelector('#btn4')
   btn4.addEventListener('click' , save4)
   var storedInput4=localStorage.getItem('input4')
   if (storedInput4){
       textInput4.textContent= storedInput4
   }

   var textInput5 = document.querySelector('#textInput5')
   function save5 () {
       localStorage.setItem('input5' , textInput5.value)
   }
   var btn5=document.querySelector('#btn5')
   btn5.addEventListener('click' , save5)
   var storedInput5=localStorage.getItem('input5')
   if (storedInput5){
       textInput5.textContent= storedInput5
   }

   var textInput6 = document.querySelector('#textInput6')
   function save6 () {
       localStorage.setItem('input6' , textInput6.value)
   }
   var btn5=document.querySelector('#btn6')
   btn6.addEventListener('click' , save6)
   var storedInput6=localStorage.getItem('input6')
   if (storedInput6){
       textInput6.textContent= storedInput6
   }

   var textInput7 = document.querySelector('#textInput7')
   function save7 () {
       localStorage.setItem('input7' , textInput7.value)
   }
   var btn7=document.querySelector('#btn7')
   btn7.addEventListener('click' , save7)
   var storedInput7=localStorage.getItem('input7')
   if (storedInput7){
       textInput7.textContent= storedInput7
   }

   var textInput8 = document.querySelector('#textInput8')
   function save8 () {
       localStorage.setItem('input8' , textInput8.value)
   }
   var btn8=document.querySelector('#btn8')
   btn8.addEventListener('click' , save8)
   var storedInput8=localStorage.getItem('input8')
   if (storedInput8){
       textInput8.textContent= storedInput8
   }

   var textInput9 = document.querySelector('#textInput9')
   function save9 () {
       localStorage.setItem('input9' , textInput9.value)
   }
   var btn9=document.querySelector('#btn9')
   btn9.addEventListener('click' , save9)
   var storedInput9=localStorage.getItem('input9')
   if (storedInput9){
       textInput9.textContent= storedInput9
   }