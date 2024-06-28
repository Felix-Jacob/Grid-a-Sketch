let gridSize=16;
 

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
        target.classList.add("sketched");
    })
}