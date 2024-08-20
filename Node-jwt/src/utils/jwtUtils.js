const { secretKey } = require("../configuration/jwtConfig");
const jwt = require("jsonwebtoken");

function generateToken(user) {

    if (!user || !user._id || !user.email || !user.role) {
        throw new Error('Invalid user object');
    }
    // const { secretKey } = require("../configuration/jwtConfig")

    const payload = {
        id: user._id,
        email: user.email,
        role: user.role
    };
    return jwt.sign(payload, secretKey, { expiresIn: "1h" });
}

module.exports = {
    generateToken
};
