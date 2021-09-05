import { MongoRepository } from 'typeorm';
import Link from '../entities/Link';

class RemoveLinkService {
  linkRepository: MongoRepository<Link>

  constructor(linkRepository: MongoRepository<Link>) {
    this.linkRepository = linkRepository;
  }

  async execute(id: string) {
    const link = await this.linkRepository.findOne(id);
    await this.linkRepository.remove(link);
  }
}

export default RemoveLinkService;
