var ball,database,position;

function setup(){
    database=firebase.database()
    createCanvas(500,500);
    ball = createSprite(0,0,10,10);
    ball.shapeColor = "red";
    var locOfChild=database.ref("ball/position")
    locOfChild.on("value",readop,showError)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("ball/position").set({
        x:ball.x+x,
        y:ball.y+y
    })
    
}

function readop(data){
    position=data.val()
    ball.x=position.x
    ball.y=position.y

    
}
function showError(){
    console.log("error")

}