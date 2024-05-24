create database melodymusicschool;
use melodymusicschool;

create table usuario (
id int primary key auto_increment,
nome varchar(45) not null,
email varchar(256) not null,
senha varchar(8) not null
);

insert into usuario(nome, email, senha) values
('nathan', 'nathan@gmail.com', 'nathan');

select * from usuario;