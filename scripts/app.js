new Vue({
  el: '#exercise',
  data: {
    attachedHighlight: true,
    borderedElement: 'borderedElement',
    shadowedElement: 'shadowedElement',
    userClass: '',
    circledElement: '',
    isShadowedCircle: '',
    userInputStyle: 'gray'
  },
  computed: {
    hightlightShrink: function() {
      return {
        highlight: this.attachedHighlight,
        shrink: !this.attachedHighlight
      }
    },
    shadowedCircle: function() {
      return (this.isShadowedCircle == 'true') ? true : false;
    }
  },
  methods: {
    startEffect: function() {
      this.attachedHighlight = !this.attachedHighlight;
    }
  }
});
