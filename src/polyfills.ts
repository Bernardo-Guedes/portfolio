/* eslint-disable @typescript-eslint/no-explicit-any */

// 1. Declarações de Tipos para o TypeScript não gerar alertas vermelhos
declare global {
  interface Map<K, V> {
    getOrInsertComputed(key: K, callback: (key: K) => V): V;
  }
  interface ReadableStream<R = any> {
    [Symbol.asyncIterator](): AsyncIterableIterator<R>;
  }
}

// 2. POLYFILL 1: Correção do Map.prototype.getOrInsertComputed (Erro 1)
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

// 3. POLYFILL 2: Correção do loop assíncrono for await...of no ReadableStream (Erro 2)
if (typeof ReadableStream !== 'undefined' && !ReadableStream.prototype[Symbol.asyncIterator]) {
  ReadableStream.prototype[Symbol.asyncIterator] = function <R>(
    this: ReadableStream<R>
  ): AsyncIterableIterator<R> {
    const reader = this.getReader();
    return {
      async next() {
        try {
          const { done, value } = await reader.read();
          if (done) {
            reader.releaseLock();
            return { done: true, value: undefined };
          }
          return { done: false, value };
        } catch (err) {
          reader.releaseLock();
          throw err;
        }
      },
      async return() {
        reader.releaseLock();
        return { done: true, value: undefined };
      },
      [Symbol.asyncIterator]() {
        return this;
      }
    };
  };
}

export {};
