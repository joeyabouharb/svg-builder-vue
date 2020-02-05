<template>
    <div class="svg-view">
      <figure class="centered">
        <h2 class="center-text">Result:</h2>
          <svg
            version="1.1"
            width="250px"
            height="250px"
            xmlns="http://www.w3.org/2000/svg"
            style="border: solid 1px; margin-top: 1rem;"
          >
            <svgElement
              v-for="(shape, index) in drawing"
              v-bind:key="index + shape.name"
              v-bind:index="index"
              v-bind:styles="shape.style"
              v-bind:props="shape.props"
              v-bind:name="shape.name"
              v-bind:attrs="shape.attrs">
            </svgElement>
          </svg>
      </figure>
    </div>
</template>

<script>
import Vue from 'vue';
import svgElement from './svgElement';

export default Vue.extend({
  name: 'SvgView',
  props: {
    drawing: {
      type: Array,
    },
  },
  components: {
    svgElement,
  },
});
</script>

<style>
.svg-view {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  flex-grow: 1;
}
.centered {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin: 0.5rem;
  padding: .5rem .5rem 2.5rem .5rem;
  border-radius: 10px;
  -webkit-box-shadow: -11px 12px 22px -7px rgba(87,64,64,1);
  -moz-box-shadow: -11px 12px 22px -7px rgba(87,64,64,1);
  box-shadow: -11px 12px 22px -7px rgba(87,64,64,1);
}
</style>