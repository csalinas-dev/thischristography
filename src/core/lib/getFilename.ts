const getFilename = (path: string): string | undefined => {
  const paths = path.split("/");
  const file = paths[paths.length - 1];
  const fileParts = file.split('.');
  return fileParts[0];
};

export default getFilename;
