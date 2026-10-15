import { serverMutation } from "../actions.js"
import { baseUrl } from "../baseUrl.js"



export const addCourse = async(data)=>{
    const addC = await serverMutation('/course/add', 'POST',data )
    return addC
}

export const getCourseDetails = async(id)=>{
    const res = await fetch(`${baseUrl}/course/${id}`)
    return await res.json()
}

