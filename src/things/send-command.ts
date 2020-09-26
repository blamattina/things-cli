import open from 'open'
import {ChildProcess} from 'child_process'

const encodeParams = function (params: Record<string, any>): string {
  return Object.keys(params).reduce(function (encoded: string, key: string) {
    encoded += `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}&`
    return encoded
  }, '')
}

export const sendCommand = function (command: string, params: Record<string, any>): Promise<ChildProcess> {
  const encodedParams = encodeParams(params)
  const url = `things:///${command}?${encodedParams}`
  return open(url)
}
