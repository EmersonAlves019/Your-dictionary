export const getFromStorage = (key: string) => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
  return [];
};

export const setToStorage = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
