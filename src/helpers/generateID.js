const generateID = (source = []) => {
  const ids = source.reduce((result, item) => [...result, item.id], []);
  return ids.length ? Math.max(...ids) + 1 : 0;
};

export default generateID;
