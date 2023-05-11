exports.sessionCheck = (req, res, next) => {
    if (!req.session.passport) {
        return next();
    }
}