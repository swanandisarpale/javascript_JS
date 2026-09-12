function throttle(func, delay) {
    let waiting = false;

    return function (...args) {
        if (!waiting) {
            func.apply(this, args);
            waiting = true;

            setTimeout(() => {
                waiting = false;
            }, delay);
        }
    };
}

const handleScroll = throttle(() => {
    console.log("Scrolling...");
}, 1000);

window.addEventListener("scroll", handleScroll);