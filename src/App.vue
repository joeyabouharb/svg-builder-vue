<template>
  <div class="container">
    <helpPrompt
      v-show="helpDialog"
      @close="closeDialog"
    >
    </helpPrompt>
    <h1 class="center-text">SVG Generator</h1>
  <div class="container flex">
  <SvgView v-bind:drawing="drawing"></SvgView>
  <FormView
    v-bind:drawing="drawing"
    @updateDrawing="onDrawingUpdate"
    @open="openDialog"
  >
  </FormView>
  </div>
  </div>
</template>

<script>
import Vue from "vue";
import SvgView from './components/svgView'
import FormView from './components/formView';
import helpPrompt from './components/helpPrompt';

export default Vue.extend({
  name: "app",
  data() {
    return {
      drawing: [],
      helpDialog: false,
    };
  },
  components: {
    SvgView,
    FormView,
    helpPrompt,
  },
  methods: {
    onDrawingUpdate(drawing) {
      this.drawing = drawing;
    },
    openDialog() {
      this.helpDialog = true;
    },
    closeDialog() {
      this.helpDialog = false;
    }
  }
}); 
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
}

body {
  background-color:aquamarine
}

h1 {
  font-size: 2.7rem;
}
h2 {
  font-size: 2.2rem;
}

h3 {
  font-size: 1.8rem;
}
h4 {
  font-size: 1.3rem;
}
h5 {
  font-size: 1rem;
}
.center-text {
  text-align: center;
}
</style>

<style scoped>
.container {
  margin: 0.5rem;
}
.flex {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  flex-flow: wrap;
}
</style>
