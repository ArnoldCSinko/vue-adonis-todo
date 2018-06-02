'use strict'

class UserController {
    register({ request }) {
        const { email, password } = request.all();
        return {
            message: 'Registration',
        }
    };
}

module.exports = UserController
