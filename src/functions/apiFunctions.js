import axios from "axios";


async function apiFunctions(path, type, data) {
    try {
        let option = {
            method: type,
            url: ((process.env.REACT_APP_My_SERVER_URL + path)),
            data: data
        }
        // console.log("option = ",option);

        return await axios(option)
            .then(
                (data) => {
                    console.log("data from server =", data);
                    return data.data
                },
                (error) => {
                    console.log("error from server =", error);
                    return null
                }
            )

    } catch (err) {
        console.log("err =", err);
        return null;
    }
}


export default apiFunctions;