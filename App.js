import React, { Component } from 'react';
import { View, WebView, StatusBar } from 'react-native';

export default class App extends Component {
    render() {

        var webViewCode = `
<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script type="text/javascript" src="https://static.codehs.com/gulp/90383397a2266c189a7fe6dc323191532ef1542a/chs-js-lib/chs.js"></script>

<style>
    body, html {
        margin: 0;
        padding: 0;
    }
    canvas {
        margin: 0px;
        padding: 0px;
        display: inline-block;
        vertical-align: top;
    }
    #btn-container {
        text-align: center;
        padding-top: 10px;
    }
    #btn-play {
        background-color: #8cc63e;
    }
    #btn-stop {
        background-color: #de5844;
    }
    .glyphicon {
        margin-top: -3px;
        color: #FFFFFF;
    }
</style>
</head>

<body>
    <div id="canvas-container" style="margin: 0 auto; ">
        <canvas
        id="game"
        width="400"
        height="480"
        class="codehs-editor-canvas"
        style="width: 100%; height: 100%; margin: 0 auto;"
        ></canvas>
    </div>
    <div id="console"></div>
    <div id="btn-container">
        <button class="btn btn-main btn-lg" id="btn-play" onclick='stopProgram(); runProgram();'><span class="glyphicon glyphicon-play" aria-hidden="true"></span></button>
        <button class="btn btn-main btn-lg" id="btn-stop" onclick='stopProgram();'><span class="glyphicon glyphicon-stop" aria-hidden="true"></span></button>
    </div>

<script>
    var console = {};
    console.log = function(msg){
        $("#console").html($("#console").html() + "     " + msg);
    };

    var runProgram = function() {
        //factors the scores are multiplied by
var multiple_choice_multiplication_factor = 1.2272;
var essay_score_factor = 3.0556;

//stores the final scores as global variables
var mc_score;
var essay_score;
var total;

//Commands
function start()
{
    loading();
    multipleChoiceScore();
    essayScore();
    get_ap_score();

}

function loading()
{
    println("Hello My name is Jerremy, I am going to help you figure out what you got on your ap!  :)");
    println("Loading Coolness....."); 
    println("and other stuff....");
       
    
}

function multipleChoiceScore()
{
    //Loop and a half that keeps asking how many questions there are untill the person inputs a correct amount
    while(true)
    {
        var num_mc_questions = readInt("How many multiple choice questions are there? Range: 52-55:  ");
        
        //If number of multiple choice questions is correct
        if(num_mc_questions >= 52 && num_mc_questions <= 55)
        {
            while(true)
            {
               var mc_right = readInt("How many multiple choice questions out of " + num_mc_questions + " did you get right?:  "); 
                
                if(mc_right <= num_mc_questions && mc_right >=0)
                {
                    mc_score = (mc_right * multiple_choice_multiplication_factor); //sets the global variable as the weighted score    
                    break;
                }
                else
                {
                    println("That is not a correct amout right, how many out of " + num_mc_questions + " did you get right?:  ");    
                }
                
            }
            
            
            break; //break from the while loop 
    
        }
        else
        {
            println("  ");
            println("There can only be 52-55 multiple choice questions");
            num_mc_questions == 0;
            
        }
        
    }

}


function essayScore()
{
    
    //var continue_scores = 0;
    
    var essay_1_score;
    var essay_2_score;
    var essay_3_score;
   
    while(true)
    {
        var essay_1 = readInt("What score out of 9 did you get on the Synthesis Essay");
        
        if (essay_1 < 0 || essay_1 > 9)
        {
            println(" ");
            println("The scores can only be 0-9");
            
        }
        else
        {
            //continue_scores = 1;
            essay_1_score = (essay_1 * essay_score_factor); 
            break;    
            
        }
            
    }    
  
    while(true)
    {
        var essay_2 = readInt("What score out of 9 did you get on the Rhetorical analysis Essay");
        
        if (essay_1 < 0 || essay_1 > 9)
        {
            println(" ");
            println("The scores can only be 0-9");
            
        }
        else
        {
           
            essay_2_score = (essay_2 * essay_score_factor);
            break;    
            
        }
    }    
   
    while(true)
    {
        //if(continue_scores == 1)
        //{
            var essay_3 = readInt("What score out of 9 did you get on the Argument Essay");
            
            if (essay_1 < 0 || essay_1 > 9)
            {
                println(" ");
                println("The scores can only be 0-9");
                //essay_3 = 0;
                
            }
            else
            {
                essay_3_score = (essay_3 * essay_score_factor);
                
                essay_score = (essay_1_score + essay_2_score +  essay_3_score);
                
                break;    
                
            }
            
        //}    
            
    }
}

function get_ap_score()
{
    total = (mc_score + essay_score);  
    
    println(total);
    
    if(total <= 151 && total >= 115)
    {
        println("5");
        display_score("5");
    }
    else if (total <= 114 && total >= 100)
    {
        println("4");
        display_score("4");
    }
    else if (total <= 99 && total >= 82)
    {
        println("3");
        display_score("3");
    }
    else if (total <= 81 && total >= 58)
    {
        println("2");
        display_score("2");
    }
    else if (total <= 57 && total >= 0)
    {
        println("1");
        display_score("1");
    }
    else
    {
        println("error");
        
    }
}

function display_score(num)
{
    var txt = new Text(num, "150pt Arial");
    txt.setPosition((getWidth()/2 - 50), (getHeight()/2+50));
    txt.setColor(Color.blue);
    add(txt);
    
    
}




        if (typeof start === 'function') {
            start();
        }

        // Overrides setSize() if called from the user's code. Needed because
        // we have to change the canvas size and attributes to reflect the
        // user's desired program size. Calling setSize() from user code only
        // has an effect if Fit to Full Screen is Off. If Fit to Full Screen is
        // On, then setSize() does nothing.
        function setSize(width, height) {
            if (!true) {
                // Call original graphics setSize()
                window.__graphics__.setSize(width, height);

                // Scale to screen width but keep aspect ratio of program
                // Subtract 2 to allow for border
                var canvasWidth = window.innerWidth - 2;
                var canvasHeight = canvasWidth * getHeight() / getWidth();

                // Make canvas reflect desired size set
                adjustMarginTop(canvasHeight);
                setCanvasContainerSize(canvasWidth, canvasHeight);
                setCanvasAttributes(canvasWidth, canvasHeight);
            }
        }
    };

    var stopProgram = function() {
        removeAll();
        window.__graphics__.fullReset();
    }

    window.onload = function() {
        if (!false) {
            $('#btn-container').remove();
        }

        var canvasWidth;
        var canvasHeight;
        if (true) {
            // Get device window width and set program size to those dimensions
            setSize(window.innerWidth, window.innerHeight);
            canvasWidth = getWidth();
            canvasHeight = getHeight();

            if (false) {
                // Make room for buttons if being shown
                $('#btn-container').css('padding', '5px 0');
                canvasHeight -= $('#btn-container').outerHeight();
            }

            setCanvasAttributes(canvasWidth, canvasHeight);
        } else {
            // Scale to screen width but keep aspect ratio of program
            // Subtract 2 to allow for border
            canvasWidth = window.innerWidth - 2;
            canvasHeight = canvasWidth * getHeight() / getWidth();

            // Light border around canvas if not full screen
            $('#canvas-container').css('border', '1px solid #beccd4');

            adjustMarginTop(canvasHeight);
        }

        setCanvasContainerSize(canvasWidth, canvasHeight);

        if (true) {
            runProgram();
        }
    };

    // Set the canvas container width and height.
    function setCanvasContainerSize(width, height) {
        $('#canvas-container').width(width);
        $('#canvas-container').height(height);
    }

    // Set the width and height attributes of the canvas. Allows
    // getTouchCoordinates to sense x and y correctly.
    function setCanvasAttributes(canvasWidth, canvasHeight) {
        $('#game').attr('width', canvasWidth);
        $('#game').attr('height', canvasHeight);
    }

    // Assumes the Fit to Full Screen setting is Off. Adjusts the top margin
    // depending on the Show Play/Stop Buttons setting.
    function adjustMarginTop(canvasHeight) {
        var marginTop = (window.innerHeight - canvasHeight)/2;
        if (false) {
            marginTop -= $('#btn-container').height()/3;
        }
        $('#canvas-container').css('margin-top', marginTop);
    }
</script>
</body>
</html>
`;
        return (
            <View style={{ flex: 1 }}>
                <StatusBar hidden />
                <WebView
                    source={{html: webViewCode, baseUrl: "/"}}
                    javaScriptEnabled={true}
                    style={{ flex: 1 }}
                    scrollEnabled={false}
                    bounces={false}
                    scalesPageToFit={false}
                ></WebView>
            </View>
        );
    }
}
