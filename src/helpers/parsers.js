import Attrs from './locals';
import Error from './errors';

export const parser = (input) => {
  const text = input.toLowerCase().trim();
  if (!text) {
    return Error.NoInputEntered;
  }
  const [type, ...params] = text.split(' ');
  const shape = Attrs[type];
  if (!shape) {
    return Error.IncorrectShape;
  }
  if (!shape.isValidLength(params.length)) {
    console.log('hmm')
    return Error.InsufficientParamaters(shape)
  }
  if (!shape.isValidAttrs(params)) {
    return Error.Malformed(shape);
  }
  if (shape.type === 'Coordinate') {
    return [shape, [params.join(" ")]]
  }
  return [shape, params];
}

export const getParams = (shape, params) => {
  const attrs = shape.attrs.reduce((obj, value, index) => ({
    ...obj, [value]: params[index]
  }), {});
  const props = shape.props.length ? shape.getPropsFrom(params) : [];
  return [attrs, props];
}

export const getSvgStyle = () => {
  const genColor = () => {
    const RGBlist = Array.from({ length: 3}, (v,k) => {
    const random = Math.floor(Math.random() * 256);
    return random
    });
    return `rgb(${RGBlist.join(", ")})`
  };
  const generateStrokeWidth = () => Math.floor(Math.random() * 4).toString();
  const generateOpacity = () => (Math.random() * 2).toString(); 

  return {
    fill: genColor(),
    stroke: genColor(),
    'stroke-width': generateStrokeWidth(),
    'fill-opacity': generateOpacity(),
    'stroke-opacity': generateOpacity(),
  };
}

