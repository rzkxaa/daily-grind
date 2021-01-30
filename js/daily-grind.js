/*

Here is the info we'll need to change for each coffee
pic - image src
alt - alt tag
day - Day of week
name - Name of coffee
color - color
desc - description


*/
let myDate = new Date();
let myDay = "";
let today = "";
let coffee = "";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if(urlParams.has('day')){//use querystring data
    myDay = urlParams.get('day');
    myDay = parseInt(myDay);
}else{//use date object
    let myDay = myDate.getDay();
}

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `
        <p>
            <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee">
           <strong id="cofee-highlight" class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.pic}'s daily coffee special is <strong>${coffee.name}</strong>, ${coffee.desc}
        </p>
    
    `;

    return myReturn;
}

switch(myDay){

    case 0:
        today = "Sunday";
        coffee = {
            color: "lavender",
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "A picture of a Frappaccino",
            day: "Sunday",
            desc: `Frappaccino is so good.`
        };

    case 1:
        today = "Monday";
        coffee = {
            color: "pink",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a Bubble Tea",
            day: "Monday",
            desc: `I like me some Bubble Tea`
        };
    break;

    case 2:
        today = "Tuesday";
        coffee = {
            color: "chocolate",
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "A picture of a Cold brew",
            day: "Tuesday",
            desc: `I like me some Cold Brew`
        };

    case 3:
        today = "Wednesday";
        coffee = {
            color: "tan",
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of a Caramel Latte",
            day: "Wednesday",
            desc: `I like me some Caramel Latte`
        };

    case 4:
        today = "Thursday";
        coffee = {
            color: "brown",
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "A picture of a Drip Coffee",
            day: "Thursday",
            desc: `Sometimes you just need the drip`
        };

    case 5:
        today = "Friday";
        coffee = {
            color: "rosybrown",
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picture of a Pumpkin Spice Latte",
            day: "Friday",
            desc: `I like me some Pumpkin Spice Latte`
        };

    case 6:
        today = "Saturday";
        coffee = {
            color: "gray",
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A picture of a Mocha",
            day: "Saturday",
            desc: `I like me some Mocha coffee`
        };

    break;
}
console.log(coffee);

document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);

document.getElementsByTagName("HTML")[0].style.backgroundColor = cofee.color;

document.getElementById("cofee-highlight").style.color = cofee.color;
//alert(today);

