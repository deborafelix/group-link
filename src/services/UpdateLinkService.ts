import { MongoRepository } from 'typeorm';
import Link from '../entities/Link';
import ICreateLinkFields from '../interfaces/CreateLinkFieldsInterface';

class UpdateLinkService {
  linkRepository: MongoRepository<Link>

  constructor(linkRepository: MongoRepository<Link>) {
    this.linkRepository = linkRepository;
  }

  async execute(id: string, updatedField: Partial<ICreateLinkFields>) {
    await this.linkRepository.update({
      id,
    }, updatedField);
  }
}

export default UpdateLinkService;
