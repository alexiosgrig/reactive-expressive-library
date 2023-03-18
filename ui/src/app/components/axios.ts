import axios from "axios";

export interface IPapas {
    papades: string
}


const getLocalHost = async () => {
    try {
       const res = await axios.get<IPapas>('http://localhost:3000/')
       return res.data.papades
    }
    catch (error) {
        console.log(error)
    }
}

export default getLocalHost