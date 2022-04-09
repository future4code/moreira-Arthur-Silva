USE `moreira-21712214-arthur-silva`;


SELECT * FROM users;
SELECT * FROM tarefas;
#TABELA DE USUARIOS
CREATE TABLE users (
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	nickname VARCHAR(255) UNIQUE NOT NULL,
	email VARCHAR(255) UNIQUE NOT NULL
);
INSERT INTO users (id, name, nickname, email)
VALUES
("02", "vinicius","vinicinho", "vinicius@gmail.com");
#UMA TAREFA TEM APENAS UM USUARIO CRIADOR, CARACTERIZANDO UMA RELAÇÃO 1/N - USUARIO CRIADOR E TAREFA -
CREATE TABLE tarefas(
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    date_limit DATE NOT NULL,
    status VARCHAR(255) NOT NULL DEFAULT "to_do",
    creator_user_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (creator_user_id) REFERENCES users(id)
);
INSERT INTO tarefas 
VALUES(
	"01",
    "lavar",
    "Lavar todas as roupas da casa",
    "1998/05/23",
    "to_do",
    "02"
);

CREATE TABLE userResponsibleForTasks(
    task_id VARCHAR(255) PRIMARY KEY,
    id_user_responsible VARCHAR(255) NOT NULL,
    FOREIGN KEY (task_id) REFERENCES tarefas(id),
    FOREIGN KEY (id_user_responsible) REFERENCES users(id)
);

SELECT id, nickname FROM users WHERE id = "0";
SELECT id, title, description, date_limit, status, creator_user_id FROM tarefas WHERE id = "01";

SELECT 
tarefas.id,
tarefas.title,
tarefas.description,
tarefas.date_limit,
tarefas.status,
tarefas.creator_user_id,
users.nickname 
FROM tarefas JOIN users ON tarefas.id = "0";

DELETE FROM tarefas WHERE nickname = "vinicinho"

