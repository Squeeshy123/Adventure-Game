window.onload = init;

varoptions_box 
var text_box

function init(){
    options_box = document.getElementById("options_box")
    text_box = document.getElementById("user_input")
}


function submit_clicked() {
    create_option(text_box.value)
}

function create_option(button_text){
    var new_option = document.createElement("button")
    options_box.appendChild(new_option)
    new_option.innerText = button_text
}

function clear_options(){
    
}

// clear optionoptions_box
// log messages
// text box
