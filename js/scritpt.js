let counterText = document.querySelectorAll('.counter-text')

let box = Array.from(counterText)

box.map((machine) =>{
    
    let i = 0 
    let count = ()=>{
        i++
        machine.innerHTML = i

        if(i == machine.dataset.count){
            clearInterval(stop)
        }
    }
    let stop = setInterval(()=>{
        count()
    },3 / machine.dataset.count)
})