export default interface IRequestPayload {
  body: Record<string, any>,
  params: Record<string, any>,
  query: Record<string, any>
};
