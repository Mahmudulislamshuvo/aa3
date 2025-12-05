/**
 * ডাটা এবং সিলেক্ট করা ক্যাটাগরি নিয়ে ফিল্টার করে
 * @param {Array} data - যে অ্যারে ফিল্টার করতে হবে
 * @param {String|null} selectedCategory - সিলেক্ট করা ক্যাটাগরির নাম
 * @returns {Array} - ফিল্টার করা ডাটা অথবা সব ডাটা
 */
export const getFilteredData = (data, selectedCategory) => {
  if (!selectedCategory) {
    return data;
  }
  return data.filter((item) => item.category === selectedCategory);
};
