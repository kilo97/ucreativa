//paso 1
const url = 'https://jsonplaceholder.typicode.com/posts'
fetch(url)
.then(response => response.json())
.then (data=> {
        console.log(data)
let result = data.filter(element =>(element.id%2)==1)
let resultTitle=result.map(element =>{
    return element['title']
})
let b=document.getElementById('element')
resultTitle.forEach(element=>{
    a=document.createElement("li")
    a.textContent=element
    b.appendChild(a);
})


//paso3
    data.forEach(element => {
        console.log(element)
    });
//paso4
    data.forEach(element=>{
        console.log(element.title)
    })
//paso5
    data.filter(element=>{
        if (element.id % 2==0) {
            console.log(element)
        }
    })
//paso6
    data.forEach(element=>{
        if (element.id %2==0) {
                console.log(element)
        }
    })
//paso7
    const nuevoArrreglo= data.map (function (element) {
        if (element.id %2!=0) {
            console.log(element['title'])
        }

    })
 //paso8
//  let element=document.getElementById('element')
//  element.innerHTML= `
//                  <ol>
//                  <li> KEILOR ${data[2].id}<li/>
//                  </ol>
//                  `

})
//paso2 
.catch( err=>console.log(err))



