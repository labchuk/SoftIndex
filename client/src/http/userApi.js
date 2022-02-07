import $api from './index'

export const createUser = async (newUser) => {
    try {
        const {name,phone,gender,age} = newUser
        const response = await $api.post('/create-user',{name,phone,gender,age})
        return response
    } catch(e) {
        console.log(e)
    }
}
export const getUsers = async () => {
    try {
        const response = await $api.get('/users')
        return response

    } catch(e) {
        console.log(e)
    }
}