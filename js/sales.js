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

  

  const seattle = {

    minCust: 23,
    maxCust: 65,
    AverageCookies:  6.3,
    


  }

  const tokyo = {

    minCust: 3,
    maxCust: 24,
    AverageCookies: 1.2,


  }

  const dubai = {

    minCust: 11,
    maxCust: 38,
    AverageCookies: 3.7,


  }

  const paris = {

    minCust: 20,
    maxCust: 38,
    AverageCookies: 2.3,


  }

  const lima = {

    minCust: 2,
    maxCust: 16,
    AverageCookies: 4.6,

  }

  const store = [seattle, tokyo, dubai, paris, lima];

function cookiesPerHour(){

  function getRandomInt(minCust, maxCust) {
      min = Math.ceil(minCust);
      max = Math.floor(maxCust);
   return Math.floor(Math.random() * (max - min) + min);}
   getRandomInt();
      console.log(getRandomInt(this.minCust, this.maxCust));
      hourlyRate = (getRandomInt(this.minCust, this.maxCust) * this.AverageCookies);
      
  return hourlyRate; 
}
      // console.log(`${hourlyRate}`);

      console.log(cookiesPerHour(store[0]));


     
      

function renderCookies(){

  


  const articleElem = document.createElement('article');
  // renderCookies.appendChild(articleElem);
  
  const ulElem = document.createElement('ul');
   articleElem.appendChild(ulElem);

  const cookieTime = [0600, 0700, 0800, 0900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900];

   for(let i = 0; i < cookieTime.length; i++){
  
    console.log (cookieTime[i]);
    const liElem= document.createElement('li');
     liElem.textContent = `${cookieTime} + ${cookiesPerHour(store)}`;
     ulElem.appendChild(liElem); }


   }
renderCookies(store[0]);

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

// function salesRate()
