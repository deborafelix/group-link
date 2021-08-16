import { Request, Response } from 'express';
import IRequestPayload from './interfaces/RequestPayloadInterface';

export default function adapt(fn: Function) {
  return async (req: Request, res: Response) => {
    try {
      const { body, params, query } = req;
      const payload: IRequestPayload = { body, params, query };
      const result = await fn(payload);
      return res.status(result.statusCode).json(result.data);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };
}
