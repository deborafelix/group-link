import LinksSchema from '../database/link-db';

export interface ICreateLinkFields {
    group: string,
    url: string
}

export function create(fields: ICreateLinkFields) {
  const { group, url } = fields;
  return LinksSchema.create({
    group,
    url,
  });
}

export function readAll() {
  return LinksSchema.find();
}

export function readOneGroup(group: string) {
  return LinksSchema.find({ group });
}

export function update(id: string, updatedField: Partial<ICreateLinkFields>) {
  return LinksSchema.updateOne({
    _id: id,
  }, updatedField);
}

export function remove(id: string) {
  return LinksSchema.deleteOne({ _id: id });
}
