import ListAllLinksService from '../services/ListAllLinksService';

class ListAllLinksController {
  async handle() {
    const listAllLinksService = new ListAllLinksService();
    const result = await listAllLinksService.execute();

    return {
      statusCode: 200,
      data: result,
    };
  }
}

export default ListAllLinksController;
