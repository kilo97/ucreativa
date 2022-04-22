const url= 'https://pokeapi.co/api/v2/pokemon/7/'

fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data)
    let element =document.getElementById('element')
    element.innerHTML=`
    <ul>
    <li><p>Strenght ${data.weight}</p></li>
    <li><p>Name ${data.name}</p></li>
    <li><p>Order ${data.order}</p> <li/>
    <img src='${data.sprites.back_shiny}'>
    <img src='${data.sprites.front_default}'>
    <img src='${data.sprites.back_default}'>
    <img src='${data.sprites.front_shiny}'>
    </ul>
    `    
})
.catch(err=>console.log(err))

const url2= 'https://pokeapi.co/api/v2/pokemon/5/'

fetch(url2)
.then(response => response.json())
.then(data => {
    console.log(data)
    let element2 =document.getElementById('element2')
    element2.innerHTML=`
    <ul><li><p>Strenght ${data.weight}</p></li>
    <li><p>Name ${data.name}</p></li>
    <li><p>Order ${data.order}</p> <li/>
    <img src='${data.sprites.back_shiny}'>
    <img src='${data.sprites.front_default}'>
    <img src='${data.sprites.back_default}'>
    <img src='${data.sprites.front_shiny}'>
    </ul>
    `    
})
.catch(err=>console.log(err))
