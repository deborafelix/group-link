const LinksSchema = require('../data/link-db')

        
function create(fields) {
    const { group, url } = fields
    return LinksSchema.create({
        group,
        url
    })
}

function readAll() {
    return LinksSchema.find()
}

function readOneGroup(group) {
    return LinksSchema.find({ group })
}

function update(id, updatedField) {
    return LinksSchema.updateOne({
        _id: id
    }, updatedField)
}

function remove(id) {
    return LinksSchema.deleteOne({ _id: id})
}

module.exports = {
    create,
    readAll,
    readOneGroup,
    update,
    remove
}