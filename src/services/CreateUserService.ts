import { MongoRepository } from 'typeorm';
import User from '../entities/User';
import ICreateUserFields from '../interfaces/CreateUserFieldsInterface';

class CreateUserService {
  userRepository: MongoRepository<User>

  constructor(userRepository: MongoRepository<User>) {
    this.userRepository = userRepository;
  }

  async execute(fields: ICreateUserFields): Promise<User | null> {
    const {
      name,
      email,
      password
    } = fields;
    const isNewUser = await this.userRepository.find({
      email
    });
    if (isNewUser.length > 0) {
      return null;
    }
    const user = this.userRepository.create({
        name,
        email,
        password
    });
    await user.generatePassword(password);
    return this.userRepository.save(user);
  }
}

export default CreateUserService;
