window.onload = init;

var box 
var text_box

function init(){
    box = document.getElementById("options_box")
    text_box = document.getElementById("user_input")
}


function submit_clicked() {
    create_option(text_box.value)
}

function create_option(button_text){
    var new_option = document.createElement("button")
    box.appendChild(new_option)
    new_option.innerText = button_text
}

