create database melodymusicschool;
use melodymusicschool;

create table usuario (
id int primary key auto_increment,
nome varchar(45) not null,
email varchar(256) not null,
senha varchar(8) not null
);

create table nivel (
idNivel int primary key auto_increment,
nome varchar(45)
);

create table curso (
idCurso int primary key auto_increment,
nome varchar(45),
descricao varchar(100)
);

create table matricula (
idMatricula int auto_increment,
fkUsuario int,
fkCurso int,
	constraint pkMatricula primary key(idMatricula, fkUsuario, fkCurso),
    constraint fkUsuarioMatricula foreign key (fkUsuario)
		references usuario (id),
	constraint fkCursoMatricula foreign key (fkCurso)
		references curso (idCurso),
data timestamp,
fkNivel int,
	constraint fkNivelMatricula foreign key(fkNivel)
		references nivel(idNivel)
);

create table professor (
idProfessor int primary key auto_increment,
nome varchar(100) not null,
email varchar(256) not null,
dataNasc date,
fkCurso int,
	constraint fkCursoProfessor foreign key (fkCurso)
		references curso(idCurso)
);

create table aula (
idAula int auto_increment,
fkAluno int,
fkProfessor int,
	constraint pkCompostaAula primary key (idAula, fkAluno, fkProfessor),
dataHora datetime
);

create table quiz(
idQuiz int primary key auto_increment,
nome varchar(45) not null
);

create table jogada(
idJogada int auto_increment,
fkUsuario int,
fkQuiz int,
	constraint pkCompostaJogada primary key (idJogada, fkUsuario, fkQuiz),
    constraint fkUsuarioJogada foreign key (fkUsuario)
		references usuario (id),
	constraint fkQuizJogada foreign key (fkQuiz)
		references quiz (idQuiz),
dataHora timestamp,
pontuacao int
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

insert into nivel(nome) values
('Básico'),
('Intemediário'),
('Avançado');

insert into professor(nome, email, dataNasc, fkCurso) values
('Wellington Pinheiro', 'wellingtonpinheiro@gmail.com', '1995-03-10', 1),
('Sandra Fontes', 'sandrafontes@gmail.com', '1982-09-19', 2);

alter table matricula
modify column data timestamp;

select * from usuario;
select * from curso;
select * from matricula;
select * from nivel;
select * from professor;
select * from aula;
select * from quiz;
select * from jogada;

insert into matricula(fkUsuario, fkCurso, data, fkNivel) values
(12, 3, '2024-05-28', 1);

insert into matricula (fkUsuario, fkCurso, fkNivel) values
(13, 1, 2);

select distinct(professor.nome) from professor
join aula on idProfessor = fkProfessor
where dataHora != '2024-06-03 12:00:00';

insert into aula values
(default, 1, 1, '2024-06-04 10:00:00');

insert into aula values
(default, 2, 2, '2024-06-03 12:00:00');

select u.nome, m.data, c.nome, a.dataHora, p.nome from usuario as u
join matricula as m on id = fkUsuario
join curso as c on fkCurso = idCurso
join aula as a on u.id = a.fkAluno
join professor as p on idProfessor = fkProfessor;

select nome from professor 
where fkCurso = 1;

insert into professor values 
(default, 'Antônio Ferreira', 'antonioferreira@gmail.com', '1975-08-01', 1);

insert into professor values 
(default, 'Luciana Pompeo', 'lucianapompeo@gmail.com', '2000-2-2', 5);

select aula.dataHora, usuario.id, usuario.nome, professor.nome, professor.email from aula
join usuario on fkAluno = id
join professor on fkProfessor = idProfessor
where dataHora > current_timestamp() and id = 1;

insert into quiz(nome) values
('Teoria Musical'),
('Violão'),
('Clarinete');