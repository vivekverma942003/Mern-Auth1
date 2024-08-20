const userService = require("../services/user");

async function getUsers(req, res) {
    try {
        const users = await userService.getUser();
        res.json(users);
    }
    catch (err) {
        res.status(401).json({
            message: "Error has occurred int the controller and user section"
        })
    }

}

module.exports = {
    getUsers
}