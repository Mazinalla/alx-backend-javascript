export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = []; // Array to hold employee names

  // Iterate through the reportWithIterator
  for (const employee of reportWithIterator) {
    employeeNames.push(employee); // Add each employee to the array
  }

  // Join the array elements into a string separated by '|'
  return employeeNames.join(' | ');
}
