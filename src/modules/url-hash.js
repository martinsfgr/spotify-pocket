import { camelCase } from 'lodash';

export const getInfoFromHashUrl = (urlHash) => {
  if (!urlHash) {
    return { 
      error: 'Acesso negado.'
     };
  }

  return urlHash
    .substring(1)
    .split('&')
    .reduce((accumulator, hash) => {
      const keyValue = hash.split('=');

      accumulator[camelCase(keyValue[0])] = keyValue[1];
      return accumulator;
    }, {});
}
