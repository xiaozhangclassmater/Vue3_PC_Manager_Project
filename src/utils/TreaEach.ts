const TreeList: object[] = [];
export function TreeEach(ArrayList: []) {
  ArrayList.forEach((item: any) => {
    if (item.children) {
      TreeEach(item.children);
    }
    TreeList.push(item);
  });
  return TreeList;
}
