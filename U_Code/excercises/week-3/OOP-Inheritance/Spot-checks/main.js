class Person {
    constructor(name, startYear) {
        this.name = name;
        this.startYear = startYear;
        this.courses = [];
    }

    addCourse(course) {
        this.courses.push(course);
    }
}

class Student extends Person {
    constructor(name, startYear) {
        super(name, startYear);
        this.grades = [];
    }

    receiveGrade(courseName, finalGrade) {
        this.grades.push({
            course: courseName,
            grade: finalGrade,
        });
    }
}

class Teacher extends Person {
    constructor(name, startYear, salary) {
        super(name, startYear);
        this.salary = salary;
        this.grades = [];
        this.courses = {};
    }

    giveGrade(student, courseName, finalGrade) {
        student.receiveGrade(courseName, finalGrade);
    }
    addCourse(course) {
        if (this.courses[course]) {
            this.courses[course]++;
        } else {
            this.courses[course] = 1;
        }
    }
}

// const s1 = new Student("Ronda", 2017);
// const t1 = new Teacher("Cassandra", 2002, 40000);

// t1.giveGrade(s1, "Algebra II", 82);
// const firstGrade = s1.grades[0];

// console.log(
//     `${s1.name} received an ${firstGrade.grade} in ${firstGrade.course}`
// );
// //above should print "Ronda received an 82 in Algebra II"

const t1 = new Teacher("Cassandra", 2002, 40000);
t1.addCourse("Algebra II");
t1.addCourse("Algebra II");
t1.addCourse("Trigonometry");
console.log(t1.courses); //should print {Algebra II: 2, Trigonometry: 1}

class TeachingAssistant extends Teacher {
    constructor(name, startYear, salary) {
        super(name, startYear, salary);
    }
}

const ta1 = new TeachingAssistant("Brandon", 2014, 20000);
console.log(ta1.toString());
console.log(ta1);

class Page {
    constructor(text) {
        this.text = text;
    }
}

class Notebook {
    constructor(pageNum) {
        this.pageNum = pageNum;
        this.pages = [];
    }

    write(page) {
        this.pages.push(page);
    }
}

class Diary extends Notebook {
    constructor(pageNum, owner) {
        super(pageNum);
        this.owner = owner;
    }
}

const myDiary = new Diary(50, "Shila");
const mathNotebook = new Notebook(200);
const p1 = new Page(
    "Pythagoreas realized tha the sum of the squares of the sides of a right triangle will equal the square of the hypoteneuse"
);
myDiary.pages.push(new Page("I think I'm in love with a Greek man."));

console.log(myDiary.pages[0].text);

// console.log(mathNotebook.pages[0]);

const e = new Diary();
