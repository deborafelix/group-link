import { MongoRepository } from 'typeorm';
import Link from '../entities/Link';

class ListAllLinksService {
  linkRepository: MongoRepository<Link>

  constructor(linkRepository: MongoRepository<Link>) {
    this.linkRepository = linkRepository;
  }

  async execute(userId: string) {
    return this.linkRepository.find({userId});
  }
}

export default ListAllLinksService;
