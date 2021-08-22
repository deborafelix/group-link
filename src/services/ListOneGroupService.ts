import { MongoRepository } from 'typeorm';
import Link from '../entities/Link';

class ListOneGroupService {
  linkRepository: MongoRepository<Link>

  constructor(linkRepository: MongoRepository<Link>) {
    this.linkRepository = linkRepository;
  }

  async execute(group: string) {
    return this.linkRepository.find({ group });
  }
}

export default ListOneGroupService;
