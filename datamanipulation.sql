INSERT INTO employees (first_name, last_name, birth_date, employee_id) VALUES (:first_name_input, :last_name_input, :birth_date_input, :employee_id_input);
SELECT * FROM employees WHERE last_name = :last_name_input AND first_name = :first_name_input AND birth_date = :birth_date_input;
DELETE FROM employees WHERE employee_id = :employee_id_input;
UPDATE employees SET first_name = :first_name_input AND last_name = :last_name_input AND birth_date = :birth_date_input WHERE employee_id = :employee_id_input;

INSERT INTO projects (project_name, project_id) VALUES (:project_name_input, :project_id_input);
SELECT * FROM projects WHERE project_name = :project_name_input;
DELETE FROM projects WHERE project_name = :project_name_input;
UPDATE projects SET project_name = :project_name_input WHERE project_id_input = :project_id_input;

INSERT INTO positions (position_name, position_rank, position_id) VALUES (:position_name_input, :position_rank_input, :position_id_input);
SELECT * FROM positions WHERE position_name = :position_name_input AND position_rank = :position_rank_input;
DELETE FROM positions WHERE position_id = :position_id_input;
UPDATE positions SET position_name = :position_name_input AND position_rank = :position_rank_input WHERE position_id = :position_id_input;

INSERT INTO employee_positions (employee_id, position_id) VALUES (:employee_id_input, :position_id_input);
SELECT employee_id, position_id FROM employee_positions;
SELECT employee_id, position_id FROM employee_positions WHERE employee_id = :employee_id_input AND position_id = :position_id;
DELETE FROM employee_positions WHERE employee_id = :employee_id_input AND position_id = :position_id;

INSERT INTO departments (department_name, department_id) VALUES (:department_name_input, :department_id_input);
SELECT * FROM departments WHERE department_name = :department_name_input;
DELETE FROM departments WHERE department_id = :department_id_input;
UPDATE departments SET department_name = :department_name_input WHERE department_id = :department_id_input;

INSERT INTO tasks (assigned_task, assigned_to, task_id) VALUES (:assigned_task_input, :assigned_to_input, :task_id_input);
SELECT * FROM tasks WHERE assigned_task = :assigned_task_input AND assigned_to = :assigned_to_input;
DELETE FROM tasks WHERE task_id = :task_id_input;
UPDATE tasks SET assigned_task = :assigned_task_input AND assigned_to = :assigned_to_input WHERE task_id = :task_id_input;


