import { MongoRepository } from 'typeorm';
import User from '../entities/User';
import ILoginFields from '../interfaces/LoginInterface';
import jwt from "jsonwebtoken";

class LoginService {
  userRepository: MongoRepository<User>

  constructor(userRepository: MongoRepository<User>) {
    this.userRepository = userRepository;
  }

  async execute(fields: ILoginFields): Promise<string | null> {
    const {
      email,
      password
    } = fields;
    const user = await this.userRepository.findOne({
      email
    });
    if (!user) {
      return null;
    }
    const isValid = await user.verifyPassword(password);
    if(!isValid) {
        return null
    }
    return jwt.sign({ userId: user.id }, 'grouplink');
  }
}

export default LoginService;
