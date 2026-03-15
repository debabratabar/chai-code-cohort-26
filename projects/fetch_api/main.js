const btn_ref = document.getElementById('btn')
const text_ref = document.getElementById('textRef')


const url = 'https://api.freeapi.app/api/v1/public/quotes?page=1&limit=10&query=human'
const options = {method: 'GET', headers: {accept: 'application/json'}}


async function get_qoute_data (url , options ){

     const apiResponse = await fetch(url , options )
    const apiResponseJson = await apiResponse.json()
    
    const author = apiResponseJson.data.data[Math.floor(Math.random()*5)].author
    const quote = apiResponseJson.data.data[Math.floor(Math.random()*5)].content

    // console.log(`author : ${author} , quote : ${quote}`);
    

    return {author , quote}
      

}




btn_ref.addEventListener('click' , async ()=>{


    const api_data = await get_qoute_data(url , options)
    const data = `
    ${api_data.quote}
    <br>
    <br>
     ${api_data.author}    
    `

    text_ref.innerHTML=data


})