let taustakuva;
let kissakuva;
let kissa;

let taustan_korkeus = 400;
let taustan_leveys = 800;
let lautan_leveys = 50;
let lautan_korkeus = 20;
let lautan_Y = taustan_korkeus - 50;

function preload() {
  taustakuva = loadImage('https://igno.cc/opetus/kuvat/tausta.png');
  kissakuva = loadImage('https://igno.cc/opetus/kuvat/cat.png');
}

function setup() {
  kissa = new Kissa();
  var canvas = createCanvas(taustan_leveys, taustan_korkeus);
  angleMode(DEGREES);
}

function draw() {
  image(taustakuva, 0, 0, taustan_leveys, taustan_korkeus);
  luo_lautta();
  kissa.liikuta();
}

function luo_lautta() {
  fill('rgba(0, 255, 0, 0.25)'); // Red Green Blue 0 - 255 hexadesimaali arvot = 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
  if (mouseX > taustan_leveys) {
    rect(taustan_leveys - 20, lautan_Y, lautan_leveys, lautan_korkeus, 30, 30, 10, 10);
  } else {
    rect(mouseX, lautan_Y, lautan_leveys, lautan_korkeus, 30, 30, 10, 10);
  }
}

class Kissa {
  constructor() {
    this.X = 30;
    this.Y = 200;
    this.korkeus = 50;
    this.leveys = 50;
    this.xNopeus = 2;
    this.yNopeus = -2;
    this.kulma = 0;
  }

  liikuta() {


//    this.X = this.X + this.xNopeus;
    this.X += this.xNopeus;
    this.yNopeus += 0.05;
    this.Y += this.yNopeus;
//    console.log(this.Y); ctrl + shift + i TAI f12 avaa konsolin chromessa.

    if (this.Y + this.korkeus > lautan_Y) {
      if (this.X > mouseX && this.X < mouseX + lautan_leveys) {
        this.yNopeus = -abs(this.yNopeus);
      }
    }

    this.kulma += 10;

    push();
    translate(this.X, this.Y);
    rotate(this.kulma);
    imageMode(CENTER);
    image(kissakuva, 0, 0, this.leveys, this.korkeus);
    pop();
  }
}
