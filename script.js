

function getRandomColor( event ) {
    event.target.style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
}


function makePurple( event ) {
    event.target.style.backgroundColor = "purple";
}


function makeGreyer( event ) {
    currentGrey = event.target.style.backgroundColor; // increasing grey
    if( currentGrey == "" ) {
        event.target.style.backgroundColor = "rgb(230,230,230)";
    } else {
        let currentValue = currentGrey.split( "," );
        let newValue = currentValue[1] - 25; // darken it up
        event.target.style.backgroundColor = `rgb(${newValue},${newValue},${newValue})`;
    }
}


function addSquare( sizeOfSquare ) {
    const newSquare = document.createElement( "div" );
    newSquare.className = "square";
    newSquare.style.height = `${sizeOfSquare}`;
    newSquare.style.width = `${sizeOfSquare}`;

    newSquare.addEventListener( "mouseenter", getRandomColor ); // start the page with rainbow

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

function purpleButton() {
    const squares = document.getElementsByClassName( "square" );
    for( i=0; i<squares.length; i++ ) {
        squares[i].style.backgroundColor = "rgb(255,255,255)";
        squares[i].removeEventListener( "mouseenter", makeGreyer );
        squares[i].removeEventListener( "mouseenter", getRandomColor );
        squares[i].addEventListener( "mouseenter", makePurple );
    }
}

function greyButton() {
    const squares = document.getElementsByClassName( "square" );
    for( i=0; i<squares.length; i++ ) {
        squares[i].style.backgroundColor = "rgb(255,255,255)";
        squares[i].removeEventListener( "mouseenter", makePurple );
        squares[i].removeEventListener( "mouseenter", getRandomColor );
        squares[i].addEventListener( "mouseenter", makeGreyer );
    }
}

function rainbowButton() {
    const squares = document.getElementsByClassName( "square" );
    for( i=0; i<squares.length; i++ ) {
        squares[i].style.backgroundColor = "rgb(255,255,255)";
        squares[i].removeEventListener( "mouseenter", makePurple );
        squares[i].removeEventListener( "mouseenter", makeGreyer );
        squares[i].addEventListener( "mouseenter", getRandomColor );
    }
}


setGridSize(); // set the initial grid