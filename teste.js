// Menu e Setup \\
let menu, outros, menuM;

// Demais imagens \\
let prog, placa, mold, moldura, placa_vida, esquerda, direita, cima, canoa, madeira, serrote, martelo, tijolo, pa, ferro, colher, lixa, picareta;

// Personagens \\
let jose, ana, joao, maria, bgperson, vida_jose, vida_maria, vida_joao, vida_ana;

function preload(){ 
    
    // Menu e Setup \\
    menuM = loadSound('menu.ogg');
    menu = loadImage('menu2.png');
    outros = loadImage('outros.png');
    
    // Personagens \\  
    jose = loadImage('Select_1.png');
    maria = loadImage('Select_2.png');
    joao = loadImage('Select_3.png');
    ana = loadImage('Select_4.png');
    bgperson = loadImage('select_person.png');
    
    // Demais imagens \\
    prog = loadImage('progamador.jpg');
    placa = loadImage('placa.png');
    mold = loadImage('mold.png');
    moldura = loadImage('moldura.png');
    placa_vida = loadImage('placa_vida.png');
    esquerda = loadImage('esquerda.png');
    direita = loadImage('direita.png');
    cima = loadImage('cima.png');
    canoa = loadImage('canoa.jpg');
    madeira = loadImage('madeira.jfif');
    serrote = loadImage('serrote.jfif');
    martelo = loadImage('martelo.jfif');
    pa = loadImage('pa.jfif');
    lixa  = loadImage('lixa.jfif');
    picareta = loadImage('picareta.jfif');
    colher = loadImage('colher.jfif');
    ferro = loadImage('ferro.jpg');
    tijolo = loadImage('tijolo.jfif');
    
   
}
// Gravidade \\
var gravidade = 0.1;
var yMove = 250;
var yVelocidade = -1.0;

// Contadores \\
var Tela = 1;
var player = 0;


// Coordenadas \\
var Largura = 100;
var Altura = 25;
var xMenu = 0;
var yContinuar = 140
var yMenu1 = 178;
var yMenu2 = 213;
var yCredits = 248;
var xVoltar = 200;
var yVoltar = 368;
var xVoltar1 = 405
var yVoltar1 = 350;
var xMenuIn = 8;
var yMenuIn = 8;
var yPerson = 228;
var xJose = 62;
var xMaria = 158;
var xJoao = 258;
var xAna = 355;
var xMove = 50;
var xCanoa =  50;
var yCanoa = 100;
var xMadeira = 300;
var yMadeira = 50;
var yTijolo = 150;
var yFerro = 250;
var xSerrote = 100;
var ySerrote = 50;
var yPa = 150;
var yPicareta = 250;

function setup() {
  createCanvas(500, 400);
  menuM.loop();
    
}  
  

function draw() {
                    // Mostra a tela do Menu \\  
    if(Tela == 1){ 
        background(0);
        image(menu,0, 0);
        image(placa, 125, -30);
        textAlign(CENTER);
        textFont('Helvetica');
      
        fill('#D8E8F3');
        stroke('#AB723A');
        strokeWeight(5);
        textSize(20);
        textStyle(ITALIC);
        text('Construção \nDivertida', 250, 59);

    
                    // Menu Iniciar \\  
        if(mouseX > xMenu && mouseX < xMenu + width &&                 mouseY > yMenu1 -10 && mouseY < yMenu1 + 10){
      stroke('#BC813F');
      strokeWeight(2);    
      fill('#D7F2F1'); 
      rect(xMenu, yMenu1, width, 5, 5);
      
      if(mouseIsPressed){
          Tela = 2.2;
        }
     }
            textStyle(NORMAL);
            fill('#D8F2F3');
            stroke('#BC813F');
            strokeWeight(5);
            textSize(20);
            text('Iniciar', 250, 185);
    
                            
                    // Menu Instruções \\
        if(mouseX > xMenu && mouseX < xMenu + width && mouseY >         yMenu2-10 && mouseY < yMenu2 + 10){
          stroke('#BC813F');
          strokeWeight(2);    
          fill('#D7F2F1');  
          rect(xMenu, yMenu2, width, 5, 5);
              if(mouseIsPressed){
                  Tela = 4;
              }
      }
            fill('#D8F2F3');
            stroke('#BC813F');
            strokeWeight(5);
            textSize(20);
            text('Instruções', 250, 220);       
  
  
                    // Menu Créditos\\
        if(mouseX > xMenu && mouseX < xMenu + width && mouseY >         yCredits-10 && mouseY < yCredits + 10){
          stroke('#BC813F');
          strokeWeight(2);    
          fill('#D7F2F1'); 
          rect(xMenu, yCredits, width, 5, 5);
              if(mouseIsPressed){
                  Tela = 5;
              }
      }
            fill('#D8F2F3');
            stroke('#BC813F');
            strokeWeight(5);
            textSize(20);
            text('Créditos', 250, 255);       
    }  
  
  
                    // Mostra a tela de Seleção de personagem \\  
    else if (Tela == 2.2){
        background(0);
        image(bgperson, 0, 0); 
        image(jose, 50, 200);
        image(maria, 146, 200);
        image(joao, 242, 200);
        image(ana, 338, 200);
      
        
       
              //Selecionar Jose\\    
        if(mouseX > xJose && mouseX < xJose + 65 && mouseY > yPerson && mouseY < yPerson + 100){
            stroke('#49A9C5');
            strokeWeight(3);
            noFill();  
            rect(62, 178, 65, 30, 15);
            image(jose, 50, 198);
            if(mouseIsPressed){                
                player = 1;
                Tela = 2;
            }
        }
      
      
              //Selecionar Maria\\    
        if(mouseX > xMaria && mouseX < xMaria + 65 && mouseY > yPerson && mouseY < yPerson + 100){
            stroke('#D7A783');
            strokeWeight(3);
            noFill();  
            rect(158, 178, 70, 30, 15);
            image(maria, 146, 198);
            if(mouseIsPressed){
                player = 2;
                Tela = 2;
            }
        }
        
      
              //Selecionar Joao\\    
        if(mouseX > xJoao && mouseX < xJoao + 65 && mouseY > yPerson && mouseY < yPerson + 100){
            stroke('#D7CF81');
            strokeWeight(3);
            noFill();  
            rect(258, 178, 65, 30, 15);
            image(joao, 242, 198);
            if(mouseIsPressed){
                player = 3;
                Tela = 2;
            }
        }
      
      
              //Selecionar Ana\\    
        if(mouseX > xAna && mouseX < xAna + 65 && mouseY > yPerson && mouseY < yPerson + 100){
            stroke('#DC9792');
            strokeWeight(3);
            noFill();  
            rect(355, 178, 60, 30, 15);
            image(ana, 338, 198);
            if(mouseIsPressed){
                player = 4;
                Tela = 2;
            }
        }
      
        textFont('helvetica');
        stroke('#49A9C5');
        strokeWeight(2);
        fill('#2A6B7D');
        text('José', 94, 200);
        
        stroke('#D7A783');
        strokeWeight(2);
        fill('#B7713E');
        text('Maria', 194, 200);
        
        stroke('#D7CF81');
        strokeWeight(2);
        fill('#B5AA3D');
        text('João', 290, 200);
        
        stroke('#DC9792');
        strokeWeight(2);
        fill('#C14F47');
        text('Ana', 385, 200);
    }
 
  
                    // Mostra a tela do Game \\    
    else if (Tela == 2){   
        background(0);
        image(menu, 0, 0);
      
        rect(45, 95, 110, 110);  
      
        if(mouseX > xCanoa && mouseX < xCanoa + 100 && mouseY > yCanoa && mouseY < yCanoa + 100){
            stroke('#2FFA54');
            fill('#2FFA54');
            rect(45, 95, 110, 110);
          
            if(mouseIsPressed){
              Tela = 2.3;
            }  
        }
        
    
                    // Botão de Menu dentro do jogo \\
        if(mouseX > xMenuIn && mouseX < xMenuIn + 50 &&           mouseY > yMenuIn && mouseY < yMenuIn + 50){
            stroke('#BC813F');
            strokeWeight(2);    
            fill('#D7F2F1');   
            rect(xMenuIn, yMenuIn, 55, 25, 15);
            if(mouseIsPressed){
                Tela = 6;
            }
        }
        if(keyIsDown('27')){
            Tela = 6;
        }
            textSize(15);   
            fill('#D8F2F3');
            stroke('#BC813F');
            strokeWeight(3);
            text('Menu', 35, 25); 
      
      
        // José Selecionado \\
        if(player == 1){
            image(jose, 250, yMove);          
        }  
      
      
        // Maria Selecionada \\
        if(player == 2){
            image(maria, 250, yMove);
        }  
      
      
        // João Selecionado \\
        if(player == 3){
            image(joao, 250, yMove);
        }  
      
      
        // Ana Selecionada \\    
        if(player == 4){
            image(ana, 250, yMove); 
        }
        fill('#D8F2F3');
        stroke('#50381C');
        strokeWeight(2);
        rect(205, 180, 190, 85, 20);
        circle(245, 275, 10);
        circle(255, 285, 7.5);
        circle(265, 295, 5);
        strokeWeight(4)
        textSize(13);
        textStyle(BOLD);
        textAlign(CENTER);
        text('Bem vindo jogador! \n vamos construir algo juntos. \n Primeiro selecione algo \n que você queira construir',300, 200);
        
    
    image(canoa, 50, 100, 100, 100);
    textSize(15);
    textAlign(CENTER);
    text('Canoa', 100, 220);  
    }  
  

                    // Mostra a tela de Materias \\
    else if (Tela == 2.3){
        background(0);
        image(menu, 0, 0);
      
        // Botão de Menu dentro do jogo \\
        if(mouseX > xMenuIn && mouseX < xMenuIn + 50 &&           mouseY > yMenuIn && mouseY < yMenuIn + 50){
            stroke('#BC813F');
            strokeWeight(2);    
            fill('#D7F2F1');   
            rect(xMenuIn, yMenuIn, 55, 25, 15);
            if(mouseIsPressed){
                Tela = 6;
            }
        }
        if(keyIsDown('27')){
            Tela = 6;
        }
            textSize(15);   
            fill('#D8F2F3');
            stroke('#BC813F');
            strokeWeight(3);
            text('Menu', 35, 25); 
      
      
        // José Selecionado \\
        if(player == 1){
            image(jose, xMove, yMove);          
        }  
      
      
        // Maria Selecionada \\
        if(player == 2){
            image(maria, xMove, yMove);
        }  
      
      
        // João Selecionado \\
        if(player == 3){
            image(joao, xMove, yMove);
        }  
      
      
        // Ana Selecionada \\    
        if(player == 4){
            image(ana, xMove, yMove); 
        }    
      
        fill('#D8F2F3');
        stroke('#50381C');
        strokeWeight(2);
        rect(5, 180, 190, 85, 20);
        circle(155, 275, 10);
        circle(145, 285, 7.5);
        circle(135, 295, 5);
        strokeWeight(4)
        textSize(13);
        textStyle(BOLD);
        textAlign(CENTER);
        text('Ótima Escolha! \n vamos começar escolhendo \n o melhor material \n para isso.',100, 200);
                
        rect(295, 45, 85, 85); 
        rect(295, 145, 85, 85);
        rect(295, 245, 85, 85);
      
      
        rect(387, 80, 65, 30); 
        rect(387, 180, 65, 30); 
        rect(387, 280, 65, 30); 
        text('Madeira', 420, 100 );
        text('Tijolo', 420, 200 );
        text('Ferro', 420, 300 );  
      
        if (mouseX > xMadeira && mouseX < xMadeira + 75 && mouseY > yMadeira && mouseY < yMadeira +75){
            stroke('#2FFA54');
            fill('#2FFA54');
            rect(295, 45, 85, 85); 
            if(mouseIsPressed){
                Tela = 2.5;
            }  
        }
         if (mouseX > xMadeira && mouseX < xMadeira + 75 && mouseY > yTijolo && mouseY < yTijolo +75){
            stroke('#2FFA54');
            fill('#2FFA54');
            rect(295, 145, 85, 85); 
           if(mouseIsPressed){
               Tela = 2.4;
           }  
        }  
         if (mouseX > xMadeira && mouseX < xMadeira + 75 && mouseY > yFerro && mouseY < yFerro +75){
            stroke('#2FFA54');
            fill('#2FFA54');
            rect(295, 245, 85, 85); 
            if(mouseIsPressed){
                Tela = 2.4;
            }  
        }
       
        image(madeira, 300, 50, 75, 75);   
        image(tijolo, 300, 150, 75, 75);
        image(ferro, 300, 250, 75, 75);
      
      
    }
  
 
                    // Mostra a tela de resposta errada de materias\\
    else if (Tela == 2.4){
        background(0);
        image(menu, 0, 0);
      
        // José Selecionado \\
        if(player == 1){
            image(jose, xMove, yMove);          
        }  
      
      
        // Maria Selecionada \\
        if(player == 2){
            image(maria, xMove, yMove);
        }  
      
      
        // João Selecionado \\
        if(player == 3){
            image(joao, xMove, yMove);
        }  
      
      
        // Ana Selecionada \\    
        if(player == 4){
            image(ana, xMove, yMove); 
        }
        fill('#D8F2F3');
        stroke('#50381C');
        strokeWeight(2);
        rect(5, 180, 190, 85, 20);
        circle(155, 275, 10);
        circle(145, 285, 7.5);
        circle(135, 295, 5);
        strokeWeight(4)
        textSize(13);
        textStyle(BOLD);
        textAlign(CENTER);
        text('Ops! \n Acho que este não seja \n o melhor material \n para isso, tente outro!',100, 200);
      
        rect(295, 45, 85, 85); 
        rect(295, 145, 85, 85);
        rect(295, 245, 85, 85);
      
        rect(387, 80, 65, 30); 
        rect(387, 180, 65, 30); 
        rect(387, 280, 65, 30); 
        text('Madeira', 420, 100 );
        text('Tijolo', 420, 200 );
        text('Ferro', 420, 300 ); 
      
        if (mouseX > xMadeira && mouseX < xMadeira + 75 && mouseY > yMadeira && mouseY < yMadeira +75){
            stroke('#2FFA54');
            fill('#2FFA54');
            rect(295, 45, 85, 85); 
            if(mouseIsPressed){
                Tela = 2.5;
            }  
        }
         if (mouseX > xMadeira && mouseX < xMadeira + 75 && mouseY > yTijolo && mouseY < yTijolo +75){
            stroke('#2FFA54');
            fill('#2FFA54');
            rect(295, 145, 85, 85); 
           if(mouseIsPressed){
               Tela = 2.4;
           }  
        }  
         if (mouseX > xMadeira && mouseX < xMadeira + 75 && mouseY > yFerro && mouseY < yFerro +75){
            stroke('#2FFA54');
            fill('#2FFA54');
            rect(295, 245, 85, 85); 
            if(mouseIsPressed){
                Tela = 2.4;
            }  
        }
      
        image(madeira, 300, 50, 75, 75);   
        image(tijolo, 300, 150, 75, 75);
        image(ferro, 300, 250, 75, 75);
      
    }
  
  
                    // Mostra a tela de Ferramentas \\
    else if (Tela == 2.5){
        background(0);
        image(menu, 0, 0);
      
        // Botão de Menu dentro do jogo \\
        if(mouseX > xMenuIn && mouseX < xMenuIn + 50 &&           mouseY > yMenuIn && mouseY < yMenuIn + 50){
            stroke('#BC813F');
            strokeWeight(2);    
            fill('#D7F2F1');   
            rect(xMenuIn, yMenuIn, 55, 25, 15);
            if(mouseIsPressed){
                Tela = 6;
            }
        }
        if(keyIsDown('27')){
            Tela = 6;
        }
            textSize(15);   
            fill('#D8F2F3');
            stroke('#BC813F');
            strokeWeight(3);
            text('Menu', 35, 25); 
      
      
        // José Selecionado \\
        if(player == 1){
            image(jose, 250, yMove);          
        }  
      
      
        // Maria Selecionada \\
        if(player == 2){
            image(maria, 250, yMove);
        }  
      
      
        // João Selecionado \\
        if(player == 3){
            image(joao, 250, yMove);
        }  
      
      
        // Ana Selecionada \\    
        if(player == 4){
            image(ana, 250, yMove); 
        }
        fill('#D8F2F3');
        stroke('#50381C');
        strokeWeight(2);
        rect(205, 180, 190, 85, 20);
        circle(245, 275, 10);
        circle(255, 285, 7.5);
        circle(265, 295, 5);
        strokeWeight(4)
        textSize(13);
        textStyle(BOLD);
        textAlign(CENTER);
        text('Muite bem! \n Agora vamos escolher\n a melhor ferramenta\n para continuar',300, 200);
      
        rect(95, 45, 85, 85); 
        rect(95, 145, 85, 85);
        rect(95, 245, 85, 85);
        
        rect(23, 80, 65, 30); 
        rect(23, 180, 65, 30); 
        rect(23, 280, 65, 30);       
        text('Picareta', 55, 100 );
        text('Pá', 55, 200 );
        text('Serrote', 55, 300 );  
      
        if (mouseX > xSerrote && mouseX < xSerrote + 75 && mouseY > ySerrote && mouseY < ySerrote +75){
            stroke('#2FFA54');
            fill('#2FFA54');
            rect(95, 45, 85, 85); 
            if(mouseIsPressed){
                Tela = 2.6;
            }  
        }
         if (mouseX > xSerrote && mouseX < xSerrote + 75 && mouseY > yPa && mouseY < yPa +75){
            stroke('#2FFA54');
            fill('#2FFA54');
            rect(95, 145, 85, 85); 
           if(mouseIsPressed){
               Tela = 2.6;
           }  
        }  
         if (mouseX > xSerrote && mouseX < xSerrote + 75 && mouseY > yPicareta && mouseY < yPicareta +75){
            stroke('#2FFA54');
            fill('#2FFA54');
            rect(95, 245, 85, 85); 
            if(mouseIsPressed){
                Tela = 2.7;
            }  
        }
      
        image(picareta, 100, 50, 75, 75);   
        image(pa, 100, 150, 75, 75);
        image(serrote, 100, 250, 75, 75);
      
      
    } 
  
  
                    // Mostra a tela de resposta errada de ferramentas \\
    else if (Tela == 2.6){
        background(0);
        image(menu, 0, 0);
      
        // José Selecionado \\
        if(player == 1){
            image(jose, 250, yMove);          
        }  
      
      
        // Maria Selecionada \\
        if(player == 2){
            image(maria, 250, yMove);
        }  
      
      
        // João Selecionado \\
        if(player == 3){
            image(joao, 250, yMove);
        }  
      
      
        // Ana Selecionada \\    
        if(player == 4){
            image(ana, 250, yMove); 
        }
        fill('#D8F2F3');
        stroke('#50381C');
        strokeWeight(2);
        rect(205, 180, 190, 85, 20);
        circle(245, 275, 10);
        circle(255, 285, 7.5);
        circle(265, 295, 5);
        strokeWeight(4)
        textSize(13);
        textStyle(BOLD);
        textAlign(CENTER);
        text('Ops! \n Acho que este não seja \n o melhor material \n para isso, tente outro!',300, 200);
      
        rect(95, 45, 85, 85); 
        rect(95, 145, 85, 85);
        rect(95, 245, 85, 85);
      
        rect(23, 80, 65, 30); 
        rect(23, 180, 65, 30); 
        rect(23, 280, 65, 30);       
        text('Picareta', 55, 100 );
        text('Pá', 55, 200 );
        text('Serrote', 55, 300 );
      
        if (mouseX > xSerrote && mouseX < xSerrote + 75 && mouseY > ySerrote && mouseY < ySerrote +75){
            stroke('#2FFA54');
            fill('#2FFA54');
            rect(95, 45, 85, 85); 
            if(mouseIsPressed){
                Tela = 2.6;
            }  
        }
         if (mouseX > xSerrote && mouseX < xSerrote + 75 && mouseY > yPa && mouseY < yPa +75){
            stroke('#2FFA54');
            fill('#2FFA54');
            rect(95, 145, 85, 85); 
           if(mouseIsPressed){
               Tela = 2.6;
           }  
        }  
         if (mouseX > xSerrote && mouseX < xSerrote + 75 && mouseY > yPicareta && mouseY < yPicareta +75){
            stroke('#2FFA54');
            fill('#2FFA54');
            rect(95, 245, 85, 85); 
            if(mouseIsPressed){
                Tela = 2.7;
            }  
        }
      
        image(picareta, 100, 50, 75, 75);   
        image(pa, 100, 150, 75, 75);
        image(serrote, 100, 250, 75, 75);
      
      
    }
  
  
                     // Mostra a tela de Ferramentas 2 \\
    else if (Tela == 2.7){
        background(0);
        image(menu, 0, 0);
      
        // Botão de Menu dentro do jogo \\
        if(mouseX > xMenuIn && mouseX < xMenuIn + 50 &&           mouseY > yMenuIn && mouseY < yMenuIn + 50){
            stroke('#BC813F');
            strokeWeight(2);    
            fill('#D7F2F1');   
            rect(xMenuIn, yMenuIn, 55, 25, 15);
            if(mouseIsPressed){
                Tela = 6;
            }
        }
        if(keyIsDown('27')){
            Tela = 6;
        }
            textSize(15);   
            fill('#D8F2F3');
            stroke('#BC813F');
            strokeWeight(3);
            text('Menu', 35, 25); 
      
      
        // José Selecionado \\
        if(player == 1){
            image(jose, xMove, yMove);          
        }  
      
      
        // Maria Selecionada \\
        if(player == 2){
            image(maria, xMove, yMove);
        }  
      
      
        // João Selecionado \\
        if(player == 3){
            image(joao, xMove, yMove);
        }  
      
      
        // Ana Selecionada \\    
        if(player == 4){
            image(ana, xMove, yMove); 
        }
        fill('#D8F2F3');
        stroke('#50381C');
        strokeWeight(2);
        rect(5, 180, 190, 85, 20);
        circle(155, 275, 10);
        circle(145, 285, 7.5);
        circle(135, 295, 5);
        strokeWeight(4)
        textSize(13);
        textStyle(BOLD);
        textAlign(CENTER);
        text('Excelente! \n Agora para terminar, \n escolha a ultima ferramenta \n para isso.',100, 200);
 
        rect(295, 45, 85, 85); 
        rect(295, 145, 85, 85);
        rect(295, 245, 85, 85);
      
        rect(387, 80, 65, 30); 
        rect(387, 180, 65, 30); 
        rect(387, 280, 65, 30);
        text('Colher', 420, 100 );
        text('Martelo', 420, 200 );
        text('Lixa', 420, 300 );  
      
        if (mouseX > xMadeira && mouseX < xMadeira + 75 && mouseY > yMadeira && mouseY < yMadeira +75){
            stroke('#2FFA54');
            fill('#2FFA54');
            rect(295, 45, 85, 85); 
            if(mouseIsPressed){
                Tela = 2.8;
            }  
        }
         if (mouseX > xMadeira && mouseX < xMadeira + 75 && mouseY > yTijolo && mouseY < yTijolo +75){
            stroke('#2FFA54');
            fill('#2FFA54');
            rect(295, 145, 85, 85); 
           if(mouseIsPressed){
               Tela = 2.9;
           }  
        }  
         if (mouseX > xMadeira && mouseX < xMadeira + 75 && mouseY > yFerro && mouseY < yFerro +75){
            stroke('#2FFA54');
            fill('#2FFA54');
            rect(295, 245, 85, 85); 
            if(mouseIsPressed){
                Tela = 2.8;
            }  
        }
      
        image(colher, 300, 50, 75, 75);   
        image(martelo, 300, 150, 75, 75);
        image(lixa, 300, 250, 75, 75);
      
      
    }
  
  
                    // Mostra a tela de resposta errada de ferramentas 2 \\
    else if (Tela == 2.8){
        background(0);
        image(menu, 0, 0);
      
      
        // José Selecionado \\
        if(player == 1){
            image(jose, xMove, yMove);          
        }  
      
      
        // Maria Selecionada \\
        if(player == 2){
            image(maria, xMove, yMove);
        }  
      
      
        // João Selecionado \\
        if(player == 3){
            image(joao, xMove, yMove);
        }  
      
      
        // Ana Selecionada \\    
        if(player == 4){
            image(ana, xMove, yMove); 
        }
        fill('#D8F2F3');
        stroke('#50381C');
        strokeWeight(2);
        rect(5, 180, 190, 85, 20);
        circle(155, 275, 10);
        circle(145, 285, 7.5);
        circle(135, 295, 5);
        strokeWeight(4)
        textSize(13);
        textStyle(BOLD);
        textAlign(CENTER);
        text('Ops! \n Acho que este não seja \n o melhor material \n para isso, tente outro!',100, 200);
      
        rect(295, 45, 85, 85); 
        rect(295, 145, 85, 85);
        rect(295, 245, 85, 85);
      
        rect(387, 80, 65, 30); 
        rect(387, 180, 65, 30); 
        rect(387, 280, 65, 30);
        text('Colher', 420, 100 );
        text('Martelo', 420, 200 );
        text('Lixa', 420, 300 );
      
        if (mouseX > xMadeira && mouseX < xMadeira + 75 && mouseY > yMadeira && mouseY < yMadeira +75){
            stroke('#2FFA54');
            fill('#2FFA54');
            rect(295, 45, 85, 85); 
            if(mouseIsPressed){
                Tela = 2.8;
            }  
        }
         if (mouseX > xMadeira && mouseX < xMadeira + 75 && mouseY > yTijolo && mouseY < yTijolo +75){
            stroke('#2FFA54');
            fill('#2FFA54');
            rect(295, 145, 85, 85); 
           if(mouseIsPressed){
               Tela = 2.9;
           }  
        }  
         if (mouseX > xMadeira && mouseX < xMadeira + 75 && mouseY > yFerro && mouseY < yFerro +75){
            stroke('#2FFA54');
            fill('#2FFA54');
            rect(295, 245, 85, 85); 
            if(mouseIsPressed){
                Tela = 2.8;
            }  
        }
      
        image(colher, 300, 50, 75, 75);   
        image(martelo, 300, 150, 75, 75);
        image(lixa, 300, 250, 75, 75);
      
      
    }
  
  
                    // Mostra a tela final do jogo \\
    else if (Tela == 2.9){
        background(0);
        image(menu, 0, 0);
      
        // José Selecionado \\
        if(player == 1){
            image(jose, xMove, yMove);          
        }  
      
      
        // Maria Selecionada \\
        if(player == 2){
            image(maria, xMove, yMove);
        }  
      
      
        // João Selecionado \\
        if(player == 3){
            image(joao, xMove, yMove);
        }  
      
      
        // Ana Selecionada \\    
        if(player == 4){
            image(ana, xMove, yMove); 
        }  
          
        fill('#D8F2F3');
        stroke('#50381C');
        strokeWeight(2);
        rect(5, 180, 190, 85, 20);
        circle(155, 275, 10);
        circle(145, 285, 7.5);
        circle(135, 295, 5);
        strokeWeight(4)
        textSize(13);
        textStyle(BOLD);
        textAlign(CENTER);
        text('Parabéns! \n Você conseguiu construir \n a sua própria canoa.',100, 200); 
        textSize(25); 
        textStyle(BOLD);
        textAlign(CENTER);
        text("FIM DE JOGO", 250, 50);  
          
        image(canoa, 250, 150, 200,200); 
      
        if (mouseX > xVoltar && mouseX < xVoltar +100 && mouseY > yVoltar && mouseY < yVoltar +27){
          
            rect(xVoltar, yVoltar, 100, 27);
            if(mouseIsPressed){
               Tela = 1;
               }  
        }
        textSize(15); 
        textStyle(BOLD);
        textAlign(CENTER);
        text('Inicio', 250, 387)
      
      
    }
  
   
                    // Mostra a tela de Instruções \\
    else if(Tela == 4){
        background(0);
        image(outros, 0, 0);        
        fill(240);
        stroke('#3792A6');
        strokeWeight(5);
        textSize(17);
        textAlign(CENTER);
        text("Bem vindo Sr(a) Jogador(a)! \n O intuito deste mini jogo é demonstrar \n quais são as melhores escolhas na construção de um objeto. \nBaseado na descrição \n de um projeto sugerido no ColabEduc!", 250, 50);
        textSize(22);
        text("Como Jogar?", 250, 200);
        textSize(17);
        text("Utilizando apenas o click do mouse \n para selecionar a opção que você ache correta", 250, 300);
        
        
        if(mouseX > xVoltar1 && mouseX < xVoltar1 + 56 &&                 mouseY > yVoltar1 && mouseY < yVoltar1 + 30){
            stroke('#3792A6');
            strokeWeight(4);
            noFill();    
            rect(xVoltar1, yVoltar1, 56, 30, 15);
            if(mouseIsPressed){
                Tela = 1;
            }
        }
        if(keyIsDown('27')){
            Tela = 1;
        }
            textSize(15);   
            fill(240);
            stroke('#3792A6');
            strokeWeight(5);
            textSize(13);
            text('Voltar', 433, 370);
    }                     

  
                    // Mostra a tela de Créditos  
    else if(Tela == 5){
        background(0);
        image(menu, 0, 0);
        image(mold, 147, 95);
        image(prog, 185, 210, 137, 165);
        image(moldura, 165, 193, 165, 200);
        fill('#50381C');
        stroke('#C06F40');
        strokeWeight(3);
        textSize(20);
        textAlign(CENTER);
        text('CRÉDITOS', 250, 30);
        
        textSize(15);
        text('Projeto criado em 2021. Descrição retirada do "ColabEduc".', 250, 70)
     
        fill('#312511');
        stroke('#B67C3C');
        strokeWeight(3.4);
        textSize(17);
        textStyle(BOLD);
        text('Programador: \nJefté Dan', 250, 140);               
      
        if(mouseX > xVoltar1 && mouseX < xVoltar1 + 56 &&                 mouseY > yVoltar1 && mouseY < yVoltar1 + 30){
            stroke('#BC813F');
            strokeWeight(2);    
            fill('#D7F2F1');   
            rect(xVoltar1, yVoltar1, 56, 30, 15);
            if(mouseIsPressed){
                Tela = 1;
            }
            
        }
        if(keyIsDown('27')){
            Tela = 1;
        }   
            fill('#D8F2F3');
            stroke('#BC813F');
            strokeWeight(3);
            textSize(13);
            text('Voltar', 433, 370);
    
        
    }


                    // Mostra a tela de Menu em game \\
    else if(Tela == 6){
        background(0);
        image(menu,0, 0);
        textAlign(CENTER);

    
                    // Menu Iniciar dentro do game \\  
        if(mouseX > xMenu && mouseX < xMenu + width &&                 mouseY > yContinuar -10 && mouseY < yContinuar + 10){
            stroke('#BC813F');
            strokeWeight(2);    
            fill('#D7F2F1');  
            rect(xMenu, 143, width, 5, 5);
      
            if(mouseIsPressed){
                Tela = 2;
            }
        }       
            fill('#D8F2F3');
            stroke('#BC813F');
            strokeWeight(3.4);
            textSize(20);
            text('Continuar', 250, 150);      
      
        if(mouseX > xMenu && mouseX < xMenu + width &&                 mouseY > yMenu1 -10 && mouseY < yMenu1 + 10){
            stroke('#BC813F');
            strokeWeight(2);    
            fill('#D7F2F1');  
            rect(xMenu, 178, width, 5, 5);
      
            if(mouseIsPressed){
                Tela = 2.2;
            }
        }       
            fill('#D8F2F3');
            stroke('#BC813F');
            strokeWeight(3.4);
            textSize(20);
            text('Novo Jogo', 250, 185);
  
                            
                    // Menu Instruções \\
        if(mouseX > xMenu && mouseX < xMenu + width && mouseY >         yMenu2-10 && mouseY < yMenu2 + 10){
          stroke('#BC813F');
          strokeWeight(2);    
          fill('#D7F2F1'); 
          rect(xMenu, yMenu2, width, 5, 5);
              if(mouseIsPressed){
                  Tela = 4;
              }
      }
            fill('#D8F2F3');
            stroke('#BC813F');
            strokeWeight(3.4);
            textSize(20);
            text('Instruções', 250, 220);       
  
  
                    // Menu Créditos\\
        if(mouseX > xMenu && mouseX < xMenu + width && mouseY >         yCredits-10 && mouseY < yCredits + 10){
          stroke('#BC813F');
          strokeWeight(2);    
          fill('#D7F2F1'); 
          rect(xMenu, yCredits, width, 5, 5);
              if(mouseIsPressed){
                  Tela = 5;
              }
      }
            fill('#D8F2F3');
            stroke('#BC813F');
            strokeWeight(3.4);
            textSize(20);
            text('Créditos', 250, 255);       
    }    
      
} 