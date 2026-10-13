// 1. Declarar a nova função para o TypeScript não reclamar
declare global {
  interface Map<K, V> {
    getOrInsertComputed(key: K, callback: (key: K) => V): V;
  }
}

// 2. Aplicar o polyfill em JavaScript puro com tipagem
if (typeof Map !== 'undefined' && !Map.prototype.getOrInsertComputed) {
  Map.prototype.getOrInsertComputed = function <K, V>(
    this: Map<K, V>,
    key: K,
    callback: (key: K) => V
  ): V {
    if (this.has(key)) {
      return this.get(key) as V;
    }
    const value = callback(key);
    this.set(key, value);
    return value;
  };
}

export {};