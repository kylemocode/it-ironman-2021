import { useState, useEffect, useRef } from 'react';
import isEqual from 'lodash/isEqual';

const LOCAL_CACHE = {};

function hashArgs(...args) {
  return args.reduce((acc, arg) => stringify(arg) + ':' + acc, '');
}

function stringify(val) {
  return typeof val === 'object' ? JSON.stringify(val) : String(val);
}

export default function useStaleWhileRevalidate(fn, args, defaultValue = []) {
  const prevArgs = useRef(null);
  const [data, setData] = useState(defaultValue);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // args is an object so deep compare to rule out false changes
    if (isEqual(args, prevArgs.current)) {
      return;
    }
    // cacheID is how a cache is identified against a unique request
    const cacheID = hashArgs(fn.name, ...args);
    // look in cache and set response if present
    if (LOCAL_CACHE[cacheID] !== undefined) {
      setData(LOCAL_CACHE[cacheID]);
      setLoading(false);
    } else {
      // else make sure loading set to true
      setLoading(true);
    }
    // fetch new data
    fn(...args).then((newData) => {
      LOCAL_CACHE[cacheID] = newData;
      setData(newData);
      setLoading(false);
    });
  }, [args, fn]);

  useEffect(() => {
    prevArgs.current = args;
  });

  return [data, isLoading];
}
