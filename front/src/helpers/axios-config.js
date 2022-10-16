import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://inventario-back-andres-cortes.herokuapp.com/'
})

export {
    axiosInstance
}