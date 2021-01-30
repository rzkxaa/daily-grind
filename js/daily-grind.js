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
 
 
if(urlParams.has('day')){
    myDay = urlParams.get('day');
    myDay = parseInt(myDay);
 
}else{
    myDay = myDate.getDay();
 
}
 
 
function coffeeTemplate(coffee){
    let myReturn = "";
 
    myReturn = `
    <p>
    <img src="${coffee.pic}" alt="Our ${coffee.alt}" id="coffee">
    <strong id="coffee-higlight" class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily special is <strong>${coffee.name}</strong>, ${coffee.desc}
 
    </p>
        `;
        
    return myReturn;
}
 
switch(myDay){
 
    case 1:
        today = "Monday";
 
        coffee = {
            color: "pink",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A pic of Bubble Tea",
            day: "Monday",
            desc: 'I love Bubble Tea'
        };
 
    break;    
 
    case 2:
        today = "Tuesday";
 
        coffee = {
            color: "orange",
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            alt: "A pic of Caramel Latte",
            day: "Tuesday",
            desc: 'A latte with Caramel drizzle'
        };
 
    break;   
 
 
    case 3:
        today = "Wednesday";
 
        coffee = {
            color: "brown",
            name: "drip",
            pic: "images/drip.jpg",
            alt: "A pic of drip coffee",
            day: "Wednesday",
            desc: 'Some days you just need the drip!'
        };
 
    break;
 
    case 4:
        today = "Thursday";
 
        coffee = {
            color: "red",
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "A pic of a Cold Brew",
            day: "Thursday",
            desc: 'A coffee brew, but make it cold!'
 
        };
 
    break;
 
 
    case 5:
        today = "Friday";
    
        coffee = {
            color: "green",
            name: "Frappaccino",
            pic: "images/Frappaccino.jpg",
            alt: "A pic of Frappaccino",
            day: "Friday",
            desc: `With this Frappaccino, I can take on a rhino!`
           
         };
 
    break;     
 
 
    case 6:
        today = "Saturday";
 
        coffee = {
            color: "Blue",
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A pic of Mocha",
            day: "Saturday",
            desc: `I like me some Mocha!`
 
        
        };
 
    break;
    
    
    case 0:
        today = "Sunday";
 
        coffee = {
            color: "purple",
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A pic of Pumpkin Spice Latte",
            day: "Sunday",
            desc: `Ahhhh some Pumpkin Spice Latte should be for any season!`
        };
 
    break;    

}
 
 
console.log(coffee);
 
document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);
 
document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;
 
document.getElementById("coffee-highlight").style.color = coffee.color;
