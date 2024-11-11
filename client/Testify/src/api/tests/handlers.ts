import { instance } from "../instance"



export const getTests = async (): Promise<any> => {
    const res = await instance.get("tests/get")

    return res.data
}

export const setResultServer = async (userId: string, result: number): Promise<any> => {
    try {
        const res = await instance.patch("tests/result", {
            userId,
            result
        })


        return res.data
    } catch (error: any) {
        return error.response.data.message
    }
}