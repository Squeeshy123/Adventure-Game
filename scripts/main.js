window.onload = init;

var options_box 
var text_box
var current_number

function init(){
    options_box = document.getElementById("options_box")
    text_box = document.getElementById("user_input")
    adventure_log = document.getElementById("adventure_log")
    current_number = 1
}


function submit_clicked() {
    create_option(text_box.value)
    chooseEvent()
}

function create_option(button_text){
    var new_option = document.createElement("button")
    options_box.appendChild(new_option)
    new_option.innerText = button_text
    return new_option
}

function clear_options(){
    
}
function chooseEvent() {
    var line
    switch(current_number)
    {
        case 1:
            line = "You wake up in your room"
            current_number = 2
            break;
        case 2:
            line = "You exit your room"
            break;
        
    }
    print_line_to_log(line)
    if(current_number == 2) {
        var button1 = create_option("Shower")
        button1.addEventListener("click", function(){ 
            line = "You take a nice long (10 minute) shower, and slip some of the soap into your bag."
            print_line_to_log(line)
            button1.remove
        })
    }


    
}
function print_to_log(text) {
    adventure_log.innerHTML = text
}
function print_line_to_log(text) {
    adventure_log.innerHTML += text + "\n"
}

// clear optionoptions_box
// log messages
// text box
