window.onload = init;

class SignalManager {
    constructor(){

    }

}

class GameTimerManager {
    time;
    constructor(){

    }
    start_timer(){
        setInterval(() => {
            time_counter_text.innerText = eval(time_counter_text.innerText) + 1
        }, 1000);
    }
    add_seconds(increment) {
        time_counter_text.innerText = eval(time_counter_text.innerText) + increment
    }
}

// Classes: PascalCase
// Everything else: snake_case
// All classes should have a suffix of the class they extend

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
var already_showered = false
var already_brushed = false
var already_ate = false
class MorningScene extends Scene {
    constructor(next_scene){
        super(next_scene)
    }
    start_scene() {
        if(!already_showered && !already_ate && !already_brushed) {
        print_line_to_log("You have work soon, and you must get ready. You can leave now, or do some morning routines.")
        }
        if(already_ate && already_brushed && already_showered) {
            print_line_to_log("You finished everything you can do right now.")
            switch_scenes("garage")

        }
        if(already_showered == false) {
            var shower_button = create_option("Take a shower")
            shower_button.addEventListener("click", function() {
                print_line_to_log("You take a nice long (10 minute) shower, and slip some soap into your bag.")
                already_showered = true
                switch_scenes("MorningScene")

            })
        }
        if(already_ate == false) {
            var breakfast_button = create_option("Have some breakfast")
            breakfast_button.addEventListener("click", function() {
                print_line_to_log("You eat breakfast for 10 minutes, and grab a bagel for lunch.")
                already_ate = true
                switch_scenes("MorningScene")
            })
        }
        if(already_brushed == false) {
            var teeth_button = create_option("Brush your teeth")
            teeth_button.addEventListener("click", function(){
                print_line_to_log("You brush your teeth for the full 2 minutes. Your breath no longer smells.")
                already_brushed = true;
                switch_scenes("MorningScene")
            })
        }
        var end_button = create_option("Head out early")
        end_button.addEventListener("click", function(){
            print_line_to_log("Got here")
            switch_scenes("LeavingAppartmentScene")
        })  

        
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
                "You try to get out of bed, but you fall back asleep.", 
                function(){},
                function(){
                    game_timer_manager.add_seconds(5)
                })
                
                if (r.passed) {
                    switch_scenes("MorningScene")
                } else{
                    switch_scenes("BedScene")
                }
                
            }
        )
    }
}
class LeavingAppartmentScene extends Scene {
    constructor(next_scene){
        super(next_scene)
    }
    start_scene(){
        print_line_to_log("Alright, time to head to work!")
        print_line_to_log("Although, when you were partying last night, the last person to leave slammed the door too hard and knocked over your bookshelf, and it's blocking the door.")
        var try_to_move = create_option("Try to lift the bookshelf out of the way.")
        try_to_move.addEventListener("click", function(){
            var r = new RandomChanceMinigame(20, 
                "You successfully move the bookshelf just enough to get out the door!", 
                "You fail to move the bookshelf, and now your sciatica is acting up.", 
                function(){}, function(){}
            )
        })
        var out_the_window = create_option("Try to leave through the window.")
        var checked_window = false
        out_the_window.addEventListener("click", function(){
            if (!checked_window) {
                var catapult = create_option("Catapult")
                catapult.addEventListener("click", function(){

                })
                var window = create_option("Window")
                window.addEventListener("click", function(){
                    
                })
                checked_window = true
            }
        })
        var answer_mail = create_option("Look through your mail instead")
        answer_mail.addEventListener("click", function(){
            print_line_to_log("Just some overdue bills.")
        })
    }
}

class Minigame {
}

class RandomChanceMinigame extends Minigame {
    passed;
    constructor(percent_chance, win_phrase, lose_phrase, win_func, lose_func) {
        super()
        this.passed = false
        var chance = Math.random() * 100
        if (percent_chance <= chance) { // if we win
            print_line_to_log(win_phrase)
            win_func()
            this.passed = true
        } else {
            print_line_to_log(lose_phrase)
            lose_func()
        }
    }
    get_passed(){
        return this.passed
    }
}

class TimeCountdownMinigame extends Minigame {
    constructor(){

    }
}


var options_box 
var text_box
var current_number
var time_counter_text


var options = ['wake up','','']


var bed_scene = ""

var current_scene_string = bed_scene
var current_scene_obj 

var next_scene = "MorningScene"

var game_timer_manager = new GameTimerManager()

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

var started_game = false
function start_game(){
    if (!started_game){
        started_game = true
    }
    time_counter_text.innerText = '0'
    game_timer_manager.start_timer()
    print_line_to_log("clicked")
    switch_scenes("BedScene")
}

function init(){
    options_box = document.getElementById("options_box")
    text_box = document.getElementById("user_input")
    adventure_log = document.getElementById("adventure_log")
    time_counter_text = document.getElementById("timer_text")
    let start_button = document.getElementById("start_game")
    start_button.addEventListener("click", function(){start_game()})
    current_number = 1
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



function print_to_log(text) {
    adventure_log.innerHTML = text
}
function print_line_to_log(text) {
    adventure_log.innerHTML += text + "\n"
}

// clear options_box
// log messages
// text box
