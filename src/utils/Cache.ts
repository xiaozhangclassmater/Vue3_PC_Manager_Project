class LocalCache {
  setCache(key: string, value: unknown) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  getCache(key: string) {
    const value = window.localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }
  removeCache(key: string) {
    window.localStorage.removeItem(key);
  }
}

export default new LocalCache();
