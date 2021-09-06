import { MongoRepository } from 'typeorm';
import Link from '../entities/Link';
import ICreateLinkFields from '../interfaces/CreateLinkFieldsInterface';

class CreateLinkService {
  linkRepository: MongoRepository<Link>

  constructor(linkRepository: MongoRepository<Link>) {
    this.linkRepository = linkRepository;
  }

  async execute(fields: ICreateLinkFields): Promise<Link | null> {
    const {
      userId,
      title,
      icon,
      url,
      description,
    } = fields;
    const isNewGroupLink = await this.linkRepository.find({
      userId,
      url,
    });
    if (isNewGroupLink.length > 0) {
      return null;
    }
    const link = this.linkRepository.create({
      userId,
      title,
      icon,
      url,
      description,
    });
    return this.linkRepository.save(link);
  }
}

export default CreateLinkService;
