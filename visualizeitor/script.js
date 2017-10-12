var alunos = new Object();
    alunos.aluno = new Array();
    alunos.tam = 0;
    
            
var request = new XMLHttpRequest();
request.open("GET", "alunos.xml", false);
request.send();
var xml = request.responseXML;
var arquivo = xml.getElementsByTagName("ALUNO");

for(var i = 0; i < arquivo.length; i++) {
    var aluno = arquivo[i];
    alunos.aluno[alunos.tam] = new Object();
    alunos.aluno[alunos.tam].MATR_ALUNO = aluno.getElementsByTagName("MATR_ALUNO");
    alunos.aluno[alunos.tam].NOME_ALUNO = aluno.getElementsByTagName("NOME_ALUNO");
    alunos.aluno[alunos.tam].ID_CURSO_ALUNO = aluno.getElementsByTagName("ID_CURSO_ALUNO");
    alunos.aluno[alunos.tam].ID_VERSAO_CURSO = aluno.getElementsByTagName("ID_VERSAO_CURSO");
    alunos.aluno[alunos.tam].COD_CURSO = aluno.getElementsByTagName("COD_CURSO");
    alunos.aluno[alunos.tam].NOME_CURSO = aluno.getElementsByTagName("NOME_CURSO");
    alunos.aluno[alunos.tam].NUM_VERSAO = aluno.getElementsByTagName("NUM_VERSAO");
    alunos.aluno[alunos.tam].ID_CURRIC_ALUNO = aluno.getElementsByTagName("ID_CURRIC_ALUNO");
    alunos.aluno[alunos.tam].ID_ATIV_CURRIC = aluno.getElementsByTagName("ID_ATIV_CURRIC");
    alunos.aluno[alunos.tam].ANO = aluno.getElementsByTagName("ANO");
    alunos.aluno[alunos.tam].MEDIA_FINAL = aluno.getElementsByTagName("MEDIA_FINAL");
    alunos.aluno[alunos.tam].SITUACAO_ITEM = aluno.getElementsByTagName("SITUACAO_ITEM");
    alunos.aluno[alunos.tam].PERIODO = aluno.getElementsByTagName("PERIODO");
    alunos.aluno[alunos.tam].SITUACAO = aluno.getElementsByTagName("SITUACAO");
    alunos.aluno[alunos.tam].COD_ATIV_CURRIC = aluno.getElementsByTagName("COD_ATIV_CURRIC");
    alunos.aluno[alunos.tam].NOME_ATIV_CURRIC = aluno.getElementsByTagName("NOME_ATIV_CURRIC");
    alunos.aluno[alunos.tam].CREDITOS = aluno.getElementsByTagName("CREDITOS");
    alunos.aluno[alunos.tam].CH_TOTAL = aluno.getElementsByTagName("CH_TOTAL");
    alunos.aluno[alunos.tam].ID_LOCAL_DISPENSA = aluno.getElementsByTagName("ID_LOCAL_DISPENSA");
    alunos.aluno[alunos.tam].CONCEITO = aluno.getElementsByTagName("CONCEITO");
    alunos.aluno[alunos.tam].ID_NOTA = aluno.getElementsByTagName("ID_NOTA");
    alunos.aluno[alunos.tam].ID_ESTRUTURA_CUR = aluno.getElementsByTagName("ID_ESTRUTURA_CUR");
    alunos.aluno[alunos.tam].DESCR_ESTRUTURA = aluno.getElementsByTagName("DESCR_ESTRUTURA");
    alunos.aluno[alunos.tam].FREQUENCIA = aluno.getElementsByTagName("FREQUENCIA");
    alunos.aluno[alunos.tam].MEDIA_CREDITO = aluno.getElementsByTagName("MEDIA_CREDITO");
    alunos.aluno[alunos.tam].SITUACAO_CURRICULO = aluno.getElementsByTagName("SITUACAO_CURRICULO");
    alunos.aluno[alunos.tam].SIGLA = aluno.getElementsByTagName("SIGLA");
    alunos.tam++;
}