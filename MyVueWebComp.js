const MyVueWebComp = {
  props: ['msg'],
  template: `
  <div style="border: 3px dashed green; padding: 5px">
    I am my-vue-web-comp.<br>
    Value received via "msg" prop: {{ msg }}<br>
    <input v-model="text"><button @click="addText">Type something and click me</button>
    <div v-for="t in texts">
      Text: {{ t }}
    </div>
  </div>
  `,
  data() {
    return {
      text: '',
      texts: [],
    };
  },
  methods: {
    addText() {
      this.texts.push(this.text);
      this.$emit('msgChanged', this.text);
      this.text = '';
    },
  },
};
Vue.customElement('my-vue-web-comp', MyVueWebComp);
