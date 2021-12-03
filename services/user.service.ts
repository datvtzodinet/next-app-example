import AxiosClient from './axiosService';
import { User } from '../models/user.model';

class UserService extends AxiosClient {
    public constructor() {
        super();
    }

    private readonly BASE_URL = '/users';

    public async getUsers(): Promise<User[]> {
        console.log(process.env.API_URL);
        return this.client.get<User[]>(this.BASE_URL);
    }
}

const userService = new UserService();

export default userService;
