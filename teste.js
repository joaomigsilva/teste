
// get reference to sliders

const x_slider = document.getElementById( 'x' )
const y_slider = document.getElementById( 'y' )


// BATATA A BOMBAR

function batata() {

    let x = x_slider.valueAsNumber
    let y = y_slider.valueAsNumber

// update labels dos sliders
    document.getElementById( 'x_label' ).innerHTML = 'PLANTING STAGE ' + x
    document.getElementById( 'y_label' ).innerHTML = 'BUILDING STAGE ' + y


// dar variavel ao nome das imagens
    verde = "v" + x
    casas = "c" + y
    
//CRIAR IMAGEM
    var pic = new Image(550,450)
    pic.src = verde + casas + ".jpg"

    document.getElementById("pic").innerHTML = ""
    document.getElementById('pic').appendChild(pic); 

//MUDAR LEGENDA
    if (x>y) {
        document.getElementById("caption").innerHTML = `There is still space for new construction!`
    } else if (y>x) {
        document.getElementById("caption").innerHTML = "You might want to consider protecting nature!"
    } else {
       document.getElementById("caption").innerHTML = "Looks as if the ecossystem is balanced"

    }

//CRIAR POP DISPLAY
    if (y==1) {
        document.getElementById("pop").innerHTML = 'CURRENT POPULATION: '+ x*3
    } else if (y==2) {
        document.getElementById("pop").innerHTML = 'CURRENT POPULATION: '+ x*5
    } else {
    document.getElementById("pop").innerHTML = 'CURRENT POPULATION: '+ x*11

    }

//ON MOUSE OVER
    const img = document.getElementById('pic')

    // listen to events related to the image
    img.addEventListener('mouseover', mouseOver, false)
    img.addEventListener('mouseout', mouseOut, false)

    // define what happens when there is a mouse over event
    function mouseOver() {
        document.getElementById('pop').style.display = 'block';
    }

    // define what happens when there is a mouse out event
    function mouseOut() {
        document.getElementById('pop').style.display = 'none';
    }

}
batata();
