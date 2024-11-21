-- PROFESOR LE DEJO AQUI MI SQL PARA QUE LO PUEDA PROBAR SIN PROBLEMAS "Puse otros dos campos "universidad" y "cuenta" --

-- Creamos Base de datos y Perfil de SQL llamado "node_crud_fjpz"
CREATE DATABASE IF NOT EXISTS node_crud_fjpz;
USE node_crud_fjpz;

-- Creamos tabla 'users' si no existe
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT NOT NULL,    -- ID del usuario
    name VARCHAR(70) NOT NULL,         -- Nombre del usuario
    email VARCHAR(100) NOT NULL,       -- Correo electrónico del usuario
    universidad VARCHAR(100) NOT NULL, -- Universidad del usuario
    cuenta INT(9) NOT NULL,            -- Número de cuenta de nuestro usuario
    PRIMARY KEY (id)                   -- Definimos la clave primaria como 'id'
);

-- Si necesitas crear el usuario 'root' solo si no existe (esto dependerá de la versión de MySQL)
CREATE USER IF NOT EXISTS 'root'@'localhost' IDENTIFIED BY '123456';

-- Concedemos permisos al usuario 'root' sobre la base de datos 'node_crud_fjpz'
GRANT ALL PRIVILEGES ON node_crud_fjpz.* TO 'root'@'localhost';

-- Insertamos un usuario en la tabla 'users' 
INSERT INTO users (name, email, universidad, cuenta) VALUES ('Felipe de Jesus Pedro Zarate', 'felipezarate11@aragon.unam.mx', 'UNAM', '422012511');





