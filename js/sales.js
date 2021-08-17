'use strict';

const myDog = {
  name: 'Yakone',
  age: 9,
  favoriteToys: ['duck', 'teddy bear', 'rope'],
  callHer: function(){
    console.log('Yako, here!');
  }
  }
  console.log(myDog.name);
  
  myDog.name = 'Yako';
  console.log(myDog);
  
  myDog.callHer();
  
  myDog.toString();

  const storeDiv = document.getElementById('storeProfiles');

  const seattle = {
    name: 'seattle',
    minCust: 23,
    maxCust: 65,
    AverageCookies:  6.3,
    rate : null,
    photo: './images/seattle.jpeg',

    getRate: function(){
   this.rate = `${_randomRate()};`


    }
    


  }

  const tokyo = {
    name: 'tokyo',
    minCust: 3,
    maxCust: 24,
    AverageCookies: 1.2,
    rate: null,
    photo: './images/tokyo.jpeg',
    getRate: function(){
   this.rate = `${_randomRate()}`;


    }


  }

  const dubai = {
    name: 'dubai',
    minCust: 11,
    maxCust: 38,
    AverageCookies: 3.7,
    rate: null,
    photo: './images/dubai.jpeg',
    getRate: function(){
   this.rate = `${_randomRate()};`


    }


  }

  const paris = {
    name: 'paris',
    minCust: 20,
    maxCust: 38,
    AverageCookies: 2.3,
    rate: null,
    photo: './images/paris.jpeg',

    getRate: function(){
   this.rate = `${_randomRate()};`


    }


  }

  const lima = {
    name: 'lima',
    minCust: 2,
    maxCust: 16,
    AverageCookies: 4.6,
    rate: null,
    photo: './images/lima.jpeg',
    getRate: function(){
    this.rate = `${_randomRate()}`


    }

  }


  function _randomRate(minCust, maxCust){


let number = Math.floor(Math.random() * (maxCust - minCust) + minCust);
console.log(number);
return number;


  }

  const store = [seattle, tokyo, dubai, paris, lima];

  function getAllStoreRates(){

    for(let i = 0; i < store.length; i++){

      let currentStore = store[i];
      
      console.log(currentStore.getRate());

      console.log(`${currentStore.name} is selling at ${currentStore.getRate() } cookies per hour`);

  }}


getAllStoreRates();





function renderRates() {

  const articleElem = document.createElement('article');
  storeDiv.appendChild(articleElem);
 

  const imgElem = document.createElement('img');
  imgElem.src = store.photo;
  articleElem.appendChild(imgElem);
 

  const h2Elem = document.createElement('h2');
  h2Elem.textContent = store.name;
  articleElem.appendChild(h2Elem);
 

  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  for (let i = 0; i < store.length; i++) {
    let currentRate = store[i];
    const liElem = document.createElement('li');
    liElem.textContent = currentRate;
    ulElem.appendChild(liElem);
  }

}

function renderAllRates() {
 
  for (let i = 0; i < store.length; i++) {
    let currentStore = store[i];
    renderRates(currentStore);
  


  const articleElem = document.createElement('article');
  // renderCookies.appendChild(articleElem);
  
  const ulElem = document.createElement('ul');
   articleElem.appendChild(ulElem);

  const cookieTime = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'];

   for(let i = 0; i < cookieTime.length; i++){
  
    console.log (cookieTime[i]);
    const liElem= document.createElement('li');
     liElem.textContent = `${cookieTime}` + `${currentStore.rate * currentStore.AverageCookies}`;


}}}

renderAllRates();















// function cookiesPerHour(){

//   function getRandomInt(minCust, maxCust) {

//     let min = minCust;
//     let max= maxCust;

//       minCust2 = Math.ceil(min);
//       maxCust2 = Math.floor(max);
//    return Math.floor(Math.random() * (max - min) + min);}
//    getRandomInt();
//       console.log(getRandomInt(this.minCust2, this.maxCust2));
//       hourlyRate = ((getRandomInt(this.minCust2, this.maxCust2)) * (this.AverageCookies));
      
//   console.log(); 
// }
//       // console.log(`${hourlyRate}`);

//       cookiesPerHour();


     
// ____________________________________

// function renderCookies(){

  


//   const articleElem = document.createElement('article');
//   // renderCookies.appendChild(articleElem);
  
//   const ulElem = document.createElement('ul');
//    articleElem.appendChild(ulElem);

//   const cookieTime = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'];

//    for(let i = 0; i < cookieTime.length; i++){
  
//     console.log (cookieTime[i]);
//     const liElem= document.createElement('li');
//      liElem.textContent = `${cookieTime}` + `${currentStore.rate * currentStore.AverageCookies}`;
//      ulElem.appendChild(liElem); }


//    }
// console.log(renderCookies());

// _______________________________________________

// console.log(lima.cookiesPerHour());

// const location = [seattle, tokyo, dubai, paris, lima];
// // function salesRate1 (){

//   for(let i=0; i<location.length; i++){

//       let currentLocation = location[i];
//       currentLocation.getSalesRate();
//       console.log(`${currentLocation.name} is selling at ${currentLocation.getSalesRate} cookies per hour`);

//   }
// }
// salesRate1();



// }

// lima.getSalesRate();
// console.log(lima);