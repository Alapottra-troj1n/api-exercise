const getCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
};


const displayCountries = data => {
   const container =  document.querySelector('.container');
   data.forEach(country => {
       const divCountry = document.createElement('div');
       divCountry.classList.add('country');
       divCountry.innerHTML = `
       <div> <img src="${country.flags.png}" alt="" ></div>
       <h3>Country Name : ${country.name.common}</h3>
       <p> Population : ${country.population} </p>
       
       ` ;
       container.appendChild(divCountry);

   })
}


getCountries();




const searchField = document.getElementById('search');

searchField.addEventListener('keyup', ()=>{
    const countries = document.getElementsByClassName('country');
    const value = searchField.value.toLowerCase();
    

for(country of countries) {
    if(country.children[1].innerText.toLowerCase().includes(value)){
        country.style.display = 'block';
    }else{
        country.style.display = 'none';
    }
}
    
     
 

   
});