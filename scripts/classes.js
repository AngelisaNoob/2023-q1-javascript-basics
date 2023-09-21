class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	getFullName() {
		let fullName = `${this.firstName} ${this.lastName}`;
		// this is hte same as: this.firstName + "" + this.lastName
		return fullName;
	}
}

// Student inherits, or extends, the Person class
class Student extends Person {
	constructor(firstName, lastName, grade) {
		super(firstName, lastName);
		this.grade = grade;
	}
}

let p1 = new Person("Jamal", "Davis");
let s1 = new Student("Ben", "Dover");

p1.firstName = "Moe";
console.log(p1.getFullName());
console.log(s1.getFullName());
