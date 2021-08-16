import { getMongoRepository } from 'typeorm';
import Link from '../entities/Link';

class ListOneGroupService {
  async execute(group: string) {
    const linkRepository = getMongoRepository(Link);
    return linkRepository.find({ group });
  }
}

export default ListOneGroupService;
