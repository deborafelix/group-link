import { MongoRepository } from 'typeorm';
import Link from '../entities/Link';

class ListAllLinksService {
  linkRepository: MongoRepository<Link>

  constructor(linkRepository: MongoRepository<Link>) {
    this.linkRepository = linkRepository;
  }

  async execute() {
    return this.linkRepository.find();
  }
}

export default ListAllLinksService;
