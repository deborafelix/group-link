import HttpResponse from './HttpInterface';
import IRequestPayload from './RequestPayloadInterface';

export default interface IBaseController {
  handle(payload: IRequestPayload): Promise<HttpResponse>
};
