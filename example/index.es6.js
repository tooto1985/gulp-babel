class Player {
	constructor(name) {
		this.name = name;
	}
}

class User extends Player {
	constructor(name,age) {
		super(name)
		this.age = age;
	}	
}
var a = new User("Mark",30);
console.log(a.age);

