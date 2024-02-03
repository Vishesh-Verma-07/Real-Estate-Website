let People = document.getElementById('People');
let People_less = document.getElementById('People_less');
let People_more = document.getElementById('People_more');

let People_index = 4;

People_less.addEventListener('click',()=>{
    People_index -= 1;
    if (People_index <= 0) {
        People_index = 1;
        People.value = People_index + ' People';
    } else {
        People.value = People_index + ' People';       
    }
})
People_more.addEventListener('click',()=>{
    People_index += 1;
    if (People_index >= 4) {
        People_index = 4;
        People.value = People_index + ' People';
    } else {
        People.value = People_index + ' People';       
    }
})


let checkin_data = document.getElementById("checkin_data");
let checkin = document.getElementById("checkin");
let checkout_data = document.getElementById("checkout_data");
let checkout = document.getElementById("checkout");

checkin.addEventListener('change',()=>{
    let chekin_value = checkin.value;
    // console.log(chekin_value);
    let dates = new Date(chekin_value);
    let dates2 = new Date();
    const week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat',]
    let day = week[dates.getDay()];
    // console.log(day);
    let date = chekin_value.slice(8,10);
    // console.log(date);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','sep','oct','Nov','Dec']

    let month = months[dates.getMonth()];
    console.log(dates2);
    if(dates<dates2){
        console.log("no date");
    }
    else{
        checkin_data.innerText= day + ', '+ date + ' '+month;
    }
})  
checkout.addEventListener('change',()=>{
    let chekin_value = checkin.value;
    let chekout_value = checkout.value;
    // console.log(chekin_value);
    let dates = new Date(chekout_value);
    let dates2 = new Date(chekin_value);
    const week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat',]
    let day = week[dates.getDay()];
    // console.log(day);
    let date = chekout_value.slice(8,10);
    // console.log(date);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','sep','oct','Nov','Dec']
    
    let month = months[dates.getMonth()];
    // console.log(dates2);
    if(dates<dates2){
        console.log("no date");
    }
    else{
        checkout_data.innerText= day + ', '+ date + ' '+month;
    }
})  

let checkin_less = document.getElementById("checkin_less");
let checkin_more = document.getElementById("checkin_more");
let checkout_less = document.getElementById("checkout_less");
let checkout_more = document.getElementById("checkout_more");

checkin_more.addEventListener('click',()=>{
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','sep','oct','Nov','Dec']
    const week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat',]
    
    let today = new Date();
    let tommorow = new Date(today);
    
    tommorow.setDate(tommorow.getDate() + 1);
    
    let day = week[tommorow.getDay()];
    let date = tommorow.getDate();
    let month = months[tommorow.getMonth()];
    
    checkin_data.innerText= day + ', '+ date + ' '+month;
})
checkin_less.addEventListener('click',()=>{
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','sep','oct','Nov','Dec']
    const week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat',]
    
    let today = new Date();
    // let tommorow = new Date(today);
    
    // tommorow.setDate(today.getDate() + 1);
    
    let day = week[today.getDay()];
    let date = today.getDate();
    let month = months[today.getMonth()];
    
    checkin_data.innerText= day + ', '+ date + ' '+month;
})
checkout_more.addEventListener('click',()=>{
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','sep','oct','Nov','Dec']
    const week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat',]
    
    let today = new Date();
    let tommorow = new Date(today);
    
    tommorow.setDate(tommorow.getDate() + 2);
    
    let day = week[tommorow.getDay()];
    let date = tommorow.getDate();
    let month = months[tommorow.getMonth()];
    
    checkout_data.innerText= day + ', '+ date + ' '+month;
})
checkout_less.addEventListener('click',()=>{
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','sep','oct','Nov','Dec']
    const week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat',]
    
    let today = new Date();
    let tommorow = new Date(today);
    
    tommorow.setDate(tommorow.getDate() + 1);
    
    let day = week[tommorow.getDay()];
    let date = tommorow.getDate();
    let month = months[tommorow.getMonth()];
    
    checkout_data.innerText= day + ', '+ date + ' '+month;
})


const images = [
    "url( images/1.webp) no-repeat center/cover",
    "url( images/10.jpg) no-repeat center/cover",
    "url( images/11.jpg) no-repeat center/cover"
]

let index = 1;

let h6= document.getElementById("h6");
h6.innerText = "+"+ images.length;

let btn_left = document.getElementById("btn_left");
let btn_right = document.getElementById("btn_right");
let style = document.getElementsByClassName('content')[0].style;

btn_left.addEventListener('click',()=>{
    index -=1;
    if(index<0){
        index = (images.length) -1;
    }
    style.setProperty('--background',images[index]);
})
btn_right.addEventListener('click',()=>{
    index ++;
    if(index>(images.length) -1){
        index = 0;
    }
    style.setProperty('--background',images[index]);
})
