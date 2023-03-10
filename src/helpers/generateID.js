const generateID = (source = []) => {
  console.log(source);
  const ids = source.map((item) => item.id);
  console.log(ids);
  return (
    Math.max(
      source.reduce((acc, item) => [...acc, item.id]),
      [],
    ) + 1
  );
};

export default generateID;
