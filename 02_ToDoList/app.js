const addBtn = document.querySelector('#addBtn');
const input = document.querySelector('#input');
const list = document.querySelector('#list');

addBtn.addEventListener('click', (e) => {

    if (input.value === '') {
        alert('write something here to create a task!')
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }

    input.value = '';
    savaData()

})

list.addEventListener('click', (e) => {
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        savaData()
    }
})

function savaData(){
    localStorage.setItem('data' , list.innerHTML)
}

function showData(){
    list.innerHTML =  localStorage.getItem('data');

}

showData()

const clearBtn = document.querySelector('#clearBtn')
clearBtn.addEventListener('click' , (e)=>{
    list.innerHTML = '';
    localStorage.clear();
})