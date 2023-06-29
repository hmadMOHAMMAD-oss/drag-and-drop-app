let btn = document.querySelector("#btnInput");
btn.addEventListener("click", () => {
    let ele = document.createElement("p")
    let input = document.querySelector("#itemInput")
    let con = document.querySelector(".addCon")

    if (input.value == "") {
        window.alert("No Value To Add")
    }

    if (input.value != "") {
        ele.innerHTML = `<p class="item" draggable="true"> ${input.value} </p>`;
        con.appendChild(ele);
        input.value = "";
        let drag = ele
    }

    gragfun()
})

function gragfun() {
    let item = document.querySelectorAll(".item")
    let box = document.querySelectorAll(".box")
    let boxToDo = document.querySelector('#to-do')
    let boxProg = document.querySelector('#prog')
    let boxCom = document.querySelector('#com')


    item.forEach(item => {

        item.addEventListener('dragstart', () => {
            drag = item
            item.style.opacity = "0.8"
        })
        item.addEventListener('dragend', () => {
            drag = null
            item.style.opacity = "1"
        })
    })


    boxToDo.addEventListener('dragover', (e) => {
        e.preventDefault()
        boxToDo.style.background = '#90dd97';
    })

    boxProg.addEventListener('dragover', (e) => {
        e.preventDefault()
        boxProg.style.background = '#70a3c5';
    })

    boxCom.addEventListener('dragover', (e) => {
        e.preventDefault()
        boxCom.style.background = '#f38787';
    })


    box.forEach(box => {
        box.addEventListener('dragleave', () => {
            box.style.background = '#ffff';
        })

        box.addEventListener('drop', () => {
            box.style.background = '#ffff';
            box.append(drag)
        })
    })

    boxCom.addEventListener('drop', () => {

            drag.classList.add("disaple")

    })

}


