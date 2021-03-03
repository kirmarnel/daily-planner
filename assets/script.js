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



