import openurl from 'openurl';
import { TodoJson, ProjectJson } from './types';

export const sendJson = function (
  data = [] as Array<ProjectJson | TodoJson>,
  openUrl = openurl.open as Function,
) {
  const url = `things:///json?data=${encodeURIComponent(JSON.stringify(data))}`;
  openUrl(url);
};
