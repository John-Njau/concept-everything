import { reactive, readonly } from 'vue'


const state = reactive({
    user: null,
})

const login = async (username, password) => {
    // Make API call to authenticate user
    // If successful, set user state
    // If unsuccessful, throw error
    const user = await api.login(username, password)
    state.user = user

    return user
}

const logout = async () => {
    // Make API call to logout user
    // If successful, set user state to null
    // If unsuccessful, throw error
    await api.logout()
    state.user = null
}

export const useAuth = () => {
    return {
        user: readonly(state.user),
        login,
        logout,
    }
}