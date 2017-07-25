/**
  This file is used to add enhancers. Add Enhancers here
*/
let enhancers = [

];
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

export default enhancers;
