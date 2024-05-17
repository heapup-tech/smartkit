export function uniqueItemArray<T>(arr: T[], condition: (item: T) => boolean) {
  return arr.reduce<T[]>((acc, cur) => {
    if (!acc.find(condition)) {
      acc.push(cur)
    }
    return acc
  }, [])
}
