const form = document.querySelectorAll('.todo-form');
const input = document.querySelectorAll('.todo-item');
const list = document.querySelectorAll('.list');
const inputBox = document.querySelectorAll('textarea');
const btn = document.querySelectorAll('button');
const closeBtn = document.querySelectorAll('.close');

form.forEach((bullet, index) => {
    bullet.addEventListener('submit', (e) => {
        e.preventDefault();
        const todo = input[index].value.trim();
        if(todo == ''){
            inputBox[index].style.display = `block`;
            btn[index].style.background = `#0079bf`;
            btn[index].style.color = `white`;
            btn[index].innerHTML = `Add card`;
            closeBtn[index].style.display =`inline-block`;
        }
        else if (todo !== '') {
            const li = document.createElement('div');
            li.classList.add('item');
            li.setAttribute("draggable", true)
            li.textContent = todo;
            list[index].appendChild(li);
            input[index].value = '';
            inputBox[index].style.display = `none`
            items = document.querySelectorAll('.item')
            btn[index].style.background = `transparent`;
            btn[index].style.color = `grey`;
            btn[index].innerHTML = `<i class="fa-solid fa-plus"></i> Add a card`;
            closeBtn[index].style.display =`none`;
        }
    });
});

closeBtn.forEach((cross,num)=>{
    cross.addEventListener('click',()=>{
        input[num].value = '';
            inputBox[num].style.display = `none`;
            btn[num].style.background = `transparent`;
            btn[num].style.color = `grey`;
            btn[num].innerHTML = `<i class="fa-solid fa-plus"></i> Add a card`;
            closeBtn[num].style.display =`none`;
    })
})

let draggedItem = null;
let items = document.querySelectorAll('.item');
let containers = document.querySelectorAll('.container');

$(function () {
    var dragZone = document.getElementById("dragzone");
    var dropZone1 = document.getElementById("dropzone1");
    var dropZone2 = document.getElementById("dropzone2");

    var sortable = new Sortable(dragZone, {
        group: "shared",
        animation: 150,
        ghostClass: "ghost",
    });

    Sortable.create(dropZone1, {
        group: "shared",
        animation: 150
    });

    Sortable.create(dropZone2, {
        group: "shared",
        animation: 150
    });
});

  
