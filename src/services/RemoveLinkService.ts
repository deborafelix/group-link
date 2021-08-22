import { MongoRepository } from 'typeorm';
import Link from '../entities/Link';

class RemoveLinkService {
  linkRepository: MongoRepository<Link>

  constructor(linkRepository: MongoRepository<Link>) {
    this.linkRepository = linkRepository;
  }

  async execute(id: string) {
    await this.linkRepository.deleteOne({ id });
  }
}

export default RemoveLinkService;
