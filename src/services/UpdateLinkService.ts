import { MongoRepository } from 'typeorm';
import Link from '../entities/Link';
import ICreateLinkFields from '../interfaces/CreateLinkFieldsInterface';

class UpdateLinkService {
  linkRepository: MongoRepository<Link>

  constructor(linkRepository: MongoRepository<Link>) {
    this.linkRepository = linkRepository;
  }

  async execute(id: string, updatedField: Partial<ICreateLinkFields>) {
    const link = await this.linkRepository.findOne({id, userId: updatedField.userId});
    const updatedLink = {...link, ...updatedField}
    await this.linkRepository.save(updatedLink);
  }
}

export default UpdateLinkService;
