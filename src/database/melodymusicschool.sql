create database melodymusicschool;
use melodymusicschool;

create table usuario (
id int primary key auto_increment,
nome varchar(45) not null,
email varchar(256) not null,
senha varchar(8) not null
);

create table curso (
idCurso int primary key auto_increment,
nome varchar(45),
descricao varchar(100)
);

insert into usuario(nome, email, senha) values
('nathan', 'nathan@gmail.com', 'nathan');

insert into curso(nome, descricao) values
('Canto', 'Aperfeiçoe sua voz com técnicas de canto clássico e contemporâneo.'),
('Teclado', 'Curso para todos os níveis, focado em técnica e repertório.'),
('Saxofone', 'Explore a versatilidade do saxofone em vários gêneros.'),
('Trompete', 'Aperfeiçoe habilidades de sopro em diferentes estilos.'),
('Violino', 'Técnica e expressividade no violino.'),
('Guitarra', 'Aprenda acordes e solos em diferentes estilos.'),
('Bateria', 'Domine ritmos e técnicas de percussão.'),
('Produção Musical', 'Introdução à gravação e mixagem de música.');

select * from usuario;
select * from curso;
