const service = require('../service/link-service')

async function create(req) {
    const { group, url } = req.body
    const newLink = await service.create({group, url})

    return {
        statusCode: 201,
        data: newLink 
    }
}

async function listAll() {
    const result = await service.readAll()
    return {
        statusCode: 200,
        data: result
    }
}

async function listOneGroup(req) {
    const { group } = req.params
    const result = await service.readOneGroup(group)

    return {
        statusCode: 200,
        data: result 
    }
}

async function updateField(req) {
    const { group, url, id } = req.body
    if (!id) {
        return { statusCode: 400, data: { message: "Missed ID"}}
    }
    if (!group && !url) {
        return { statusCode: 400, data: { message: "Bad Request"}}
    }
    const fields = { group, url }
    const updated =  await service.update(id, fields)
    return { statusCode: 204, data: { message: "Updated"}}
}

async function remove(req) {
    const { id } = req.params
    if (!id) {
        return { statusCode: 400, data: { message: "Missed ID"}}
    }
    await service.remove(id)
    
    return { statusCode: 204, data: { message: "Link is deleted" }}
}

module.exports = {
    create,
    listAll,
    listOneGroup,
    updateField,
    remove
}