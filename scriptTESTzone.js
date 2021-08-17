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
  
  const bird = {
    name: 'hubert',
  
  
  }
  
  console.log(bird.toString());
  
  const redWing = {
  
    name: 'Ralph',
    age:  null,
    interests: ['bugs', 'flying', 'swamps'],
    isGoodWithDucks: false,
    isGoodWithBeaver: true,
    color: 'red and black',
    photo: '',
  
    getAge: function(){
      this.age = `${_randomAge(3, 12)} months`;
  
    }
  }
  function _randomAge(min, max){
  
    let number = Math.floor(Math.random() * (max - min) + min);
    return number;
  }
  
  redWing.getAge();
  console.log(redWing);
  
  const flock = [redWing, peregrine, merganser];
  
  function birdsFlyTogether(){
    for (let i = 0; i < flock.length; i++){
  
      let currentBird = flock[i];
      currentBird.getAge();
      console.log(`${currentBird.name} is ${currentBirg.age} moths old)`);
    }
  
  
  }
  birdsFlyTogether();
  
  const birdDiv = document.getElementById('birdProfiles');
  
  function renderBirds(bird){
  
    const articleElem = document.createElement('article');
  birdDiv.appendChild(articleElem);
  const imgElem = document.createElement('img');
  imgElem.src = bird.photo;
  articleElem.appendChild(imgElem);
  
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = bird.name;
  articleElem.appendChild(h2Elem);
  
  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);
  
    for(let i=0; i<kitten.interests.length; i++){
  
      let currentInterests = bird.interests[i];
      const liElem= document.createElement('li');
       liElem.textContent = currentInterest;
       ulElem.appendChild(liElem);
    }
  
  }
  
  renderBirds(Ralph);
  
  function renderFlock(){
   for(let i = 0; i <flock,length; i++){
  
    let currentBird = bird[i];
    renderBirds(currentBird);
  
   }
  
  }
  
  renderFlock();