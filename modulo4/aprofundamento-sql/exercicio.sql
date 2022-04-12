USE `moreira-21712214-arthur-silva`;
#A PARTIR DAQUI, VOCÊ DIZ QUE DESEJA USAR ESTE BANCO DE DADOS.

SET SQL_SAFE_UPDATES = 0;

DESCRIBE Filmes;
SELECT * FROM Actor;
SELECT * FROM Filmes;
#1-a)Ele está alterando a tebela para que possa excluir a coluna chamada "salary"
#1-b)Aqui ele está redeclarando a tabela, de gender para sex com um varchar de 6 caracteres.
#1-c)Altera a tabela redeclarando gender, para gender VARCHAR(255), que significa um varchar com ate 255 caracteres.

#1-d)abaixo:
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

#2-a)abaixo:
UPDATE Actor SET name = "Valcyr Carrasco", birth_date = "1989-08-06" WHERE id = "003";  
#2-b)
UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";
UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";
#2-c)
UPDATE Actor SET name = "Moreira junior", salary = 20000, birth_date = "1887-08-30", gender = "male" WHERE id = "005";
#2-d)
UPDATE Actor SET name = "Arthur kelvim" WHERE ID = "45";
#0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0 / Ele diz o que foi alterado e o que nao foi.

#3-a)
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
#3-b)
DELETE FROM Actor WHERE gender = "male" AND salary > 100000000;

#4-a)
SELECT MAX(salary) FROM Actor;
#4-b)
SELECT MIN(salary) FROM Actor WHERE gender = "female";
#4-c)
SELECT COUNT(gender) FROM Actor WHERE gender = "female";
#4-d)
SELECT SUM(salary) FROM Actor;

#5-a)
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
#ELE RETORNOU A QUANTIDADE DE PESSOAS DOS DOIS GENEROS, MAS PODEMOS FAZER ISSO DE OUTRA FORMA
#5-b)
SELECT id, name FROM Actor ORDER BY name DESC;
#5-c)
SELECT * FROM Actor ORDER BY salary;
#5-d)
SELECT * FROM Actor ORDER BY salary DESC limit 3;
#5-e)
SELECT AVG(salary), gender FROM Actor GROUP BY gender;

#6-a)
ALTER TABLE Filmes ADD playing_limit_date DATE;
#6-b)
ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT;
#6-c)
UPDATE Filmes SET playing_limit_date = "2020-05-13" WHERE id = "002";
#6-c)
UPDATE Filmes SET playing_limit_date = "2021-08-29" WHERE id = "003";
#6-d) 
DELETE FROM Filmes WHERE id = "002";
