import axios from 'axios';

const API_URL = 'http://app2.cikiniproject.id:5005/api/auth/';

class AuthService {
    login(user) {
        return axios.post(API_URL + 'GetToken', {
            email: user.email,
            password: user.password
        }).then(response => {
            if (response.data.accessToken) {
                console.log(response.data);
                localStorage.setItem('user', JSON.stringify(response.data));
            }

            return response.data;
        });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthService();