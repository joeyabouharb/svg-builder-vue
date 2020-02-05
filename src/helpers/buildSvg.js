import { parser, getParams, getSvgStyle } from './parsers';

const buildSvg = (line, lineNumber) => new Promise ((resolve, reject) => {
  const result = parser(line);
  if (result.error) {
    reject({ ...result, lineNumber: lineNumber + 1 });
  }
  const [shape, params] = result;
  const [parameters, props] = getParams(shape, params);
  const style = getSvgStyle();
  const attrs = parameters;
  const { name } = shape;
  resolve({ attrs, style, props, name });
})

export default buildSvg;