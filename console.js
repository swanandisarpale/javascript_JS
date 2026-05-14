function parent(name) {
    function hello() {
        return "hello " + name;
    }

    function gm() {
        return "good morning " + name;
    }

    function gn() {
        return "good night " + name;
    }

    return [gm, gn, hello]; // returns array (like tuple in Python)
}

function main() {
    let [a, b, c] = parent("sanu"); // destructuring

    console.log(a()); 
    console.log(b()); 
    console.log(c()); 
}

main();