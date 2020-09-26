import openurl from 'openurl';

const encodeParams = function (params: Record<string, any>): string {
  if (!Object.keys(params).length) return '';

  return Object.keys(params).reduce(function (
    encoded: string,
    key: string,
    index: number,
  ) {
    encoded += index === 0 ? '?' : '&';
    encoded += `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
    return encoded;
  },
  '');
};

export const sendCommand = function (
  command: string,
  params = {},
  openUrl = openurl.open as Function,
) {
  const encodedParams = encodeParams(params || {});
  const url = `things:///${command}${encodedParams}`;
  openUrl(url);
};
