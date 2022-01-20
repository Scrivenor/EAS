
function addSquare( sizeOfSquare ) {
    const newSquare = document.createElement( "div" );
    newSquare.style.height = `${sizeOfSquare}`;
    newSquare.style.width = `${sizeOfSquare}`;
    newSquare.addEventListener( "mouseenter", function( event ) {
        event.target.style.backgroundColor = "purple";  } );
    
    document.getElementById( "gridContainer" ).append( newSquare );
}


function drawTheBox ( howBig ) {
    
    const totalBoxes = howBig * howBig;
    for( i=0; i<totalBoxes;i++ ) {
        addSquare( 500 / 16 );
    }
}

function changeColor() {

}

drawTheBox( 16 );

