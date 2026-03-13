const colorVal = document.getElementById('color-val')
const theme = document.getElementById('theme')
const generate = document.getElementById('generate')
const colorPallete = document.getElementById('palette')


function randomRGB(tone){
        let min = 0 
        let max= 255 

        if ( tone ==='light'){
            min = 0 
            max =135
        }
        if (tone === 'dark '){
                min = 150 
                max =255 
        }

        const r = Math.ceil((Math.random() * ( max-min) )+min)
        const g = Math.ceil((Math.random() * ( max-min) )+min)
        const b = Math.ceil((Math.random() * ( max-min) )+min)

        return {r,g,b}
}

function rgb2hex(rgbColor){

    return `#${rgbColor.r.toString(16)}${rgbColor.g.toString(16)}${rgbColor.b.toString(16)}`

}




function generatePallete(){
    colorPallete.innerHTML=''

    for ( let i = 0 ; i<5 ; i++ ){
            const colors = randomRGB(theme.value)   
            let color;

            if ( colorVal.value=='rgb'){
                    color = `rgb(${colors.r} , ${colors.g} , ${colors.b})`
            }
            else{
                    color = rgb2hex(colors)
            }

            const colorBox = document.createElement('div')
            colorBox.classList.add('color')
            colorBox.style.background = color
            colorBox.textContent=color
            colorPallete.appendChild(colorBox)
    } 

    

}


generate.addEventListener('click' , generatePallete)


generatePallete()