window.onload = () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
    console.log("Hello Rigo from the console!");
  };
  
  let generateExcuse = () => {
      let pronoun = ['A','The'];
      let subject = ['policeman', 'old lady', 'baby', 'cat'];
      let action = ['took my', 'broke my', 'shook my', 'stole my'];
      let possesion = ['car', 'leg', 'keys', 'wallet'];
      let where = ['on the street', 'on the floor', 'by my house', 'in the pool'];
    
    let proIndex = Math.floor(Math.random()* pronoun.length);
    let subIndex = Math.floor(Math.random()* subject.length);
    let acIndex = Math.floor(Math.random()* action.length);
    let posIndex = Math.floor(Math.random()* possesion.length);
    let whereIndex = Math.floor(Math.random()* where.length);

    let excuse = pronoun[proIndex] + ' ' + subject[subIndex] + ' ' + action[acIndex] + ' ' + possesion[posIndex] + ' ' + where[whereIndex];
  
    return excuse;
  };