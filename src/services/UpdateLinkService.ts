import { getMongoRepository } from 'typeorm';
import Link from '../entities/Link';
import ICreateLinkFields from '../interfaces/CreateLinkFieldsInterface';

class UpdateLinkService {
  async execute(id: string, updatedField: Partial<ICreateLinkFields>) {
    const linkRepository = getMongoRepository(Link);
    return linkRepository.updateOne({
      id,
    }, updatedField);
  }
}

export default UpdateLinkService;
