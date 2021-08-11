const BASE_URL =
  'https://ancient-badlands-86035.herokuapp.com/https://www.metaweather.com/api';

interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

const HttpClient = async <T>(
  endPoint: string,
  method = 'GET',
  params?:
    | string
    | string[][]
    | Record<string, string>
    | URLSearchParams
    | undefined,
): Promise<HttpResponse<T>> => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const url = `${BASE_URL}${endPoint}?${new URLSearchParams(params)}`;

  const options: RequestInit = {
    method,
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-cache',
  };

  const response: HttpResponse<T> = await fetch(url, options);

  response.parsedBody = await response.json();

  if (!response.ok) throw new Error(response.statusText);

  return response;
};

export { HttpClient as default };
