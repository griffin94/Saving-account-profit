const getInputType = (key) =>
  key.toLowerCase().includes('date') ? 'date' : 'number';

export default getInputType;
