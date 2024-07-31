interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "Jude",
    lastName: "Belli",
    age: 20,
    location: "Scotland",
  };
  
  const student2: Student = {
    firstName: "Jayne",
    lastName: "Belli",
    age: 22,
    location: "Aberdeen",
  };
  
  const studentsList: Array<Student> = [student1, student2];
