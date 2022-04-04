~~~sql
USE `moreira-21712214-arthur-silva`;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
### QUESTAO 1
/*
QUESTAO 1-A)
PRIMEIRA LINHA: espera-se té 255 caracteres e também será a chave primaria.
SEGUNDA LINHA: espera-se até 255 caracteres e também um comando NOT NULL que significa que nao pode ser nulo.
TERCEIRA LINHA: espera-se numeros não inteiros.
QUARTA LINHA: representa uma data.
QUINTA LINHA: espera-se até 6 caracteres e não pode ser nulo. 
*/
#QUESTAO 1-B)
#SHOW DATABASE; Ele irá mostrar a base de dados.
#SHOW TABLES; Ele irá mostrat os dados que temos em formato de tabela.
#QUESTAO 1-C)
#DESCRIBE Actor; Ele irá descrever um dado presente em formato de uma tabela, acessando através do nome.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
####QUESTAO 2-A)
INSERT INTO Actor (name, id, salary, birth_date, gender)
VALUES(
	"Glória Pires",
    "002",
    1200000,
    "1963-08-23",
    "female"
);
#QUESTAO 2-B) O ERRO OCORRE DEVIDO JÁ TERMOS UMA ISERÇÃO DO O PRIMARY ID NA TABELA.

#QUESTAO 2-C)
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
#NÃO CONTÉM OS VALORES ESPERADOS 2/c 

#QUESTAO 2-D)
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
#O CAMPO "NAME" NÃO CONTÉM NO INSERT COMO VALOR PADRAO
#QUESTAO 2-E)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
#FALTA APENAS AS ASPAS NA DATA DE ANIVERSÁRIO

#QUESTAO 2-F)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
###QUESTAO 3-A)
SELECT * from Actor;
#QUESTAO 3-b)
SELECT salary, name from Actor WHERE name = "Tony Ramos";
#QUESTAO 3-c)
SELECT * from Actor WHERE gender = "invalid";
#A RESPOSTA É NULL, POIS NÃO TEM NENHUM "INVALID"
#QUESTAO 3-D)
SELECT id, name, salary from Actor WHERE salary <= 500000; 

#QUESTAO 3-E) AQUI É SÓ PRECISO CONCERTAR O NOME, QUE É "NAME"
SELECT id, name from Actor WHERE id = "002";

SELECT * FROM Actor 
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

###QUESTAO 4-A)
#BETWEEN - ESTAMOS FAZENDO UMA BUSCA QUE FAZ DUAS COMPARAÇÕES, UMA PARA VER SE TEMOS CERTAS LETRAS EM UM NOME E SE SALARIO É MAIOR QUE TRINTA MIL

#QUESTAO 4-B)
SELECT * FROM Actor 
WHERE (name NOT LIKE "A%") AND salary > 350000 ;
#QUESTAO 4-C)
SELECT * FROM Actor
WHERE(name like "%G%" OR name like "%g%");
#QUESTAO 4-D)
SELECT * FROM Actor 
WHERE(name like "%a%" OR name like "%A%" OR name like "%G%" OR name like "%g%") AND salary BETWEEN 350000 AND 900000;

###QUESTAO 5-A)
CREATE TABLE Filmes (
	id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) not null,
    sinopse TEXT not null,
    exibicao VARCHAR(255) not null,
    avaliacao FLOAT not null
);
#TEXT É USADO PARA ARMAZENAR CARACTERES DE FORMATO LONGO 

#QUESTAO 5-B)
INSERT INTO Filmes(id, nome, sinopse, exibicao, avaliacao)
VALUES(
	"001",
    "Se eu fosse voce",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "06/01/2006",
    7
);
#QUESTAO 5-C)
INSERT INTO Filmes(id, nome, sinopse, exibicao, avaliacao)
VALUES(
	"002",
    "Doce de mae",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "27/12/2012",
    10
);
#QUESTAO 5-C)
INSERT INTO Filmes(id, nome, sinopse, exibicao, avaliacao)
VALUES(
	"003",
    "Dona flor e seus dois maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
    "02/11/2017",
    8
);
#QUESTAO 5-E)
INSERT INTO Filmes(id, nome, sinopse, exibicao, avaliacao)
VALUES(
	"004",
    "Cidade de deus",
    "Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. ",
    "30/08/2002",
    10
);
###QUESTAO 6-A)
SELECT id, nome, avaliacao FROM Filmes WHERE id = "002";
#QUESTAO 6-B)
SELECT * FROM Filmes WHERE nome = "Cidade de deus";
#QUESTAO 6-C)
SELECT id, nome, sinopse FROM Filmes WHERE avaliacao < 7;

###QUESTOES 7-A)
SELECT * FROM Filmes WHERE nome = "vida";
#QUESTOES 7-C)
SELECT * FROM Filmes WHERE nome = "Cidade de deus" OR sinopse = "negro";
#QUESTOES 7-D)
SELECT * FROM Filmes WHERE nome = "Se eu fosse voce" OR sinopse = "sedutora" AND avaliacao > 7;
~~~