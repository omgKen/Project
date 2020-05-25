import axios from 'axios'

let BASEURL = ''

if (process.env.NODE_ENV === 'development') BASEURL = 'https://20200525Mock/table/'

if (process.env.NODE_ENV === 'testing') BASEURL = 'https://20200525Mock/table/test/'

if (process.env.NODE_ENV === 'production') BASEURL = 'https://20200525Mock/table/prod/'

axios.defaults.baseURL = BASEURL

console.log(axios.defaults, axios.defaults.baseURL)

export default axios
