import { ProfileType, UsersType, PhotosType } from './../types/types';
import axios, { AxiosPromise } from 'axios'
export type GetItemsType = {
    items: Array<UsersType>
    totalCount: number
    error: string | null
}
type ResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D,
    messages: Array<string>
    resultCode: RC
}
const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "0e25fb27-1168-462c-bca4-7e0c4e17c3be"
    }
})
export const usersAPI = {
    
    getUsers(currentPage: number = 1, pageSize: number = 10,term:string='',friend:null|boolean=null) {

        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}`+ (friend===null?'':`&friend=${friend}`))
    }
    
}
export const followAPI = {
    postFollow(id: number) {
        return instance.post<ResponseType>(`follow/${id}`)
    },
    deleteFollow(id: number) {
        return instance.delete(`follow/${id}`).then(responce => {
            return responce.data
        })
    }

}
export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

type MeResponseType = {
    id: number
    email: string
    login: string
}
type MeLoginType = {
    userId: number

}
type SavePhotosResponseDataType = {
    photos: PhotosType
}
export const authAPI = {
    getAuthMe() {
        return instance.get<ResponseType<MeResponseType>>(`auth/me`).then(response => response.data)

    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<ResponseType<MeLoginType>>(`auth/login`, { email, password, rememberMe }).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`).then(response => response.data)
    },
    getUserStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, { status })
    },
    updatePhoto(file: any) {

        const formData = new FormData();
        formData.append('image', file);
        return instance.put<ResponseType<SavePhotosResponseDataType>>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    }
}

export const newsAPI = {
    getData() {
        return (fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then((response) => response.json())
        )
    }
}
