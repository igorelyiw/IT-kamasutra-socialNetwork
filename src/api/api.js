import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "0e25fb27-1168-462c-bca4-7e0c4e17c3be"
    }
})

export const usersAPI = {
    
    getUsers(currentPage = 1, pageSize = 10) {
        
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)

    }
}
export const followAPI = {
    postFollow(id) {
        return instance.post(`follow/${id}`).then(responce => {
            return responce.data
        })
    },
    deleteFollow(id) {
        return instance.delete(`follow/${id}`).then(responce => {
            return responce.data
        })

    }
    

    
}

export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`).then(responce => {
            return responce.data
        })
    },
    login(email,password,rememberMe=false){
        return instance.post(`auth/login`,{email,password,rememberMe}).then(responce=>{
            return responce.data
        })
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(responce => {
            return responce.data
        })
    },
    getUserStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`,{status})
    },
    updatePhoto(file) {
        const formData=new FormData();
        formData.append('image',file);
        return instance.put('profile/photo',formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
    }}

