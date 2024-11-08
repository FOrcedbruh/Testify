import { instance } from "../instance"

export const registration = async (login: string, password: string): Promise<any> => {
    try {
        const res = await instance.post("auth/registration", {
            login, password
        })

        return res.data
    } catch (error) {
        console.log(error)
    }
}


export const login = async (login: string, password: string): Promise<any> => {
    try {
        const res = await instance.post("auth/login", {
            login, password
        })

        return res.data
    } catch (error) {
        console.log(error)
    }
}