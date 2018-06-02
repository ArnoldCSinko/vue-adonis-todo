class AuthService {
    verifyPermission(resource, user) {
        if(resource.user_id !== user.id) {
            throw new Error(); // invalid access exception
        }
    }
}

module.exports = AuthService;