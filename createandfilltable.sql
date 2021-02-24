SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS positions;
DROP TABLE IF EXISTS employee_positions;
DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS tasks;
SET FOREIGN_KEY_CHECKS = 1;


CREATE TABLE employees (
    employee_id int(11) NOT NULL AUTO_INCREMENT,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    birth_date  DATE NOT NULL,
    PRIMARY KEY (employee_id) 
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO employees (first_name, last_name, birth_date) VALUES
('Christina', 'Ramsey', '1984-01-08'),
('Thomas', 'Stevenson', '1970-07-22'),
('Robert', 'Harrison', '1993-11-14'),
('Jessica', 'Santinez', '1987-04-02'),
('Gerarld', 'Brewer', '1968-02-19'),
('Carl', 'Townsend', '1998-12-27');


CREATE TABLE projects (
    project_id int(11) NOT NULL AUTO_INCREMENT,
    project_name varchar(255) NOT NULL,
    PRIMARY KEY (project_id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO projects (project_name) VALUES
('Deposits'),
('Withdrawals'),
('Records'),
('Bookeeping'),
('Advisory'),
('Exchanges'),
('Investment'),
('Scheduling'),
('Cleaning'),
('Loans');


CREATE TABLE positions (
    position_id int(11) NOT NULL AUTO_INCREMENT,
    position_name varchar(255) NOT NULL,
    position_rank varchar(255) NOT NULL,
    PRIMARY KEY (position_id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO positions (position_name, position_rank) VALUES
('CEO', '1'),
('Loan Officer', '60'),
('Investment Specialist', '55'),
('Financial Analyst', '40'),
('Branch Manager', '10'),
('Accountant', '85'),
('Front Desk Secretary', '95'),
('Janitor', '100');


CREATE TABLE employee_positions (
    employee_positions_id int(11) NOT NULL AUTO_INCREMENT,
    FOREIGN KEY (employee_id) REFERENCES employees (employee_id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
    FOREIGN KEY (positions_id) REFERENCES positions (positions_id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);


CREATE TABLE departments (
    department_id int(11) NOT NULL AUTO_INCREMENT,
    department_name varchar(255) NOT NULL,
    PRIMARY KEY (department_id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO departments (department_name) VALUES
('retail banking'),
('corporate/commercial banking'),
('global banking'),
('private banking'),
('investment banking');

