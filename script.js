function setColorType ( myType ) {
    console.log( myType );
}

function getRandomColor() {
    return ("#" + ((1<<24)*Math.random() | 0).toString(16));
}



function addSquare( sizeOfSquare ) {
    const newSquare = document.createElement( "div" );
    newSquare.className = "square";
    newSquare.style.height = `${sizeOfSquare}`;
    newSquare.style.width = `${sizeOfSquare}`;
    newSquare.addEventListener( "mouseenter", function( event ) {
        // event.target.style.backgroundColor = "purple";  } ); // monchrome
        // event.target.style.backgroundColor = getRandomColor();  } ); // random RGB

        currentGrey = event.target.style.backgroundColor; // increasing grey
        if( currentGrey == "" ) {
            event.target.style.backgroundColor = "rgb(230,230,230)";
        } else {
            let currentValue = currentGrey.split( "," );
            let newValue = currentValue[1] - 25;
            console.log( newValue );
            event.target.style.backgroundColor = `rgb(${newValue},${newValue},${newValue})`;
        }
      } );
 
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
        squares[i].style.backgroundColor = "rgb(255,255,255)";
    }
}

function setGridSize() {
    clearSketch();
    let gridSize = parseInt(window.prompt( "Enter grid size (128 or less please):", "4"))
    
    while( isNaN( gridSize ) || ( gridSize >128 ) || ( gridSize < 0 ) ) { // verify we have valid input
        window.alert( "Please enter a positive integer value 128 or less please.");
        gridSize = parseInt(window.prompt( "Enter grid size (128 or less please):", "4"))
    }

    drawTheBox( gridSize );
}

function changeDrawType( ) {
    // get curent grid size
    // 
}


// document.getElementById( "rainbow" ).addEventListener( "click", setColorType( "rainbow" ));
// document.getElementById( "mono" ).addEventListener( "click", setColorType( "mono" ));
// document.getElementById( "mogrey" ).addEventListener( "click", setColorType( "mogrey" ));

setGridSize(); // set the initial grid

