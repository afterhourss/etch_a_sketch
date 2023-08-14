const body = document.querySelector('body');
const grid = document.createElement('div');
const title = document.createElement('h1');
body.appendChild(title);
body.appendChild(grid);
title.textContent = "Etch a Sketch";
grid.classList.add('grid-container');



let userPrompt = prompt("you wanna using many grids?",'');
if (userPrompt <= 100){
    grid.style.gridTemplateColumns = `repeat(${userPrompt}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${userPrompt}, 1fr)`;
    grid.style.display = 'grid';
    grid.style.width = '620px';
    grid.style.height = '620px';
    for (let i = 0; i < userPrompt * userPrompt; i++){
        const box = document.createElement('div');
        grid.appendChild(box);
        box.classList.add('hoverable');
        
        box.addEventListener("mousemove", () => {
            box.classList.add('hoverable-black'); 
            
        });

    } 
} else {
    alert('too much grids, max 100');
}
