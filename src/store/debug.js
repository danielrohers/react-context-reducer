
const withDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;

const devTools = withDevTools && window.__REDUX_DEVTOOLS_EXTENSION__.connect();

const debug = (type, state) => {
  if (withDevTools) {
    devTools.send(type, state);
    return;
  }

  console.debug('store', state);
}

export { debug };
