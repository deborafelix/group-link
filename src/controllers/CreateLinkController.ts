import IRequestPayload from '../interfaces/RequestPayloadInterface';
import CreateLinkService from '../services/CreateLinkService';

class CreateLinkController {
  async handle(payload: IRequestPayload) {
    const createLinkService = new CreateLinkService();
    const { group, url } = payload.body;
    const newLink = await createLinkService.execute({ group, url });

    return {
      statusCode: 201,
      data: newLink,
    };
  }
}

export default CreateLinkController;
