let btn = document.getElementById('btn');
let input = document.getElementById('input');
let ul = document.getElementById('ul');
btn.addEventListener('click', function () {
    if (input.value.trim() === '') {
        alert('Enter a valid input');
        return;
    }
    let = li = document.createElement('li');
    li.innerHTML = `<span>${input.value}</span> 
    <button class="edit">
    <i class="fa-solid fa-pen-to-square"></i>
    </button> 
    <button class="del">
    <i class="fa-solid fa-minus"></i>
    </button>`;
    ul.appendChild(li);
    input.value = '';
});
ul.addEventListener('click', function (e) {
    if (e.target.classList.contains('del')) {
        let li = e.target.closest('li');
        ul.removeChild(li);
    }

    else if (e.target.classList.contains('edit')) {
        let li = e.target.closest('li');
        let currentText = li.querySelector('span').textContent.trim();
        input.value = currentText;
        ul.removeChild(li);
    }
});