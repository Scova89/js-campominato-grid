const container = document.querySelector('.container-easy');

let items = '';

for(i = 1; i <= 100; i++){
    items += `
    <div class="box-easy">${i}</div>
    `;
}

console.log(items);

container.innerHTML = items;