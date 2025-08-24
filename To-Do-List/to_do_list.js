function createlist() {
    let text = document.getElementById("takeinput").value;
    let new_div = document.createElement('div');
    new_div.textContent = text
    let button = document.createElement('button')
    new_div.append(button); 
    let list = document.createElement('li');
    list.appendChild(new_div);
     document.getElementById("list_of_task").appendChild(list);
    document.getElementById("takeinput").value = "";
    button.addEventListener("click",function() {
        new_div.parentElement.remove();
    });
}
function remove(btn) {
    btn.parentElement.parentElement.remove();
}
