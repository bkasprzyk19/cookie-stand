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



function Location(name, minCust, maxCust, AverageCookies) {

  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.AverageCookies = AverageCookies;
  this.hourlySalesArray = [];

  Location.allLocations.push(this);
}

Location.allLocations = [];

Location.prototype.randomNumberofCust = function(){

    return Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust));}

const cookieTime = ['0600', '0700', '0800', '0900', '1000', '1100',   '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'];

  

Location.prototype.fillHourlySalesArray = function(){
  for(let i = 0; i < cookieTime.length; i++){

  let salesPerHour = this.randomNumberofCust() * this.AverageCookies;
  this.hourlySalesArray.push(Math.ceil(salesPerHour))}
}


const seattle = new Location('Seattle', 23, 65, 6.3);
const tokyo = new Location('Tokyo', 3, 24, 1.2);
const dubai = new Location('Dubai', 11, 38, 3.7);
const paris = new Location('Paris', 20, 38, 2.3);
const lima = new Location('Lima', 2, 16, 4.6);

function fillHourlySalesArrayAllLocations() {

  for (let i = 0; i < Location.allLocations.length; i++) {
     const currentLocation = Location.allLocations[i];
    currentLocation.fillHourlySalesArray();

  }


}

fillHourlySalesArrayAllLocations();







  const storeTable = document.getElementById('storeProfiles');


//   const seattle = {
//     name: 'seattle',
//     minCust: 23,
//     maxCust: 65,
//     AverageCookies:  6.3,
//     hourlySalesArray: [],
//     // rate: null,
//     photo: './images/seattle.jpeg',
//     // getRate: function(){
//     // this.rate = `${_randomRate()}`,

   
//     randomNumberofCust: function(){

//         return Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust))}

//     ,
    
//   fillHourlySalesArray: function(){
//     for(let i = 0; i < cookieTime.length; i++){

//       let salesPerHour = this.randomNumberofCust() * this.AverageCookies;
//       this.hourlySalesArray.push(salesPerHour);}}}


      
    
//   const tokyo = {
//     name: 'tokyo',
//     minCust: 3,
//     maxCust: 24,
//     AverageCookies: 1.2,
//     hourlySalesArray: [],
//     // rate: null,
//     photo: './images/tokyo.jpeg',
//     // getRate: function(){
//     // this.rate = `${_randomRate()}`,

   
//     randomNumberofCust: function(){

//         return Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust))}

//     ,
    
//   fillHourlySalesArray: function(){
//     for(let i = 0; i < cookieTime.length; i++){

//       let salesPerHour = this.randomNumberofCust() * this.AverageCookies;
//         this.hourlySalesArray.push(salesPerHour);}}}

            

//   const dubai = {
//     name: 'dubai',
//     minCust: 11,
//     maxCust: 38,
//     AverageCookies: 3.7,
//     hourlySalesArray: [],
//     // rate: null,
//     photo: './images/dubai.jpeg',
//     // getRate: function(){
//     // this.rate = `${_randomRate()}`,

   
//     randomNumberofCust: function(){

//         return Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust))}

//     ,
    
//   fillHourlySalesArray: function(){
//     for(let i = 0; i < cookieTime.length; i++){

//       let salesPerHour = this.randomNumberofCust() * this.AverageCookies;
//       this.hourlySalesArray.push(salesPerHour);}


//   }}

//   const paris = {
//     name: 'paris',
//     minCust: 20,
//     maxCust: 38,

//     hourlySalesArray: [],
//     // rate: null,
//     photo: './images/paris.jpeg',
//     // getRate: function(){
//     // this.rate = `${_randomRate()}`,

   
//     randomNumberofCust: function(){

//         return Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust))}

//     ,
    
//   fillHourlySalesArray: function(){
//     for(let i = 0; i < cookieTime.length; i++){

//       let salesPerHour = this.randomNumberofCust() * this.AverageCookies;
//       this.hourlySalesArray.push(salesPerHour);}
//     }


//   }

//   const lima = {
//     name: 'lima',
//     minCust: 2,
//     maxCust: 16,
//     AverageCookies: 4.6,
//     hourlySalesArray: [],
//     // rate: null,
//     photo: './images/lima.jpeg',
//     // getRate: function(){
//     // this.rate = `${_randomRate()}`,

   
//     randomNumberofCust: function(){

//         return Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust))}

//     ,
    
//   fillHourlySalesArray: function(){
//     for(let i = 0; i < cookieTime.length; i++){

//       let salesPerHour = this.randomNumberofCust() * this.AverageCookies;
//       this.hourlySalesArray.push(salesPerHour);}


//   }


// }

    

    // const cookieTime = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'];

  
 function _makeElement(tag, parent, text){

  const element = document.createElement(tag);

  parent.appendChild(element);

  if(text){
    element.textContent = text;

  }
  return element;
 }

Location.prototype.renderSingleLocation = function(body){
  let total = 0;
  const rowElem = document.createElement('tr');
  body.appendChild(rowElem);

    const thElem = _makeElement('th', rowElem, this.name);
    for (let i = 0; i < cookieTime.length; i++) {
      let cookiesNow = this.hourlySalesArray[i];
      total += cookiesNow;
      _makeElement('td', rowElem, cookiesNow);


    }
_makeElement('td', rowElem, total)}



function renderAllLocations(){



let tbodyElem = _makeElement('tbody', storeTable, null);
  for(let i = 0; i < Location.allLocations.length; i++) {
    Location.allLocations[i].renderSingleLocation(tbodyElem);
  }

}
renderAllLocations();
  // const articleElem = _makeElement ('article', storeProfiles.Div, null);

  // _makeElement ('h3', articleElem, location.name);
//   const ulElem = _makeElement('ul', articleElem, null);

// for (let i = 0; i < cookieTime.length; i++) {
//   const text = `${cookieTime[i]}: ${location.hourlySalesArray} cookies.` ;
//   let total = location.hourlySalesArray[i];
//   _makeElement('li', ulElem, text);



// const totalsString = `Total: ${total} cookies`;
// _makeElement('li', ulElem, totalsString);





// fillHourlySalesArray();
// renderLoc();

// const storeArray = [seattle, tokyo, dubai, paris, lima];

// function renderAllLoc(){

// for (let i = 0; i < storeArray.length; i++) {
//   const currentLoc = storeArray[i];
//   currentLoc.fillHourlySalesArray();
//   renderLoc(currentLoc);


// }

// };

// renderAllLoc();

  // const articleElem = document.createElement('article');
  // storeDiv.appendChild(articleElem);
 

  // const imgElem = document.createElement('img');
  // imgElem.src = store.photo;
  // articleElem.appendChild(imgElem);
 

  // const h2Elem = document.createElement('h2');
  // h2Elem.textContent = store.name;
  // articleElem.appendChild(h2Elem);
 

  // const ulElem = document.createElement('ul');
  // articleElem.appendChild(ulElem);

  // for (let i = 0; i < cookieTime.length; i++) {
    
  //   const liElem = document.createElement('li');
  //   liElem.textContent = currentRate;
  //   ulElem.appendChild(liElem);

  // const liElem = document.createElement('li');
  // liElem.textContent = currentRate;
  // ulElem.appendChild(liElem);}






    // function renderRates() {

    //   const articleElem = document.createElement('article');
    //   storeDiv.appendChild(articleElem);
     
    
    //   const imgElem = document.createElement('img');
    //   imgElem.src = store.photo;
    //   articleElem.appendChild(imgElem);
     
    
    //   const h2Elem = document.createElement('h2');
    //   h2Elem.textContent = store.name;
    //   articleElem.appendChild(h2Elem);
     
    
    //   const ulElem = document.createElement('ul');
    //   articleElem.appendChild(ulElem);
    
      // for (let i = 0; i < store.length; i++) {
      //   let currentRate = store[i];
      //   const liElem = document.createElement('li');
      //   liElem.textContent = currentRate;
      //   ulElem.appendChild(liElem);
    //   }
    
    // }
    
    // function renderAllRates() {
     
    //   for (let i = 0; i < store.length; i++) {
    //     let currentStore = store[i];
    //     renderRates(currentStore);
      
    
    
    //   const articleElem = document.createElement('article');
    //   // renderCookies.appendChild(articleElem);
      
    //   const ulElem = document.createElement('ul');
    //    articleElem.appendChild(ulElem);
    
      
    
      //  for(let i = 0; i < cookieTime.length; i++){
      
      //   console.log (cookieTime[i]);
      //   const liElem= document.createElement('li');
      //    liElem.textContent = `${cookieTime}` + `${currentStore.rate} * ${currentStore.AverageCookies}`;
    
    
    // }}}
    
    // renderAllRates();
    
    
    










//   function _randomRate(minCust, maxCust){


// let number = Math.floor(Math.random() * (maxCust - minCust) + minCust);
// console.log(number);
// return number;


  

//   const store = [seattle, tokyo, dubai, paris, lima];

//   function getAllStoreRates(){

//     for(let i = 0; i < store.length; i++){

//       let currentStore = store[i];
      
//       console.log(currentStore.getRate());

//       console.log(`${currentStore.name} is selling at ${currentStore.getRate() } cookies per hour`);

//   }}


// getAllStoreRates();















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