import axios, {
    AxiosInstance,
    AxiosResponse,
    InternalAxiosRequestConfig
} from 'axios'


class ApiError extends Error{
    status:number
    constructor(message:string, status:number ,){
        super(message)
        this.status = status
    }
}

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: {
        'Content-Type': 'application/json'
    }
})

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.set(`Authorization`, `Bearer ${token}`)
    }
    return config
})



api.interceptors.response.use((response: AxiosResponse) => {
    // Se não tiver erro na requisição, ele retorna o valor normal
    return response
},
    async (error) => {
        const originalResquest = error.config

        if (error.response) {
            const { status } = error.response

            if (status === 401 && originalResquest.header.Authorization) {
                const refresjToken = await api.post<{ token: string }>(
                    '/refresh-token',
                    {
                        token: localStorage.getItem('refreshToken'),
                    }
                )
                const newToken = refresjToken.data.token
                localStorage.setItem('token', newToken)
                originalResquest.header.Authorization = `Bearer ${newToken}`
                return api(originalResquest)
            }
            
            if (status === 403){
                alert("Você não tem acesso a essa tela")
                window.history.back();
                const erroAcessoNegado = new ApiError("Acesso Negado", status )
                return Promise.reject(erroAcessoNegado)
            }


            if (status >= 400) {
                console.log(originalResquest)
                console.log(error)
                return Promise.reject(
                    new Error(
                        JSON.stringify({
                            status,
                            message: error.response.data?.message || 'Erro desconhecido',
                        })
                    )
                )

            }
        }
    }

)

export default api
