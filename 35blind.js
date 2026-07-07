function greet() {
  console.log(this.name);
}

const user = {
  name: "Alex"
};

const fn = greet.bind(user);

fn();