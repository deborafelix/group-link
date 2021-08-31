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
      title,
      icon,
      url,
      description,
      group,
      fav,
    } = fields;
    const isNewGroupLink = await this.linkRepository.find({
      group,
      url,
    });
    if (isNewGroupLink.length > 0) {
      return null;
    }
    const link = this.linkRepository.create({
      title,
      icon,
      url,
      description,
      group,
      fav,
    });
    return this.linkRepository.save(link);
  }
}

export default CreateLinkService;
