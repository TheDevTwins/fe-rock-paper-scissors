export type IndexedArray<T> = {
  [pk: string]: T;
};

export function convertToIndexedArray<T>(
  arr: (T & { id: number })[]
): IndexedArray<T> {
  return arr.reduce((p, o) => ({ ...p, [o.id]: o }), {});
}

export function addElementToIndexedArray<T>(
  arr: IndexedArray<T>,
  obj: T & { id: number }
): void {
  Object.assign(arr, { [obj.id]: obj });
}
