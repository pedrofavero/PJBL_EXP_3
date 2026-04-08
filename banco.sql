CREATE DATABASE IF NOT EXISTS crud_carros;
USE crud_carros;

CREATE TABLE IF NOT EXISTS carros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  marca VARCHAR(100) NOT NULL,
  modelo VARCHAR(100) NOT NULL,
  ano INT NOT NULL,
  cor VARCHAR(50) NOT NULL,
  preco DECIMAL(10, 2) NOT NULL
);

-- alguns dados ja pra teste
INSERT INTO carros (marca, modelo, ano, cor, preco) VALUES
('Toyota', 'Corolla', 2022, 'Prata', 120000.00),
('Honda', 'Civic', 2021, 'Preto', 115000.00),
('Ford', 'Ka', 2020, 'Branco', 55000.00),
('Chevrolet', 'Onix', 2023, 'Vermelho', 75000.00),
('Volkswagen', 'Gol', 2019, 'Azul', 45000.00),
('Fiat', 'Argo', 2022, 'Cinza', 65000.00);
