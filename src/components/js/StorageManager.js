export const setLocStorage = (data) => localStorage.setItem('todos', JSON.stringify(data));
export const getLocStorage = () => {
  if (JSON.parse(localStorage.getItem('todos')) === null) {
    return [];
  }
  return JSON.parse(localStorage.getItem('todos'));
};
