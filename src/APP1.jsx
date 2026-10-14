///employee management system using react
import { useState } from 'react';

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');

  function addEmployee(e) {
    e.preventDefault();

    if (!name.trim() || !department.trim()) {
      alert('Enter all details');
      return;
    }

    setEmployees([
      ...employees,
      { id: Date.now(), name, department }
    ]);

    setName('');
    setDepartment('');
  }

  function deleteEmployee(id) {
    setEmployees(employees.filter(emp => emp.id !== id));
  }
  function updateEmployee(id, newName, newDepartment) {
    setEmployees(employees.map(emp => 
      emp.id === id ? { ...emp, name: newName, department: newDepartment } : emp
    ));
  }

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h1>Employee Management System</h1>

      <form onSubmit={addEmployee}>
        <input
          placeholder="Employee Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          placeholder="Department"
          value={department}
          onChange={e => setDepartment(e.target.value)}
        />

        <button type="submit">Add Employee</button>
      
      </form>

      <h2>Employee List</h2>

      {employees.length === 0 && <p>No employees found.</p>}

      {employees.map(emp => (
        <div key={emp.id} style={{ margin: '10px' }}>
          {emp.name} - {emp.department}
          <button onClick={() => deleteEmployee(emp.id)}>
            Delete
          </button>
          <button onClick={() => {
            const newName = prompt('Enter new name:', emp.name);
            const newDepartment = prompt('Enter new department:', emp.department);
            if (newName && newDepartment) {
              updateEmployee(emp.id, newName, newDepartment);
            }
          }}>
            Update
          </button>
        </div>
      ))}
    </div>
  );
}