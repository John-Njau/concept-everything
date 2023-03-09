import { reactive, readonly } from 'vue'


const state = reactive({
    postImg: null,
})

const upload = async (postImg) => {
    // Make API call to authenticate user
    // If successful, set user state
    // If unsuccessful, throw error
    const img = await api.upload(postImg)
    state.postImg = img
}

export const useUpload = () => {
    return {
        postImg: readonly(state.postImg),
        upload,
    }
}

