import { getMongoRepository } from 'typeorm';
import Link from '../entities/Link';

class ListAllLinksService {
  async execute() {
    const linkRepository = getMongoRepository(Link);
    return linkRepository.find();
  }
}

export default ListAllLinksService;
