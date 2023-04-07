import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '893016e89533423ca54a6841bfff43e3'
    }
})