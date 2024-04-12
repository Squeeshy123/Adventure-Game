window.onload = init;

// Classes: PascalCase
// Everything else: snake_case

class Scene {
    constructor(next_scene) {

    }
    start_scene(){

    }
    /*next_option(){
        set_index+=1
        clear_options()
        create_option_set(option_sets[set_index])
    }
    set_scene_index(new_index) {
        set_index=new_index
        clear_options()
        create_option_set(option_sets[set_index])
    }

    recieve_input(user_input) {
        
    }*/
}
class MorningScene extends Scene {
    constructor(next_scene){
        super(next_scene)
    }
}
class BedScene extends Scene {
    constructor() {
        super(next_scene)
    }
    start_scene(){
        print_line_to_log("You wake up in your bed. Try to get up.")
        var gu_button = create_option("Try to get up") // get up button
        var r
        gu_button.addEventListener("click", function()
            {
                r = new RandomChanceMinigame(50, 
                "You successfully get out of bed!", 
                "You try to get out of bed, but you fall back asleep.")
                if (r.passed) {
                    switch_scenes("MorningScene")
                } else{
                    switch_scenes("BedScene")
                }
                
            }
        )
    }
}

class Minigame {
}

class RandomChanceMinigame extends Minigame {
    passed;
    constructor(percent_chance, win_phrase, lose_phrase) {
        super()
        this.passed = false
        var chance = Math.random() * 100
        if (percent_chance <= chance) { // if we win
            print_line_to_log(win_phrase)
            this.passed = true
        } else {
            print_line_to_log(lose_phrase)
        }
    }
    get_passed(){
        return this.passed
    }
}

class TimeCounter extends Minigame {
    constructor(){

    }
}


var options_box 
var text_box
var current_number


var options = ['wake up','','']


var bed_scene = "BedScene"

var current_scene_string = bed_scene
var current_scene_obj 

var next_scene = "MorningScene"

function load_current_scene() {
    clear_options()
    console.log("new " + current_scene_string + "()")
    return eval("new " + current_scene_string + "()")
}

function switch_scenes(new_scene){
    current_scene_string = new_scene
    current_scene_obj = load_current_scene()
    current_scene_obj.start_scene()
}

function init(){
    options_box = document.getElementById("options_box")
    text_box = document.getElementById("user_input")
    adventure_log = document.getElementById("adventure_log")
    current_number = 1

    switch_scenes("BedScene")
    
}


function submit_clicked() {
    var c = create_option(text_box.value)
    c.addEventListener("click", function(){clear_options()})
    //choose_event()
    
}

function create_option(button_text){
    var new_option = document.createElement("button")
    options_box.appendChild(new_option)
    new_option.innerText = button_text
    return new_option
}

function create_option_set(options_texts) {
    clear_options()
    options_texts.forEach(element => {
        create_option(element);
    });
    return new_option
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

// clear options_box
// log messages
// text box
