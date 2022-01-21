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

function clearSketch() {
    const squares = document.getElementsByClassName( "square" );
    for( i=0; i<squares.length; i++ ) {
        squares[i].style.backgroundColor = "white";
    }
}

function setGridSize() {
    clearSketch();
    let gridSize = parseInt(window.prompt( "Enter grid size (128 or less please):", "4"))
    
    while( isNaN( gridSize ) || ( gridSize >128 ) || ( gridSize < 0 ) ) { // verify we have an integer value of 128 or less
        window.alert( "Please enter a positive integer value 128 or less please.");
        gridSize = parseInt(window.prompt( "Enter grid size (128 or less please):", "4"))
    }

    drawTheBox( gridSize );
}

setGridSize(); // set the initial grid

