class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  whoIsOlder = function (otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} is older then ${otherUser.firstName}`;
    } else {
      return `${this.firstName} is not older then ${otherUser.firstName}`;
    }
  };
}

const userX = new User("Francesco", "Totti", 45, "Roma");
const userY = new User("Steven", "Gerrard", 48, "Liverpool");

console.log(userX);
console.log(userY);

console.log(userX.whoIsOlder(userY));
console.log(userY.whoIsOlder(userX));
