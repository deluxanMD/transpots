export const insertInto = <T>(index: number, items: T[], newItem: T): T[] => {
  return [...items.slice(0, index), newItem, ...items.slice(index)]
}
