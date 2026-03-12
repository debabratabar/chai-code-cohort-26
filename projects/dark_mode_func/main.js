const toggleBtn = document.getElementById('togglebtn')
// const toggleBtnmessage = document.getElementById('togglebtn').textContent


toggleBtn.addEventListener('click' , ()=>{
    const val =  document.body.classList.toggle('dark')
    // if ( toggleBtnmessage.)
    if ( val){
        toggleBtn.innerText='Click for light Mode'
    }else{
        toggleBtn.innerText='Click for Dark Mode'
    }
    
})