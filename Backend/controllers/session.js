module.exports = (req, res, next) => {
    if (!req.session.passport) {
        return res.redirect('/');
    }
    next();
}