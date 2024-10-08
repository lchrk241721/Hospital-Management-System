import axios from "axios";
import { createUrl } from "../utils/utils";



export async function getScheduls(id) {
    const url = createUrl(`/doctor/schedules/${id}`)
    console.log('Request URL:', url);
    const token = sessionStorage.getItem("jwt");

    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response
    } catch (ex) {
        return null
    }
}

export async function updateSchedules(id) {
    const url = createUrl(`/schedules/${id}`)
    console.log('Request URL:', url);
    const token = sessionStorage.getItem("jwt");

    try {
        const response = await axios.put(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response
    } catch (ex) {
        return null
    }
}

export async function getAllSchedules(token) {
    const url = createUrl('/schedules');
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (ex) {
        console.error('Error fetching schedule details:', ex);
        return null;
    }
}

export async function addSchedule({
    scheduleDate,
    scheduleTime,
    doctorId,
    departmentId
}
) {
const body = {
    scheduleDate,
    scheduleTime,
    doctorId,
    departmentId
}

    const token = sessionStorage.getItem("jwt")
    const url = createUrl('/schedules')
    try {
        const response = await axios.post(url, body, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response
    } catch (ex) {
        return null
    }

}

export async function deleteSchedule(id) {

    const token = sessionStorage.getItem("jwt")
    const url = createUrl(`/schedules/${id}`)
    try {
        const response = await axios.delete(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response
    } catch (ex) {
        return null
    }  
    
}

