const InvalidAccessException = use('App/Exceptions/InvalidAccessException');
class AuthorizationService {
    verifyPermission(resource, user) {
        if(resource.user_id !== user.id) {
            throw new InvalidAccessException(); // invalid access exception
        }
    }
}

module.exports = new AuthorizationService();