import { Request, Response } from 'express';
import IBaseController from './interfaces/BaseControllerInterface';
import IRequestPayload from './interfaces/RequestPayloadInterface';

export default function adapt(controller: IBaseController) {
  return async (req: Request, res: Response) => {
    try {
      const { body, params, query } = req;
      const payload: IRequestPayload = { body, params, query };
      const result = await controller.handle(payload);
      return res.status(result.statusCode).json(result.body);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };
}
