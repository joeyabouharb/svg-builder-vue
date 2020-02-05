const numberTest = (val) => !Object.is(Number(val), NaN);
const coordTest = (coord) => {
  const points = coord.split(',');
  return points.length === 2
    ? points.every(point => numberTest(point))
    : false;
};

const Attrs = {
  c: {
    name: "circle",
    attrs: ['cx', 'cy', 'r'],
    constraint: '3',
    props: [],
    type: 'Number',
    isValidLength: function (length) {
      return length === this.attrs.length
    },
    isValidAttrs: (params) => params.every(
        (value) => numberTest(value)
      ),
  },
  r: {
    name: "rect",
    attrs: ['x', 'y', 'width', 'height'],
    props: [],
    constraint: '4',
    type: 'Number',
    isValidLength: function (length) {
      return length === this.attrs.length;
    },
    isValidAttrs: (params) => params.every(
      (value) => numberTest(value)
    ),
  },
  p: {
    name: 'polygon',
    attrs: ['points'],
    constraint: '3 or more',
    type: 'Coordinate',
    props: [],
    isValidLength: function (length) {
      return length > this.attrs.length;
    },
    isValidAttrs: (params) => params.every(
      (value) => coordTest(value)
    ),
  },
  t: {
    name: "text",
    attrs: ['x', 'y'],
    constraint: "3 or more",
    type: 'Number',
    props: ['tspan'],
    isValidLength: function (length) {
      return length > this.attrs.length;
    },
    isValidAttrs: function (params) {
      const attrs = params.slice(1, this.attrs.length);
      return attrs.every(
        (value) => numberTest(value)
      );
    },
    getPropsFrom: function (params) {
      const props = params.slice(this.attrs.length).join(" ");
      
      return this.props.reduce((obj, value) => [
        ...obj, [value, props],
      ], []);
    }
  }
};
export default Attrs;
