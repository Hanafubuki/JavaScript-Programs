/*=============== =================*/
//
//	Inicialização das variaveis
//
/*=============== =================*/
var s = new Object();			
	s.num_linhas = 0;			
	s.linhas = new Array();	
var l;
var clique;
var n;
var b;
var r;



/*=============== =================*/
//
//			Cria linha
//
/*=============== =================*/
function main() {
	init();
}

function init() {
	d1 = criaPonto(200,150);
	d2 = criaPonto(400,150);
	l = criaLinha (d1,d2);	
	insereLinha(l,s);			
	desenhaLinha();
}

function insereLinha(line, struct) {
	var ultimaPosicao = struct.num_linhas;
	struct.linhas[ultimaPosicao] = new Object;
	struct.linhas[ultimaPosicao] = line;
	struct.num_linhas = struct.num_linhas + 1;
}

function criaLinha(d1, d2) {
	var m = media(d1, d2);
	var line = {ponto1: d1, ponto2: d2, pontom: m};
	return line;
}

function criaPonto(x,y) {
	var ponto = {x2:x, y2:y}; 
	return ponto;
}

function media(d1, d2) {
	var xM = (d1.x2 + d2.x2) / 2;
	var yM = (d1.y2 + d2.y2) / 2;
	var dM = criaPonto(xM, yM);
	return dM;
}

function desenhaLinha() {
	limpa();	
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	canvas.oncontextmenu = function() {
     return false;  
	} 
	ctx.beginPath();
	var count = 0;
	ctx.rect(0,0,900,500); 
	ctx.fillStyle="white";
	ctx.fill(); 
	while(count < s.num_linhas) {
		ctx.moveTo(s.linhas[count].ponto1.x2,s.linhas[count].ponto1.y2);
		ctx.lineTo(s.linhas[count].ponto2.x2,s.linhas[count].ponto2.y2);
		ctx.arc(s.linhas[count].ponto1.x2,s.linhas[count].ponto1.y2,2,0,2*Math.PI);
		ctx.arc(s.linhas[count].ponto2.x2,s.linhas[count].ponto2.y2,2,0,2*Math.PI);
		ctx.arc(s.linhas[count].pontom.x2,s.linhas[count].pontom.y2,2,0,2*Math.PI);
		count++;
	}
	ctx.stroke();
}


/*=============== =================*/
//
//		Encontra posição
//
/*=============== =================*/
function encontaPosicao(event) {
	var canvas = document.getElementById("myCanvas");
        var rect = canvas.getBoundingClientRect();
        return {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top
        };
}

function radians(ang){
	return ang*Math.PI/180;
}


/*=============== =================*/
//
//			Cria poligonos
//
/*=============== =================*/
function atualiza(event) {
	var opt = document.getElementById("selectList").selectedIndex + 2;
	s.num_linhas=0;
	var cx = 300;
	var cy = 150;	
	var raio = 100;
	var ang;
	var i;
	ang = 360/opt;
	i=0;
	while(i<360)
	{
		i=i+ang;
		d1 = criaPonto(Math.cos(radians(i))*raio+cx,Math.sin(radians(i))*raio+cy);
		d2 = criaPonto(Math.cos(radians(i+ang))*raio+cx,Math.sin(radians(i+ang))*raio+cy);
		l = criaLinha (d1,d2);
		insereLinha(l,s);
	}
	desenhaLinha();
}


/*=============== =================*/
//			Clique botão
//			1: esquerdo
//			3: direito
/*=============== =================*/
function qualEvento(event) {
	var mousePosicao = encontaPosicao(event);	
	switch (event.which) {
		case 1:					
			l = selecLinha(mousePosicao);
			clique = 1;
		break;
		case 3:	
			l = selecLinha(mousePosicao);
			clique = 2;
		break;
	}
}


/*=============== =================*/
//
//			Seleciona Linha
//
/*=============== =================*/
function selecLinha(mousePosicao) {
	var count = 0;
	var powA1;
	var powA2;
	var distA;
	var powB1;
	var powB2;
	var distB;
	var powC1;
	var powC2;
	var distC;
	powA1 = Math.pow(s.linhas[count].ponto1.x2 - mousePosicao.x,2);
	powA2 = Math.pow(s.linhas[count].ponto1.y2 - mousePosicao.y,2);
	distA = Math.sqrt(powA1 + powA2);

	var linhaMaisPerto = {dist: distA, ponto: s.linhas[count].ponto1, line: s.linhas[count], ind: count};
	while(count < s.num_linhas) {
		powA1 = Math.pow(s.linhas[count].ponto1.x2 - mousePosicao.x,2);
		powA2 = Math.pow(s.linhas[count].ponto1.y2 - mousePosicao.y,2);
		distA = Math.sqrt(powA1 + powA2);

		powB1 = Math.pow(s.linhas[count].ponto2.x2 - mousePosicao.x,2);
		powB2 = Math.pow(s.linhas[count].ponto2.y2 - mousePosicao.y,2);
		distB = Math.sqrt(powB1 + powB2);
		
		powC1 = Math.pow(s.linhas[count].pontom.x2 - mousePosicao.x,2);
		powC2 = Math.pow(s.linhas[count].pontom.y2 - mousePosicao.y,2);
		distC = Math.sqrt(powC1 + powC2);
		if (distA < distB){
			if (distA < distC){
				if (linhaMaisPerto.dist > distA){	
					linhaMaisPerto.ponto = s.linhas[count].ponto1;
					linhaMaisPerto.line = s.linhas[count];
					linhaMaisPerto.dist = distA;
					linhaMaisPerto.ind = count;
				}
			}
			else{
				if (linhaMaisPerto.dist > distC){
					linhaMaisPerto.ponto = s.linhas[count].pontom;
					linhaMaisPerto.line = s.linhas[count];
					linhaMaisPerto.dist = distC;
					linhaMaisPerto.ind = count;
				}
			}
		}
		else{
			if (distB < distC){
				if (linhaMaisPerto.dist > distB){
					linhaMaisPerto.ponto = s.linhas[count].ponto2;
					linhaMaisPerto.line = s.linhas[count];
					linhaMaisPerto.dist = distB;
					linhaMaisPerto.ind = count;
				}	
			}
			else{
				if (linhaMaisPerto.dist > distC){
					linhaMaisPerto.ponto = s.linhas[count].pontom;
					linhaMaisPerto.line = s.linhas[count];
					linhaMaisPerto.dist = distC;
					linhaMaisPerto.ind = count;
				}
			}
		}
		count++;
	}
	return linhaMaisPerto;
}

function limpa() {
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0,0,800,400);		
}

function calculaTolera(p) {
	switch (p) {
		case 1:	
			if (l.dist < 20){
				return 1;			
			}
		break;
		case 2:
			if (l.dist < 30){
				return 1;			
			}
		break;
		case 3:
			if (l.dist < 40){
				return 1;			
			}
		break;
	}
	return 0;
}


/*=============== =================*/
//
//			Atualiza linhas
//
/*=============== =================*/
function atualizaLinhas(event) {
	var mousePos = encontaPosicao(event);

	switch (clique) {
		case 1:
			if ((s.linhas[l.ind].ponto1.x2 == l.ponto.x2) && (s.linhas[l.ind].ponto1.y2 == l.ponto.y2)) {
				if(calculaTolera(1)){		
					s.linhas[l.ind].ponto1.x2 = mousePos.x;
					s.linhas[l.ind].ponto1.y2 = mousePos.y;
					s.linhas[l.ind].pontom = media(s.linhas[l.ind].ponto1, s.linhas[l.ind].ponto2);
				}		
			}
			else {
				if ((s.linhas[l.ind].ponto2.x2 == l.ponto.x2) && (s.linhas[l.ind].ponto2.y2 == l.ponto.y2)) {
					if(calculaTolera(1)) {
						s.linhas[l.ind].ponto2.x2 = mousePos.x;
						s.linhas[l.ind].ponto2.y2 = mousePos.y;
						s.linhas[l.ind].pontom = media(s.linhas[l.ind].ponto1, s.linhas[l.ind].ponto2);
					}
				}
				else {
					if ((s.linhas[l.ind].pontom.x2 == l.ponto.x2) && (s.linhas[l.ind].pontom.y2 == l.ponto.y2)) {
						if(calculaTolera(2)) {
							diffx = mousePos.x - s.linhas[l.ind].pontom.x2;
							diffy = mousePos.y - s.linhas[l.ind].pontom.y2;
							s.linhas[l.ind].ponto1.x2 = s.linhas[l.ind].ponto1.x2 + diffx;
							s.linhas[l.ind].ponto1.y2 = s.linhas[l.ind].ponto1.y2 + diffy;
							s.linhas[l.ind].pontom.x2 = s.linhas[l.ind].pontom.x2 + diffx;
							s.linhas[l.ind].pontom.y2 = s.linhas[l.ind].pontom.y2 + diffy;
							s.linhas[l.ind].ponto2.x2 = s.linhas[l.ind].ponto2.x2 + diffx;
							s.linhas[l.ind].ponto2.y2 = s.linhas[l.ind].ponto2.y2 + diffy;
						}
					}
				}
			}
		break;
		case 2:	
			if(calculaTolera(3)) {
				n = criaPonto(mousePos.x,mousePos.y);		
				n1 = criaPonto(mousePos.x,mousePos.y);	
				b = s.linhas[l.ind].ponto2;
				s.linhas[l.ind].ponto2 = n;
				s.linhas[l.ind].pontom = media(s.linhas[l.ind].ponto1,s.linhas[l.ind].ponto2);
				r = criaLinha(b, n1);
				insereLinha(r,s);
			}
		break;
	}
	desenhaLinha();
}