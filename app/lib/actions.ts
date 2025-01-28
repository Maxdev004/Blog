"use server"

import { auth } from "@/auth"

export const crearePitch = async ( state: any, form: FormData, pitch: string) => {
    const session = await auth()
}

export default crearePitch