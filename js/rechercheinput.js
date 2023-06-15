const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', () => {
  const inputVal = document.getElementById('recherche').value;
  console.log(inputVal); 

  const tout = document.getElementsByClassName("name");
  const tout1 = document.getElementsByClassName("div");

  for (let i = 0; i < 10; i++) {
    const element = tout[i];
    const elements = element.parentNode;
    if (element.textContent.toLowerCase().includes(inputVal.toLowerCase()) || inputVal==="") {
      console.log("yes");
      elements.style.display = 'block';
      
    } else {
      console.log("no");
      elements.style.display = 'none';
      
    }
  }

});





