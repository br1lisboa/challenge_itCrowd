import axios from 'axios';

const MI_URL_BASE = "http://localhost:5000/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWJhNjViZTFkOTBhNjkzYzQ1OTE1OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTcxNDAxNCwiZXhwIjoxNjU5OTczMjE0fQ.8eJ9cye_jNBEUTbvQxGe3Q_cLj9fTDKCFmgqoIT4Ydc"

export const publicRequest = axios.create({
    baseURL: MI_URL_BASE,
})

export const userRequest = axios.create({
    baseURL: MI_URL_BASE,
    header:{token:`Bearer ${TOKEN}`}
})