import API from "../../configs";

export const getTotalCase = async (callback) => {
    await API.get()
        .then(({ data }) => data && callback(data))
        .catch(error => callback({ error }))
}

export default {
    getTotalCase
}