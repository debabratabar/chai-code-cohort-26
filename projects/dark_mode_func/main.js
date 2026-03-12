const toggleBtn = document.getElementById('togglebtn')
// const toggleBtnmessage = document.getElementById('togglebtn').textContent


toggleBtn.addEventListener('click' , ()=>{
    const themeVal =  document.body.classList.toggle('dark') ? 'dark' : 'light'
    if ( themeVal=='dark'){
        toggleBtn.innerText='Click for light Mode'
    }else{
        toggleBtn.innerText='Click for Dark Mode'
    }
    localStorage.setItem('theme' , themeVal)
    
})

window.addEventListener('DOMContentLoaded' , () => {
    let curr_state = localStorage.getItem('theme')
    console.log(curr_state);
    

    if(curr_state ==='dark'){
            document.body.classList.toggle('dark') 
            toggleBtn.innerText='Click for light Mode'
    }
})