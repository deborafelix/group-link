import { MongoRepository } from 'typeorm';
import User from '../entities/User';
import ICreatedUser from '../interfaces/CreatedUserInterface';
import ICreateUserFields from '../interfaces/CreateUserFieldsInterface';

class CreateUserService {
  userRepository: MongoRepository<User>

  constructor(userRepository: MongoRepository<User>) {
    this.userRepository = userRepository;
  }

  async execute(fields: ICreateUserFields): Promise<ICreatedUser | null> {
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
    await this.userRepository.save(user);
    return {name, email, id: user.id, }
  }
}

export default CreateUserService;
