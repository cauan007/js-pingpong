// variáveis bolinha 
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2;
let velocidadex = 6;
let velocidadey = 6;
let meusPontos=0;
let pontosOponente=0;
//variáveis minha raquete 
let xRaquete = 5;
let yRaquete = 125;
let comprimentoRaq = 10;
let alturaRaq = 100;
let colide = false;
//RaqueteOponetnte 
let xRaqueteOponente= 585;
let yRaqueteOponente= 125;
let velocidadeOponentey;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle(xBolinha, yBolinha, diametro);
  xBolinha = xBolinha + velocidadex;
  yBolinha = yBolinha + velocidadey;
  if (xBolinha + raio > width || xBolinha - raio < 0)
    velocidadex = velocidadex * -1;
  
  if (yBolinha + raio > height || yBolinha - raio < 0)
    velocidadey = velocidadey * -1;
  rect (xRaquete,yRaquete,comprimentoRaq,alturaRaq)
  if (keyIsDown(UP_ARROW)) {
      yRaquete = yRaquete - 10;}
  rect(xRaqueteOponente,yRaqueteOponente, comprimentoRaq,alturaRaq)
  velocidadeOponentey = yBolinha -yRaqueteOponente -alturaRaq/2+62
  yRaqueteOponente = yRaqueteOponente+ velocidadeOponentey
}
      
