export const isTruthyObj = (obj: object) => {
  return !!Object.keys(obj).length;
};

export function api<T>(url: string): Promise<T> {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
