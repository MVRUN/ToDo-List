export function getTest(key: string): { value: string; id: number }[] {
  const localStorageTasksData = localStorage.getItem(key);
  let tempArr = [];
  if (localStorageTasksData) {
    tempArr = JSON.parse(localStorageTasksData);
  }
  return tempArr;
}
export function postTest(key: string, arr: { value: string; id: number }[]): void {
  const localeStorage = window.localStorage;
  localeStorage.setItem(key, JSON.stringify(arr));
}
