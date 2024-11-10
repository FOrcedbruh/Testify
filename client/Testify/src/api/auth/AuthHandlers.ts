import { instance } from "../instance"

export const registration = async (login: string, password: string): Promise<any> => {
    try {
        const res = await instance.post("auth/registration", {
            login, password
        })

        return res.data
    } catch (error: any) {
        return error.response.data.message
    }
}


export const login = async (login: string, password: string): Promise<any> => {
    try {
        const res = await instance.post("auth/login", {
            login, password
        })

        return res.data
    } catch (error: any) {
        return error.response.data.message
    }
}

export const logout = async () => {
    const res = await instance.post("auth/logout")

    return res.data
}