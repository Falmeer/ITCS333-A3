const url =
  "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const students = data.results;

    const tableBody = document.getElementById("studentTableBody");

    students.forEach((student) => {
      const row = document.createElement("tr");

      const yearCell = document.createElement("td");
      yearCell.textContent = student.year;

      const semesterCell = document.createElement("td");
      semesterCell.textContent = student.semester;

      const programCell = document.createElement("td");
      programCell.textContent = student.the_programs;

      const nationalityCell = document.createElement("td");
      nationalityCell.textContent = student.nationality;

      const collegeCell = document.createElement("td");
      collegeCell.textContent = student.colleges;

      const numberOfStudentsCell = document.createElement("td");
      numberOfStudentsCell.textContent = student.number_of_students;

      row.appendChild(yearCell);
      row.appendChild(semesterCell);
      row.appendChild(programCell);
      row.appendChild(nationalityCell);
      row.appendChild(collegeCell);
      row.appendChild(numberOfStudentsCell);

      tableBody.appendChild(row);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
