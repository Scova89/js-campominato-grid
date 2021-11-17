const container = document.querySelector('.container-easy');

let items = '';

// soluzione con innerHTML
// for(i = 1; i <= 100; i++){
//     items += `
//     <div class="box">${i}</div>
//     `;
// }

// console.log(items);

// container.innerHTML = items;


// soluzione con createElement

// creo la funzione universale per aggiungere i quadrati
function addBox(){
    const nodo = document.createElement('div');
    nodo.classList.add('box');
    return nodo;
}

for(i = 1; i <= 100; i++){
    container.appendChild(addBox());
    items += `
      <div class="box easy">${i}</div>
      `;
    container.innerHTML = items;
}