import axios , {CanceledError} from "axios";
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'df67b66b1b364142b0c73420ccf946fb'
    }
})

export { CanceledError};