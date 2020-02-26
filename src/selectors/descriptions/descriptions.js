

// export default (descriptions) => {
//   return descriptions.map((desc) => {
//     return desc.description;
//   }).sort((a, b) => {
//       return a.description < b.description ? 1 : -1;
//   });
// };

export default (descriptions) => {
  let sortedArray = descriptions.map((desc) => {
    return desc.description;
  }).sort();
  sortedArray.unshift('None Selected', 'Rent')
  return sortedArray
};
