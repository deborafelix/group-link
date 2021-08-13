import { Request, Response } from 'express';

export interface IRequestPayload {
    body: Record<string, any>,
    params: Record<string, any>,
    query: Record<string, any>
}

export function adapt(fn: Function) {
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
