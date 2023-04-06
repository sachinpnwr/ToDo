const form = document.querySelectorAll('.todo-form');
const input = document.querySelectorAll('.todo-item');
const list = document.querySelectorAll('.list');
const inputBox = document.querySelectorAll('textarea');
const btn = document.querySelectorAll('button');
const closeBtn = document.querySelectorAll('.close');
let edit = document.querySelectorAll('.edit')

form.forEach((bullet, index) => {
    bullet.addEventListener('submit', (e) => {
        e.preventDefault();
        var todo = input[index].value.trim();
        if (todo == '') {
            inputBox[index].style.display = `block`;
            btn[index].style.background = `#0079bf`;
            btn[index].style.color = `white`;
            btn[index].innerHTML = `Add card`;
            closeBtn[index].style.display = `inline-block`;
        }
        else if (todo !== '' && btn[index].innerHTML != `Save`) {
            const li = document.createElement('div');
            li.classList.add('item');
            li.setAttribute("draggable", true)
            li.innerHTML = `${todo} <i class="fa-solid fa-pen-to-square edit"></i>`;
            list[index].appendChild(li);
            input[index].value = '';
            inputBox[index].style.display = `none`
            items = document.querySelectorAll('.item')
            btn[index].style.background = `transparent`;
            btn[index].style.color = `grey`;
            btn[index].innerHTML = `<i class="fa-solid fa-plus"></i> Add a card`;
            closeBtn[index].style.display = `none`;
            edit = document.querySelectorAll('.edit')
            editBtn();
            
            
        }
        else if (btn[index].innerHTML === `Save`) {
            todo = inputBox[index].value;
            items[b].innerHTML = `${todo} <i class="fa-solid fa-pen-to-square edit"></i>`;
            input[index].value = '';
            inputBox[index].style.display = `none`
            items = document.querySelectorAll('.item')
            btn[index].style.background = `transparent`;
            btn[index].style.color = `grey`;
            btn[index].innerHTML = `<i class="fa-solid fa-plus"></i> Add a card`;
            closeBtn[index].style.display = `none`;
            edit = document.querySelectorAll('.edit')
            inputBox[index].value = "";
            editBtn();
            // editBtn();

        }
    });
});

closeBtn.forEach((cross, num) => {
    cross.addEventListener('click', () => {
        input[num].value = '';
        inputBox[num].style.display = `none`;
        btn[num].style.background = `transparent`;
        btn[num].style.color = `grey`;
        btn[num].innerHTML = `<i class="fa-solid fa-plus"></i> Add a card`;
        closeBtn[num].style.display = `none`;
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



// edit content
var b;
function editBtn() {
    let boxNum;

    edit.forEach((button, index1) => {
        button.addEventListener('click', () => {
            b = index1;
            let a = items[index1].textContent;

            let numb = document.getElementById("dropzone1").children.length;
            let numb2 = document.getElementById("dropzone2").children.length;
            let numb3 = document.getElementById("dragzone").children.length;
            if (index1 + 1 <= numb) {
                boxNum = 0;
            }
            else if (index1 + 1 <= numb2 + numb) {
                boxNum = 1;
            }
            else if(index1 + 1 <= numb2 + numb + numb3){
                boxNum = 2;
            }
            inputBox[boxNum].value = a;
            inputBox[boxNum].style.display = `block`;
            btn[boxNum].style.background = `#0079bf`;
            btn[boxNum].style.color = `white`;
            btn[boxNum].innerHTML = `Save`;
            closeBtn[boxNum].style.display = `inline-block`;
            // console.log(index1)

        })
    });
}

editBtn();



