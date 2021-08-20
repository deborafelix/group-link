import { getMongoRepository } from 'typeorm';
import Link from '../entities/Link';
import ICreateLinkFields from '../interfaces/CreateLinkFieldsInterface';

class CreateLinkService {
  async execute(fields: ICreateLinkFields): Promise<Link | null> {
    const linkRepository = getMongoRepository(Link);
    const { group, url } = fields;
    const isNewGroupLink = await linkRepository.find({ group, url });
    if (isNewGroupLink?.length > 0) {
      return null;
    }
    const link = linkRepository.create({
      group,
      url,
    });
    return linkRepository.save(link);
  }
}

export default CreateLinkService;
