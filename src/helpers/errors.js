const Error = {
  IncorrectShape: {
    error: 'Incorrect shape type! Enter "r", "c", "t" or "p" to draw shapes.'
  },
  Malformed: (shape) => (
    { error: `${shape.type} types only for ${shape.name}`
  }),
  InsufficientParamaters: (shape) => ({
    error: `${shape.constraint} atrributes needed for ${shape.name}`
  }),
  NoInputEntered: {
    error: 'No Input Entered'
  },
  InvalidProps: (shape) => ({
    error: `no props inputted for ${shape.name}`
  }),
};

export default Error;