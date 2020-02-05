<template>
  <div class="form-view">
    <h2 class="center-text">Create Your SVG Here:</h2>
    <form @submit="onSubmit">
      <div class="textarea">
        <label class="option-label">Specify outputs:</label>
        <textarea
          class="textarea-style"
          v-bind:class="{ error: hasError }"
          v-model="text"
          placeholder="eg. c 90 90 30"
        >
        </textarea>
        <div class="danger-label">{{ error }}</div>
      </div>
      <div class="submission">
        <button type="submit" class="submit-button">Submit</button>
        <button type="button" class="info-button" @click="open">Help</button>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from 'vue';
import buildSvg from '../helpers/buildSvg';

export default Vue.extend({
  name: 'FormView',
  data() {
    return {
      text: "",
      error: "",
      hasError: false,
    }
  },
  props: {
    drawing: {
      type: Array,
    },
  },
  methods: {
    onSubmit: function (e) {
      e.preventDefault();
      const lines = this.text.split('\n');
      Promise.all(lines.map((line, lineNumber) => (
        buildSvg(line, lineNumber)
      )))
        .then((drawings) => {
          this.error = '';
          this.$emit('updateDrawing', drawings);
          this.hasError = false;
        })
        .catch(({ error, lineNumber }) => {
          this.error = `${ error } on line: ${lineNumber}`
          this.hasError = true;
        });
    },
    open() {
      this.$emit('open');
    }
  }
});
</script>

<style scoped>
.textarea-style {
  width: 100%;
  height: 300px;
  background: transparent;
  font-size: 22px;
  font-weight: 700;
  color:steelblue;
  line-height: 1.2;
  padding: 0.5rem;
}
textarea {
  border: none;
  outline: none;
  overflow: auto;
  resize: vertical;
  border: groove ghostwhite 0.2rem;
  border-radius: 8px;
}
textarea:focus {
  border: groove lightgreen 0.2rem;
}
.error {
  border: groove crimson 0.2rem;
}
.option-label {
  font-size: 18px;
  color: rgb(18, 63, 65);
  line-height: 1.2;
  padding: 0.5rem;
}
.danger-label {
  font-size: 16px;
  color: crimson;
  line-height: 1.2;
  padding: 0.5rem;
  min-height: 40px;
}
.form-view {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  -webkit-box-shadow: -11px 11px 25px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: -11px 11px 25px 0px rgba(0,0,0,0.75);
  box-shadow: -11px 11px 25px 0px rgba(0,0,0,0.75);
  border-radius: 15px;
  margin: 0.5rem;
  padding: 0.5rem;
  width: 40em;
  background-color:wheat;
}
.submit-button {
  color: whitesmoke;
  background-color: teal;
  padding: 0.5rem;
  border-radius: 10px
}
.submission {
  display: flex;
  justify-content:space-evenly;
}
button {
  border: none;
  outline: none;
}
.info-button {
  background-color: tomato;
  color:whitesmoke;
  padding: 0.5rem;
  border-radius: 10px
}
</style>