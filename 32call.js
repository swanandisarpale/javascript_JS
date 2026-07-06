function greet(city) {
  console.log(this.name, city);
}

const user = {
  name: "John"
};

greet.call(user, "Mumbai");