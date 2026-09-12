function debounce(func, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function search(query) {
    console.log("Searching for:", query);
}

const optimizedSearch = debounce(search, 500);

optimizedSearch("Java");
optimizedSearch("JavaScript");
optimizedSearch("JavaScript Course");