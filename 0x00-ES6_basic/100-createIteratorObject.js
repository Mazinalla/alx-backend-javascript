export default function createIteratorObject(report) {
  const employees = [];

  // Gather all employees from each department
  for (const department in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
      employees.push(...report.allEmployees[department]);
    }
  }

  // Create and return the iterator
  return employees[Symbol.iterator]();
}
