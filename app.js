// HERE WE HAVE COUNT VARIABLE
const count = document.querySelectorAll('.count');
console.log(count);


// HERE WE HAVE COUNT FOREACH FUNCTION
count.forEach(i =>{
    i.innerHTML = 0

    // here we have update counter function
    const updateCounter = () =>{
        const target = +i.getAttribute('data-target');  
        console.log(target);
        const c =+ i.innerText; 
        console.log(c);
        console.log(target);
        const incress = target/400;
        console.log(target);

    // here we have if else satement
        if(c < target){
            i.innerHTML = `${Math.ceil(c + incress)}`
            setTimeout(updateCounter, 10);
        }else{
            i.innerText = target
        }
    }

    // here we have invoke updateconter function
    updateCounter();
})






