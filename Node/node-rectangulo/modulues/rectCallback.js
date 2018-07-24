module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        setTimeout(() => {
            callback(new Error("Dimensiones invalidas"), null)
        }, 3000);
    } else {
        setTimeout(() => {
            callback(null, {
                area: () => x * y,
                perimetro: () => (2 * (x + y))
            })
        }, 2000);
    }
    return 1;
}