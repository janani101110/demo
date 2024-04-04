import axios from 'axios'

const URL= "http://localhost:3030/api/v1/questions"


export const getQuestions = async ()=>{
    try {
        const response = await axios.get(URL)
        // console.log(response.data)
        return response.data

    } catch (error) {
        console.log(error)
        throw new Error("Error during request setup");
    }
}

export const getAQuestion = async (qID)=>{
    try {
        const response = await axios.get(`${URL}/${qID}`)
        // console.log(response.data)
        return response.data

    } catch (error) {
        console.log(error)
        throw new Error("Error during request setup");
    }
}

export const incrementViewCount = async (postId, viewCount)=>{
    try {
        const response = await axios.put(`${URL}/views/${postId}`, {viewCount})
        // console.log(response.data)
        return response

    } catch (error) {
        console.log(error)
        throw new Error("Error during request setup");
    }
}

