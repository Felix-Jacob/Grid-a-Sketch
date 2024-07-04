let gridSize=16;
 const gridBtn=document.querySelector('button');
 gridBtn.addEventListener('click',newGrid)

makeRow(gridSize);

function makeRow(size){
    let gridRow= document.createElement('div');
    gridRow.setAttribute('class', 'row-div');
    let gridMap=document.querySelector('#project-container');
    let columnDiv=document.createElement('div');
    columnDiv.setAttribute('class', 'column-div');
    gridRow.appendChild(columnDiv);
    for(i=size-1;i>0;i--){
        let cloneColumn= columnDiv.cloneNode();
        gridRow.appendChild(cloneColumn);
    gridMap.appendChild(gridRow);
    }
    while ((size-1)>0){
    let cloneRow= gridRow.cloneNode(true);
    gridMap.appendChild(cloneRow);
    size--;
}
    listenGrid()
}

function listenGrid(){
    let divEnter= document.querySelector('#project-container');
    divEnter.addEventListener('mouseover', (event)=>{
        let target= event.target;
        //target.classList.add("sketched");
        target.setAttribute("style",`background-color:rgb(${randColor()},${randColor()},${randColor()})`)
    })
}

function newGrid(){
    let disowner=document.querySelector('#project-container');
    while(disowner.firstChild){
    disowner.removeChild(disowner.firstChild);
}
    const newGridSize= Number(prompt("Please enter new grid length/height."));
        if (newGridSize<2 || newGridSize>100) {
            newGrid();
        }
        makeRow(newGridSize);
}

function randColor(){
    return Math.floor(Math.random()*256);
}