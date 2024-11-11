import { instance } from "../instance"



export const getTests = async (): Promise<any> => {
    const res = await instance.get("tests/get")

    return res.data
}