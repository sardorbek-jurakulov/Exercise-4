new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: true,
      shrink: false
    },
    borderedElement: 'borderedElement',
    userClass: '',
    circledElement: '',
    isShadowedCircle: '',
    userInputStyle: 'gray',
    progressPersentage: 0
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
    },
    
  },
  methods: {
    startEffect: function() {
      let vm = this;
      this.progress = setInterval(function() {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      },1000);
    },
    progressStarted: function() {
      let vm = this;
      // setInterval(function() {
      //   return vm.progressPersentage += 10; 
      // }, 1000);
      setInterval(function(){
        return vm.progressPersentage = (Math.random() * 101);
      }, 1000);
    }
  }
});
