export const filterObject = function (include: Record<string, any>) {
  return Object.keys(include).reduce(function (
    acc: Record<string, any>,
    key: string,
  ) {
    const isUndefiend = typeof include[key] === 'undefined';
    const isEmptyArray = Array.isArray(include[key]) && !include[key].length;

    if (!isUndefiend && !isEmptyArray) {
      acc[key] = include[key];
    }

    return acc;
  },
  {});
};
