function getRandomColor() {
    return ("#" + ((1<<24)*Math.random() | 0).toString(16))
}

function addSquare( sizeOfSquare ) {
    const newSquare = document.createElement( "div" );
    newSquare.className = "square";
    newSquare.style.height = `${sizeOfSquare}`;
    newSquare.style.width = `${sizeOfSquare}`;
    newSquare.addEventListener( "mouseenter", function( event ) {
        // event.target.style.backgroundColor = "purple";  } );
        event.target.style.backgroundColor = getRandomColor();  } );
 
    document.getElementById( "gridContainer" ).append( newSquare );
}


function drawTheBox ( howBig ) {
    document.getElementById( "gridContainer" ).style.gridTemplateColumns = `repeat( ${howBig}, 1fr `;
    document.getElementById( "gridContainer" ).style.gridTemplateRows = `repeat( ${howBig}, 1fr `;
    const totalBoxes = howBig * howBig;
    for( i=0; i<totalBoxes;i++ ) {
        addSquare( 500 / howBig );
    }
}

function changeColor() {

}

function reloadPage() {
    window.location.reload( true );
}

function clearSketch() {
    const squares = document.getElementsByClassName( "square" );
    for( i=0; i<squares.length; i++ ) {
        squares[i].style.backgroundColor = "white";
    }
}

function setGridSize() {
    clearSketch();
    var gridSize = window.prompt( "Enter grid size (128 or less please):", "4")
    if( gridSize > 128 ) {
        window.alert("That number is too large, reducing to 128.")
        gridSize = 128;
    }
    drawTheBox( gridSize );
}

setGridSize(); // set the initial grid

