import stylish from './stylish.js';

export default (data, formatName) => {
  if (formatName === 'stylish') {
    return stylish(data);
  }
  return 'Unknown format';
};
