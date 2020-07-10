import axios from 'axios'

const BaseUrl = 'http://localhost:3001/api'

async function get(path: string) {
    const url = BaseUrl + path
    return axios.get(url)
}

export async function fetchGifs(searchTerm: string): Promise<any> {
    const queryString = `?searchTerm=${searchTerm}`
    return get(`/search${queryString}`)
}
