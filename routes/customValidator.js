const { check, query, validationResult } = require("express-validator");

var checkId = [
    check("id").isLength({ min: 5 }),
    query("title")
        .not()
        .isEmpty()
        .withMessage("missing parameter : title")
];

const validResult = function(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errorsa.array() });
        next(errors);
    } else next();
};

module.exports = {
    checkId,
    validResult
};
