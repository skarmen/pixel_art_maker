/*
The code lets the user create a grid of squares representing their chosen dimenssions, and apply colors to those squares.

The code allows the users to:

* Dynamically set the size of the table as an _N_ by _M_ grid.
* Choose a color.
* Click a cell in the grid to fill that cell with the chosen color.
*/

/*
generates table based on the height and width provided by
the user in the makeGrid function
*/
function generate_table(height,width) {
    // get the reference for the body
    let body = document.getElementsByTagName('body')[0]
    // get the reference for the table
    let tbl = document.querySelector('#pixelCanvas')
    // creating all cells
    for (let n = 0; n < width; n++) {
        // creates a table row
        let row = document.createElement('tr')
        tbl.appendChild(row) 
        for (let m = 0; m < height; m++) {
            let cell = document.createElement('td')
            row.appendChild(cell)
        }   
    }
}

// changes the color and opacity of the clicked cells
function changeColor(){ 
    // selects all the cells, returns NodeList 
    let cells = document.querySelectorAll('td')
    console.log('cells', cells)
    // use forEach() to iterate over each cell and listen for a 'click' event to change the color of the cell, el = 'td' or the cells element
    cells.forEach(el => el.addEventListener('click', function (event){
        console.log("Clicked")
        let pickedColor = document.querySelector('#colorPicker').value
        console.log('pickedColor', pickedColor)
        let opacity = document.querySelector('#inputOpacity').value
        console.log('opacity', opacity)
        let borderColor = document.querySelector('#borderColorPicker').value
        console.log('!!!', el === event.target)
        event.target.style.backgroundColor = pickedColor
        event.target.style.opacity = opacity 
        event.target.style.borderColor = borderColor
    }))
}


/*
1. Creates grid based on the values of height and width provided 
by the user from generate_table function
2. When size is submitted by the user, call makeGrid()
*/
let heightInput = document.querySelector('#inputHeight')
let widthInput = document.querySelector('#inputWidth')

function makeGrid() {
    //Select size input
    let size = document.querySelector('#sizePicker')
    console.log('size:', size)
    size.addEventListener('submit', function(event){
        event.preventDefault()
        let height = heightInput.value
        console.log('height:', height)
        let width= widthInput.value
        console.log('width:', width) 
        // querySelectorAll return NodeList, so we need to use forEach to iterate and work with the elements on the list 
        let rows = document.querySelectorAll('tr')
        console.log('rows', rows)
        if( rows.length !== 0) {
            /*
            The 3 options below are removing the existing table and creating a new one
            based on the new dimessions which the user submits
            */
            /*
            Option 1, longer way of writting functions
            rows.forEach(function(el){
                el.remove()
            })
            */
            // Option 2, arrow function -> row.forEach(el => el.remove()) 
            // Option 3 
            rows.forEach((myRowElement) => {
                console.log('myRowElement:', myRowElement)
                myRowElement.remove()
            })
        }
        generate_table(height, width)
        changeColor()
    })
}

makeGrid()

