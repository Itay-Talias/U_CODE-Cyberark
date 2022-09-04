class Student {
    grades: number[];
    constructor(public name: string, public age: number) {
        this.grades = [];
    }
    addGrade(grade: number) {
        this.grades.push(grade);
    }
    getGradeAvg(): number {
        let sum: number = 0;

        this.grades.forEach((element: number) => {
            sum += element;
        });

        return sum / this.grades.length;
    }
}

const s1 = new Student("Itay", 25);
const s4 = new Student("Lotan", 26);
const s2 = new Student("Chen", 22);
const s3 = new Student("Liam", 13);

s1.addGrade(90);
s1.addGrade(92);
s1.addGrade(65);
s1.addGrade(84);
s2.addGrade(100);
s2.addGrade(95);
s2.addGrade(70);
s2.addGrade(62);
s3.addGrade(90);
s3.addGrade(80);
s3.addGrade(75);
s3.addGrade(97);
s4.addGrade(100);
s4.addGrade(90);
s4.addGrade(80);
s4.addGrade(70);

const students: Student[] = [s1, s2, s3, s4];

students.forEach((element: Student) =>
    console.log(`name: ${element.name}, Avg=${element.getGradeAvg()}`)
);
