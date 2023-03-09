import {createStore } from 'vuex'

import useUpload from './modules/upload'
import useAuth from './modules/auth'

const store = createStore({
    modules: {
        upload: useUpload,
        auth: useAuth,
    }
})

export default store;