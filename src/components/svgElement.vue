<script>
export default {
  name: 'svgElement',
  props: ['name', 'attrs', 'styles', 'props'],
  render (createElement) {
    const props = this.props.map(
      ([tag, children]) => createElement(tag, children)
    );
    const el = createElement(
      this.name, {
        attrs: {
          ...this.attrs,
          ...this.styles,
        },   
      }, props,
    );
    return el;
  } 
}
</script>