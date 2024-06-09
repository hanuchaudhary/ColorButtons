let btn = document.querySelectorAll("button")
let body =  document.querySelector("body")
console.log(btn);

btn.forEach(function(element){
    element.addEventListener("click",function(e){
        console.log(e)
        console.log(e.target)
        if (e.target.id === 'red'){
            body.style.backgroundColor = 'crimson'
        }
        if (e.target.id === 'grey'){
            body.style.backgroundColor = 'dimgray'
        }
        if (e.target.id === 'green'){
            body.style.backgroundColor = 'green'
        }
        if (e.target.id === 'blue'){
            body.style.backgroundColor = 'royalblue'
        }
        if (e.target.id === 'pink'){
            body.style.backgroundColor = 'palevioletred'
        }
        if (e.target.id === 'orange'){
            body.style.backgroundColor = 'orangered'
        }
    })
})

