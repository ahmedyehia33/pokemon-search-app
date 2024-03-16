const searchBtn = document.getElementById('search-button');
const pokeName = document.getElementById('pokemon-name');
const pokeId = document.getElementById('pokemon-id');
const pokeWeight = document.getElementById('weight');
const pokeHeight = document.getElementById('height');
const pokeImg = document.getElementById('poke-img');
const hpBox = document.getElementById('hp');
const attackBox = document.getElementById('attack');
const defenseBox = document.getElementById('defense');
const specialAttackBox = document.getElementById('special-attack');
const specialDefenseBox = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const types = document.getElementById('types');
const searchBox = document.getElementById('search-input');

//functions starts here

const fetchData = async()=>{
                            try{
                                const searchInput = document.getElementById('search-input').value.toLowerCase();
                                const latest =`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput}`;
                            const res = await fetch(latest);
                            const data = await res.json();
                            showPoke(data);
                            typeViewer(data);}
                        
                            catch(err){
                                alert('pokemon not found');
                                clearDisplay();


    }
                            };
const showPoke =(data)=>{
                            const {name, weight, height,id} = data;
                            pokeName.textContent =  name.toUpperCase();
                            pokeId.textContent = `#${id}` ;
                            pokeHeight.textContent = `Height: ${height}`;
                            pokeWeight.textContent = `Weight: ${weight}`;
                            pokeImg.innerHTML = `<img width="150px" src='${data.sprites.front_default}' alt='${name}' id='sprite'>`;
                            hpBox.innerHTML = `<p>${data.stats[0].base_stat}</p>`;
                            attackBox.innerHTML =`<p> ${data.stats[1].base_stat}</p>`;
                            defenseBox.innerHTML =`<p> ${data.stats[2].base_stat}</p>`;
                            specialAttackBox.innerHTML=`<p>${data.stats[3].base_stat}</p>`;
                            specialDefenseBox.innerHTML = `<p> ${data.stats[4].base_stat}</p>`;
                            speed.innerHTML= `<p>${data.stats[5].base_stat}</p>`;
                        };

const typeViewer = (data)=>{
                            types.innerHTML = data.types.map(obj => `<span class="type ${obj.type.name}">${obj.type.name}</span>`).join('');
                            };
const clearDisplay =()=>{
                            types.innerHTML = "";
                            pokeName.textContent =  '';
                            pokeId.textContent = '' ;
                            pokeHeight.textContent = '';
                            pokeWeight.textContent = '';
                            pokeImg.innerHTML = "";
                            hpBox.innerHTML = "";
                            attackBox.innerHTML ="";
                            defenseBox.innerHTML ="";
                            specialAttackBox.innerHTML="";
                            specialDefenseBox.innerHTML = "";
                            speed.innerHTML= "";
                         };



searchBtn.addEventListener('click', fetchData);
searchBox.addEventListener('keydown', (e)=>{
                                            if(e.key ==='Enter'){
                                                fetchData();
                                            }
                                            })