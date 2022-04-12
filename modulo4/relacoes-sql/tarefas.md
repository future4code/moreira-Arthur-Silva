~~~sql
USE `moreira-21712214-arthur-silva`;

SELECT * FROM Actor;
SELECT * FROM Filmes;
SELECT * FROM Rating;
SELECT * FROM MovieCast;
#1-a)Chave estrangeira representa a relação a algo. Significa que dados estão sendo relacionados. 
#1-b)
CREATE TABLE Rating(
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id)
);
INSERT INTO Rating
VALUES
("01", "Este filme se eu fosse voce é muito engraçado", 7.5, "001" ),
("02", "Aprendi muito com esse filme doce de mae", 8.5, "002"),
("03", "Excelente filme para assistir com a familia", 8.9, "003"),
("04", "Filme de sujeito homem, melhor de todos", 9.9, "004");
#1-c)
INSERT INTO Rating 
VALUES
("06", "filme do king kong bom demais", 8.8, "008");
#Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`moreira-21712214-arthur-silva`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))
#ENTÃO AQUI ELE NÃO ACEITOU, E QUE DEU FALHA NA CHAVE ESTRANGEIRA.

#1-D)
ALTER TABLE Filmes DROP COLUMN avaliacao;
#1-E) Ele nao deixa pois estamos usando dados da tabela 'Filmes' como foreigh key.
DELETE FROM Filmes WHERE id = "002";
#Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`moreira-21712214-arthur-silva`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))


#2-a)Aqui temos duas FOREIGN KEY que fazem referencias as duas tabelas anteriores criadas.
#2-b)
CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
#2-c)
INSERT INTO MovieCast 
VALUES 
("002", "004"),
("003", "003"),
("001", "002"),
("004", "003"),
("003", "002"),
("001", "003");
#2-d)
INSERT INTO MovieCast 
VALUES
("002", "001");
#AQUI ELE DEU UM ERRO E DIZ MAIS OU MENOS QUE NAO É POSSIVEL ADD OU ATUALIZAR UMA CHAVE ESTRANGEIRA QUE NAO EXISTE.
#2-e)
DELETE FROM Actor WHERE id = "003"; 
#AQUI ELE DIZ QUE NAO É POSSIVEL DELETAR UMA LINHA QUE TENHA UM "PARENTESCO" PQ NO CASO ESTAMOS USANDO ESTE ID EM OUTRA TABELA.

#3-A)A QUERY SELECIONA, UNI DUAS TABELAS E COM UMA CONDIÇÃO (ON) RETORNA A AVALIAÇÃO DO FILME.
#3-B)
#NÃO ENTENDI NEM OLHANDO AS DICAS.

~~~