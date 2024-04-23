class SessionsRepositoryInMemory {
    constructor() {
        this.users = [
            {
                id: 1,
                name: 'User Test',
                email: 'userTest@example.com',
                password: '$2a$08$/kvCupMgI.sG5vbZVyewX.wTpg5cNpQzDhbciNO5z3hrcblQ6/MXe'
            }
        ]
    }

    async findByEmail(email) {
        const user = this.users.find((user) => user.email === email)

        return user || null
    }
}

module.exports = SessionsRepositoryInMemory
