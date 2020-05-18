const logger = (req, res, next) => {
    console.log(
        `${req.method} ${req.protocol} ${req.host} ${req.originalUrl} is the url`
    )
    next();
}
module.exports = logger