// *** Fitt's Law Test
// *** (Jorge Garza - UCSD Spring 2017, CSE 216)

var app = new PIXI.Application(1000, 1000, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

// Focus this iframe
focus();

// OutOfFocus event Listener 
addEventListener('blur', onOutOfFocus);

// Focus event Listener
addEventListener('focus', onFocus);

// Keydown event Listener
addEventListener('keydown', onKeyDown);


// *** GLOBAL SCENE OBJECTS ***

// Text Style
var style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fill: '#ffffff', // gradient
    stroke: '#000000',
    strokeThickness: 3,
    wordWrap: true,
    wordWrapWidth: 900
});

// Draw cursorHomes rectangles and style it
var cursorHomeGreen = new PIXI.Graphics();
cursorHomeGreen = drawCursorHome(cursorHomeGreen, 0x2ECC71, false); // Green
var cursorHomeRed = new PIXI.Graphics();
cursorHomeRed = drawCursorHome(cursorHomeRed, 0xE74C3C, true); // Red

// Add Homing Time (HT) Text
var homingTimeText = new PIXI.Text('Homing Times', style);
homingTimeText.x = 100;
homingTimeText.y = 700;

// Add Positioning Time (PT) Text
var positioningTimeText = new PIXI.Text('Positioning Times', style);
positioningTimeText.x = 600;
positioningTimeText.y = 700;

// Add HT Timer One Text
var htTimerTextOne = new PIXI.Text('00 sec 000 milisec', style);
htTimerTextOne.x = 100;
htTimerTextOne.y = 800;

// Add PT Timer One Text
var ptTimerTextOne = new PIXI.Text('00 sec 000 milisec', style);
ptTimerTextOne.x = 600;
ptTimerTextOne.y = 800;

// Add HT Timer Two Text
var htTimerTextTwo = new PIXI.Text('00 sec 000 milisec', style);
htTimerTextTwo.x = 100;
htTimerTextTwo.y = 850;

// Add PT Timer Two Text
var ptTimerTextTwo = new PIXI.Text('00 sec 000 milisec', style);
ptTimerTextTwo.x = 600;
ptTimerTextTwo.y = 850;

// Add HT Timer Three Text
var htTimerTextThree = new PIXI.Text('00 sec 000 milisec', style);
htTimerTextThree.x = 100;
htTimerTextThree.y = 900;

// Add PT Timer Three Text
var ptTimerTextThree = new PIXI.Text('00 sec 000 milisec', style);
ptTimerTextThree.x = 600;
ptTimerTextThree.y = 900;

// *** CREATE SCENE ONE ***

// Scene One Container
var sceneOne = new PIXI.Container();

// Add Title One Text
var titleTextOne = new PIXI.Text('TEST 1', style);
titleTextOne.x = 440;
titleTextOne.y = 90;
sceneOne.addChild(titleTextOne);

// BLUR RECTANGLE for focus/OutOfFocus
var blurRect = new PIXI.Graphics();
blurRect.beginFill(0x17202A, 0.5);
blurRect.drawRect(0, 0, 1000, 1000); // (x,y, width, height)

// Draw targerOne rectangle and style it
var targetOne = new PIXI.Graphics();
targetOne.lineStyle(1, 0x2ECC71, 1); // Green Rectangel Targer
targetOne.beginFill(0x2ECC71, 1);
targetOne.drawRect(840, 400, 20, 20); // (x,y, width, height)
targetOne.interactive = true;
targetOne.buttonMode = true;
targetOne.hitArea = new PIXI.Rectangle(840, 400, 20, 20);
targetOne
        // Mouse & touch events
        .on('pointerup', onButtonTargetOneUp)
sceneOne.addChild(targetOne);


// *** CREATE SCENE TWO ***

// Scene Two Container
var sceneTwo = new PIXI.Container();

// Add Title Two Text
var titeTextTwo = new PIXI.Text('TEST 2', style);
titeTextTwo.x = 440;
titeTextTwo.y = 90;
sceneTwo.addChild(titeTextTwo);


// Draw targetTwo rectangle and style it
var targetTwo = new PIXI.Graphics();
targetTwo.lineStyle(1, 0x2ECC71, 1); // Red #E74C3C  
targetTwo.beginFill(0x2ECC71, 1);
targetTwo.drawRect(750, 250, 200, 300); // (x,y, width, height)
targetTwo.interactive = true;
targetTwo.buttonMode = true;
targetTwo.hitArea = new PIXI.Rectangle(750, 250, 200, 300);
targetTwo
        // Mouse & touch events
        .on('pointerup', onButtonTargetTwoUp)
sceneTwo.addChild(targetTwo);

// *** CREATE SCENE THREE ***

// Scene Three Container
var sceneThree = new PIXI.Container();

// Add Title Three Text
var titeTextThree = new PIXI.Text('TEST 3', style);
titeTextThree.x = 440;
titeTextThree.y = 90;
sceneThree.addChild(titeTextThree);


// Draw targetThree rectangle and style it
var targetThree = new PIXI.Graphics();
targetThree.lineStyle(1, 0x2ECC71, 1); // Red #E74C3C  
targetThree.beginFill(0x2ECC71, 1);
targetThree.drawRect(400, 420, 20, 20); // (x,y, width, height)
targetThree.interactive = true;
targetThree.buttonMode = true;
targetThree.hitArea = new PIXI.Rectangle(400, 420, 20, 20);
targetThree
        // Mouse & touch events
        .on('pointerup', onButtonTargetThreeUp)
sceneThree.addChild(targetThree);

// *** CREATE SCENE FOURTH ***

// Scene Two Container
var sceneFourth = new PIXI.Container();

// Add Title Three Fourth
var titeTextFourth = new PIXI.Text('DONE', style);
titeTextFourth.x = 440;
titeTextFourth.y = 90;
sceneFourth.addChild(titeTextFourth);

// create a new Sprite from an image path
var bunny = PIXI.Sprite.fromImage('required/assets/basics/bunny.png')
bunny.anchor.set(0.5);
bunny.x = app.renderer.width / 2;
bunny.y = app.renderer.height / 2;
bunny.scale.x *= 3;
bunny.scale.y *= 3;
bunny.interactive = true;
bunny.buttonMode = true;
bunny.on('pointerdown', onBunnyClick);
sceneFourth.addChild(bunny);


// *** SHOW FIRST SENCE ***
var currentStage = 1;
app.stage.addChild(homingTimeText);
app.stage.addChild(positioningTimeText);
app.stage.addChild(htTimerTextOne);
app.stage.addChild(htTimerTextTwo);
app.stage.addChild(htTimerTextThree);
app.stage.addChild(ptTimerTextOne);
app.stage.addChild(ptTimerTextTwo);
app.stage.addChild(ptTimerTextThree);
app.stage.addChild(cursorHomeRed);
app.stage.addChild(sceneOne);

  

// *** FUNCTIONS *** //
var homingStartTime;
var homingIntervalID;
var positioningStartTime;
var positioningIntervalID;
var flagFiringPT     = false;
var flagCursorOnHome = false;
var flagSpaceKeyDown = false;

function drawCursorHome(pixiGraph, color, NoCursorOver) {
    
    pixiGraph.lineStyle(1, color, 1);
    pixiGraph.beginFill(color, 1);
    pixiGraph.drawRect(50, 400, 50, 50); // (x,y, width, height)
    pixiGraph.interactive = true;
    pixiGraph.buttonMode = true;
    pixiGraph.hitArea = new PIXI.Rectangle(50, 400, 50, 50);
    
    // This is totally a lazy hack
    if (NoCursorOver == true) {
        pixiGraph.on('pointerover', onButtonHomeOver);
    } else {
        pixiGraph.on('pointerout', onButtonHomeOut);  
    }
    
    return pixiGraph;
}


// Positioning Time Clock
function positioningTimeClock() {
    var elapsedTime = new Date();
    var t = Date.parse(elapsedTime) - Date.parse(positioningStartTime);
    var milliseconds = elapsedTime.getMilliseconds();
    var seconds = Math.floor( (t/1000) % 60 );
    //var minutes = Math.floor( (t/1000/60) % 60 );
    if (currentStage == 1) {
        ptTimerTextOne.text = "1:  "+seconds+" sec "+milliseconds+" milisec";
    } else if (currentStage == 2) {
        ptTimerTextTwo.text = "2:  "+seconds+" sec "+milliseconds+" milisec";
    } else {
        ptTimerTextThree.text = "3:  "+seconds+" sec "+milliseconds+" milisec";
    }
}

// Homing Time Clock
function homingTimeClock() {
    var elapsedTime = new Date();
    var t = Date.parse(elapsedTime) - Date.parse(homingStartTime);
    var milliseconds = elapsedTime.getMilliseconds();
    var seconds = Math.floor( (t/1000) % 60 );
    //var minutes = Math.floor( (t/1000/60) % 60 );
    if (currentStage == 1) {
        htTimerTextOne.text = "1:  "+seconds+" sec "+milliseconds+" milisec";
    } else if (currentStage == 2) {
        htTimerTextTwo.text = "2:  "+seconds+" sec "+milliseconds+" milisec";
    } else {
        htTimerTextThree.text = "3:  "+seconds+" sec "+milliseconds+" milisec";
    }
}


function onButtonHomeOver() {
    if (flagFiringPT == false) {
        app.stage.removeChild(cursorHomeRed);
        app.stage.addChild(cursorHomeGreen);
    }
    flagCursorOnHome = true;
}

function onButtonHomeOut() {

    // If keySpace true and cursor out Start Timer
    if (flagSpaceKeyDown == true && currentStage != 4 
        && flagFiringPT == false) {
        
        if(homingIntervalID) {
            clearInterval(homingIntervalID);
        }
        // FIRE Positioning Timer Clock
        flagFiringPT = true;
        positioningStartTime = new Date();
        positioningTimeClock();
        positioningIntervalID = setInterval(positioningTimeClock, 20);
        
    } else {
        if (flagFiringPT == false) {
            app.stage.removeChild(cursorHomeGreen);
            app.stage.addChild(cursorHomeRed);
        }
    }
    
    flagCursorOnHome = false;
}

function onButtonTargetOneUp() {
    flagSpaceKeyDown =  false;
    flagFiringPT = false;
    onButtonHomeOut();
    clearInterval(positioningIntervalID);
    app.stage.removeChild(sceneOne);
    app.stage.addChild(sceneTwo);
    currentStage = 2;
}

function onButtonTargetTwoUp() {
    flagSpaceKeyDown =  false;
    flagFiringPT = false;
    onButtonHomeOut();
    clearInterval(positioningIntervalID);
    app.stage.removeChild(sceneTwo);
    app.stage.addChild(sceneThree);
    currentStage = 3;
}

function onButtonTargetThreeUp() {
    flagSpaceKeyDown =  false;
    flagFiringPT = false;
    onButtonHomeOut();
    clearInterval(positioningIntervalID);
    currentStage = 4;
    app.stage.removeChild(sceneThree);
    app.stage.removeChild(cursorHomeGreen);
    app.stage.removeChild(cursorHomeRed);
    app.stage.addChild(sceneFourth);
}

function onKeyDown(key) {
    // Space Key is 32
    if (key.keyCode === 32) {
        flagSpaceKeyDown =  true;
        if (flagCursorOnHome == true && currentStage != 4) {
            // FIRE Homing Timer Clock
            homingStartTime = new Date();
            homingTimeClock();
            homingIntervalID = setInterval(homingTimeClock, 20);
        }
    }
};

// Easter EGG
function onBunnyClick() {
    // Listen for animate update for bunny
    app.ticker.add(function(delta) {
        // delta is 1 if running at 100% performance
        bunny.rotation += 0.05 * delta;
    });
}


function onOutOfFocus() {
    app.stage.addChild(blurRect);
};

function onFocus() {
    app.stage.removeChild(blurRect);
};


