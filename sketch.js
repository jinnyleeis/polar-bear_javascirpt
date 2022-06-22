const windows = []
let score = 0
let win = false
var timelimit=20;
var lose=false;


var index=0
var f1 = 20
var f2 = 50
var facts=["Turn off the lights and make sure the glacier doesn't sink","SAVE THE EARTH"]
var ww=600
var wh=800
var x=165
var y=100
var ws=10;//windowsize


var x1=0;

function preload(){

  music1=loadSound("dream.mp3")
   img1=loadImage("17.png")
  img2=loadImage("7.png")
  img3=loadImage("18.png")
}

function setup() {
    createCanvas(ww, wh)
  music1.play();
    frameRate(10)
    //first
  
 windows.push(new Window(10, 620));
   windows.push(new Window(30, 620));
    windows.push(new Window(70, 620)); 
  windows.push(new Window(70, 640));
    windows.push(new Window(10, 680));
    windows.push(new Window(30, 680));  
  windows.push(new Window(50, 680));
   windows.push(new Window(10, 700));
  
    windows.push(new Window(130, 530))
     windows.push(new Window(170, 530))
 windows.push(new Window(190, 530));
   windows.push(new Window(190, 550));
    windows.push(new Window(190, 570)); 
  windows.push(new Window(170,570));
    windows.push(new Window(130, 570));
    windows.push(new Window(170, 590));  
  windows.push(new Window(150, 590));
   windows.push(new Window(190, 610));//300+40
  
   windows.push(new Window(150, 650))
     windows.push(new Window(130, 650))
 windows.push(new Window(130, 670));
   windows.push(new Window(170, 670));
    windows.push(new Window(190,730)); 
  windows.push(new Window(150,730));
    windows.push(new Window(190, 710));
    windows.push(new Window(130, 750));  
  windows.push(new Window(150, 750));
   windows.push(new Window(190,750));//310
  
      windows.push(new Window(190+120, 650))
     windows.push(new Window(190+170, 650))
 windows.push(new Window(190+120, 670));
 
    windows.push(new Window(130+120, 670)); 
  windows.push(new Window(170+120,690));
  
    windows.push(new Window(150+190, 690));
  
    windows.push(new Window(190+120, 610));  
  windows.push(new Window(150+120, 650));
   windows.push(new Window(150+190, 650));//300+40
  
   windows.push(new Window(130+120, 650))
     windows.push(new Window(130+120, 670))
 windows.push(new Window(130+150, 670));//
  
   windows.push(new Window(150+190, 670));
    windows.push(new Window(150+190,710)); 
  
  windows.push(new Window(190+120,730));
    windows.push(new Window(150+120, 730));
    windows.push(new Window(190+170, 730)); 
  
  windows.push(new Window(150, 750));
   windows.push(new Window(190,750));//310
  
  
    windows.push(new Window(190+120,710));
    windows.push(new Window(170+120, 750));
    windows.push(new Window(130+120, 780)); 
  
  windows.push(new Window(190+120, 780));
   windows.push(new Window(190+170,780));//310
  
  
  
    

   windows.push(new Window(530, 710));

  
  

   windows.push(new Window(590,740));//310
  
    windows.push(new Window(590,760));
  
    windows.push(new Window(550, 690));
    windows.push(new Window(530, 690)); 
  
  windows.push(new Window(530, 730));
   windows.push(new Window(550,730));//310
  
  windows.push(new Window(420, 370+310));
   windows.push(new Window(440, 370+310));
    windows.push(new Window(480, 370+310)); 
  windows.push(new Window(500, 370+310));
    windows.push(new Window(500,  390+310));
  
    windows.push(new Window(460, 390+310));  
  windows.push(new Window(460,  410+310));
   windows.push(new Window(480, 410+310));
  
    windows.push(new Window(420, 410+310))
     windows.push(new Window(500, 430+310))
 windows.push(new Window(480, 430+310));
  
   windows.push(new Window(420, 430+310));
    windows.push(new Window(440, 470+310)); 
  windows.push(new Window(420,470+310));
  
  

}

function draw() {
  noStroke()
  rectMode(CENTER);
 
  y+=4;
    fill(0, 73, 100, 170);
  rect(width/2,600,ww,500)
  fill(109,195,199); 
    rect(width/2,200,ww,400)
  

  if(y<280){
    fill(255)
    ellipse(x+120,y+140,300,40);
  image(img1,x,y,240,170);}
  
  
  if(y>240)
    { lose=true;
     losepage()}

  
  if(score >= 5) {win = true
                  winpage()}

    if(!win) {
      
      if(int(timelimit-frameCount/10>0) && score<20)
         { 
           if (lose==false){gamepage()}
           
         }
      
        else{
          
      if (int(timelimit-frameCount/10<=0))
        {
         losepage()
    } 
          
  else {
    if(score >= 20) 
    {win = true
     winpage()
   }
  }
        }
       
}

  function gamepage(){
    
      rectMode(CORNER) 
  
fill(0, 80);
rect(x1, 600, 100, 200);
rect(x1+120, 510, 100, 300);
rect(x1+240, 580, 150, 300);



rect(410, 660, 200, 300);

    
    
      for(let window of windows) {
            
            window.checkwhentouched()
            window.show()
        }
      
        fill(25)
      textSize(20)
      text(score, 20, 440);
       fill(25)
      textSize(20)
     text("timer "+int(timelimit-frameCount/10), 20, 470);
    textStyle(BOLD);
  textSize(30);
    text(facts[1],f1,f2);
     textSize(15);
     text(facts[0],f1,f2+27);
    textSize(10);
    textStyle();
    text("Turn off 5 lights and make 5 points within the time limit",f1,f2+44);
    
  }
  
function losepage()
{
  
   background(205);
  image(img2,160,height/2-150,320,240);
  fill(0)
     textSize(30)
        textAlign(CENTER)
        text('Try again', width/2, height/2-200)

   textStyle(BOLD);
  textSize(10);
  textAlign(CENTER)
    text('Scientists say some populations have already reached their survival limits as the Arctic sea ice shrinks', width/2, height/2-150);
          textSize(10)
        textAlign(CENTER)
    textStyle(BOLD);
        text("Polar bears will be wiped out by the end of the century unless more is done to tackle climate change.", width/2,height/2-170)}
 
  
}
function winpage()
{
  
   background(255)
        textSize(30)
        textAlign(CENTER)
        text('You Win!', width/2, height/2-200)
   image(img3,160,height/2-150,100,240);
  fill(0)
      image(img3,160,height/2-180,250,420);
        textStyle(BOLD);
  textSize(20);
  textAlign(CENTER)
    text("saving the polar bears could be in our hands",width/2, height/2-130);
          textSize(36)
        textAlign(CENTER)
    textStyle(BOLD);
        text('We must not let them down', width/2,height/2-170)
  
}

class Window {
    constructor(x, y) {
        this.x = x+5
        this.y = y-5
    

        this.sl = 5
        this.touched = false
      this.alreadytouched=false
      this.mousepress=false
    }

   

    checkwhentouched() {
        const d = dist(mouseX, mouseY, this.x, this.y)
        if(d < this.sl) {
            this.touched = true
           
        }
    }

    show() {
      
      if (this.touched==true &&this.mousepress==true )
        { fill(200);
         rect(this.x, this.y, ws,ws)
         

        }
      
        else {
          fill(244,239,170);
              rect(this.x, this.y, ws,ws)
             }

      if(this.touched==true && this.alreadytouched==false && mouseIsPressed==true)
        {
          score+=1;
         this.alreadytouched=true
          this.mousepress=true
          y-=score*25
        }
  
      
}
     
    

}