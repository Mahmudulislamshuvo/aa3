/**
 * ডাটা এবং সর্টিং টাইপ নিয়ে তারিখ অনুযায়ী সাজায়
 * @param {Array} data - যে অ্যারে সর্ট করতে হবে
 * @param {String} sortType - 'newest' অথবা 'oldest'
 * @returns {Array} - সর্ট করা ডাটা
 */
export const getSortedData = (data, sortType) => {
  if (!sortType) {
    return data;
  }

  // [...data] ব্যবহার করা হয়েছে যাতে মেইন অ্যারে মিউটেট না হয়
  return [...data].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (sortType === "newest") {
      return dateB - dateA; // বড় তারিখ (নতুন) আগে
    } else if (sortType === "oldest") {
      return dateA - dateB; // ছোট তারিখ (পুরাতন) আগে
    }
    return 0;
  });
};
