import { IRequestPayload } from '../express-adapter';
import ListOneGroupService from '../services/ListOneGroupService';

class ListOneGroupController {
  async handle(payload: IRequestPayload) {
    const listOneGroupService = new ListOneGroupService();
    const { group } = payload.params;
    const result = await listOneGroupService.execute(group);

    return {
      statusCode: 200,
      data: result,
    };
  }
}

export default ListOneGroupController;
