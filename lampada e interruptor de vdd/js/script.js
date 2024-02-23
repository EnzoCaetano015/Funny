const lampada = document.getElementById('lamp')
const tomada = document.getElementById('tomada')


function inte(){

    return lampada.src.indexOf('desligada') > -1 

}

function on(){

    return tomada.src.indexOf('off') > -1




}

function inter(){

    

        if (inte,on()){

            lampada.src = 'img/ligada.jpg'
            tomada.src = 'img/on.png'
           
        }

        else{

            lampada.src = 'img/desligada.jpg'
            tomada.src = 'img/off.png'

        }

}

tomada.addEventListener('click', inter,on)