export const getUniqueCategories = (data) => {
  return [...new Set(data.map((item) => item.category))];
};
