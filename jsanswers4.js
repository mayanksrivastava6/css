const employees = [
    { name: "Alice", department: "IT", salary: 60000 },
    { name: "Bob", department: "HR", salary: 50000 },
    { name: "Charlie", department: "IT", salary: 75000 },
    { name: "David", department: "Finance", salary: 80000 }
  ];
  
  const totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);
  
  const itEmployees = employees
    .filter(employee => employee.department === "IT")
    .map(employee => employee.name);
  
  const highestSalaryEmployee = employees.reduce((highest, employee) => 
    employee.salary > highest.salary ? employee : highest
  );
  
  console.log("Total Salary:", totalSalary);
  console.log("IT Employees:", itEmployees);
  console.log("Employee with Highest Salary:", highestSalaryEmployee.name, highestSalaryEmployee.salary);
  