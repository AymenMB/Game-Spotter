import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
   params: {
    key: '5b28dcc6f1f0450fa87731dd80bbacc7'
   }
})