export const getIndexCategoryById = (category, id) => {
  let res = -1
  category.forEach(({ node }, index) => {
    if (node.id === id) res = index
  })
  return res
}
