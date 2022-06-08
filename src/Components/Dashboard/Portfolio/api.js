import axios from 'axios';

export const venueURL="http://localhost:3001/api/v1/venues/"

export const imgCoverUpload = async (data, options) => {
    try {
        await axios.post(venueURL + 'imgCover', data, options);
    } catch (error) {
        throw error;
    }
}
export const getimgCover = async () => {
    try {
            const {data} = await axios.get(venueURL + 'getimgCover');
            return data;
    } catch (error) {
        throw error;
    }
}

export const photosUpload = async (data, options) => {
    try {
        await axios.post(venueURL + 'photos', data, options);
    } catch (error) {
        throw error;
    }
}
export const getphotos = async () => {
    try{
        const {data} = await axios.get(venueURL + 'getphotos');
        return data;
    }catch(error){
        throw error;
    }
}