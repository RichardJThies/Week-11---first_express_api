import axios from 'axios'

let base = 'api'

export default {//"export default" provides a function with getHelloMessage name
    getHelloMessage(){
        return axios.get(base).then(response => {//axios call, makes get request to API
            return response.data//converted response into JSON
        })
    }
}
















