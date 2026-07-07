function greet(city) {
  console.log(this.name, city);
}

const user = {
  name: "Sam"
};

greet.apply(user, ["Delhi"]);