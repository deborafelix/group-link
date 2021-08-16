import { getMongoRepository } from 'typeorm';
import Link from '../entities/Link';
import ICreateLinkFields from '../interfaces/CreateLinkFieldsInterface';

class CreateLinkService {
  async execute(fields: ICreateLinkFields) {
    const linkRepository = getMongoRepository(Link);
    const { group, url } = fields;
    const link = linkRepository.create({
      group,
      url,
    });
    return linkRepository.save(link);
  }
}

export default CreateLinkService;
