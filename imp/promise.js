const users = fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json());

const posts = fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json());

Promise.all([users, posts])
    .then(([userData, postData]) => {
        console.log("Users:", userData);
        console.log("Posts:", postData);
    })
    .catch(error => {
        console.log(error);
    });