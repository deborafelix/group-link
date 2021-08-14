import { getMongoRepository } from 'typeorm';
import Link from '../entities/Link';

export interface ICreateLinkFields {
    group: string,
    url: string
}

export function create(fields: ICreateLinkFields) {
  const linkRepository = getMongoRepository(Link);
  const { group, url } = fields;
  const link = linkRepository.create({
    group,
    url,
  });
  return linkRepository.save(link);
}

export function readAll() {
  const linkRepository = getMongoRepository(Link);
  return linkRepository.find();
}

export function readOneGroup(group: string) {
  const linkRepository = getMongoRepository(Link);
  return linkRepository.find({ group });
}

export function update(id: string, updatedField: Partial<ICreateLinkFields>) {
  const linkRepository = getMongoRepository(Link);
  return linkRepository.updateOne({
    id,
  }, updatedField);
}

export function remove(id: string) {
  const linkRepository = getMongoRepository(Link);
  return linkRepository.deleteOne({ id });
}
