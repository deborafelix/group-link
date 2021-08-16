import { getMongoRepository } from 'typeorm';
import Link from '../entities/Link';

class RemoveLinkService {
  async execute(id: string) {
    const linkRepository = getMongoRepository(Link);
    return linkRepository.deleteOne({ id });
  }
}

export default RemoveLinkService;
