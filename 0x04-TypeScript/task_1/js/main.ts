// Defines the teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allows additional properties
  }
  
  // Creates a teacher object instance
  const teacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "India",
    contract: "Permanent" // Additional property example
  };

  // Extends the interface of the teacher to include Directors with an additional attribute
interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  // Directors interface usage
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
    
  // Log the teacher object to the console
  console.log(teacher);

  // Log the director object to the console
  console.log(director1);

  // Defines the interface for the printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Implement the printTeacher function
  const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  // Usage example
  console.log(printTeacher("John", "Doe")); // Output: J. Doe

  // Interface constructor of the StudentClass
interface StudentConstructor {
    new (firstName: string, lastName: string): Student;
  }
  
  // StudentClass interface
  interface Student {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Implements the StudentClass
  class StudentClass implements Student {
    constructor(private firstName: string, private lastName: string) {}
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
