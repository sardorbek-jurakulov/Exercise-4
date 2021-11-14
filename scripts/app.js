new Vue({
  el: '#exercise',
  data: {
    attachedHighlight: true,
    borderedElement: 'borderedElement',
    shadowedElement: 'shadowedElement',
    userClass: ''
  },
  computed: {
    hightlightShrink: function() {
      return {
        highlight: this.attachedHighlight,
        shrink: !this.attachedHighlight
      }
    }
  },
  methods: {
    startEffect: function() {
      this.attachedHighlight = !this.attachedHighlight;
    }
  }
});
