CREATE TABLE perfil(
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    idade INT,
    data_nascimento DATE,
    cpf INTEGER,
    tipo VARCHAR(20),
    foto VARCHAR(1000),
    matricula INTEGER,
    id_localizacao INTEGER,
    FOREIGN KEY(id_localizacao) REFERENCES localizacao(id)
);

CREATE TABLE localizacao(
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    cidade VARCHAR(50),
    estado VARCHAR(50)
);