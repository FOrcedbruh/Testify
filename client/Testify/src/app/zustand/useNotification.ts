import { create } from "zustand";

interface INotification {
    status: "error" | "warning" | "success"
    text: string
}

interface IStore {
    notification: INotification | null,
    setNotification: (notification: INotification) => void
}


const useNotification = create<IStore>((set) => ({
    notification: null,
    setNotification: (notification: INotification) => set({notification})
}))

export { useNotification };