CREATE TABLE pessoa (
    codigo SERIAL,
    nome VARCHAR(50) NULL,
    foto VARCHAR(50) NULL,	
    PRIMARY KEY(codigo)
);


INSERT INTO pessoa (nome) values ('WLADIMIR');