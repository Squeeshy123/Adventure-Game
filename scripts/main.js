window.onload = init;

// Classes: PascalCase
// Everything else: snake_case

class Scene {
    constructor(option_sets, set_index) {

    }
    generate_scene
    next_scene(){
        set_index+=1
        clear_options()
        create_option_set(option_sets[set_index])
    }
    set_scene_index(new_index) {
        set_index=new_index
        clear_options()
        create_option_set(option_sets[set_index])
    }
}

class Minigame {
}

class RandomChanceMinigame extends Minigame {
    constructor(percent_chance, win_phrase, lose_phrase) {
        if (percent_chance <= Math.random() * 100){ // if we win
            print_line_to_log(win_phrase)
        } else {
            print_line_to_log(lose_phrase)
        }
    }
}

var options_box 
var text_box
var current_number

var options = ['wake up','','']

function init(){
    options_box = document.getElementById("options_box")
    text_box = document.getElementById("user_input")
    adventure_log = document.getElementById("adventure_log")
    current_number = 1
}


function submit_clicked() {
    var c = create_option(text_box.value)
    c.addEventListener("click", function(){clear_options()})
    //choose_event()
    var r = new RandomChanceMinigame(50, "YOU WIN!", "YOU'RE A LOSER!")

}

function create_option(button_text){
    var new_option = document.createElement("button")
    options_box.appendChild(new_option)
    new_option.innerText = button_text
    return new_option
<<<<<<< HEAD
}

function create_option_set(options_texts) {
    clear_options()
    options_texts.forEach(element => {
        create_option(element);
    });
=======
>>>>>>> 4d7dd9af0310e2dbfe957ec1c303041be026c520
}

function clear_options(){
    options_box.innerHTML = ''
}

function choose_event() {
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
