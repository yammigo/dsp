import Vue from 'vue';
const uriReg = /^((http[s]{0,1}|ftp):\/\/)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
const isUri = function (value) {
  return (value && value.trim() && uriReg.test(value.trim()));
};

Vue.directive('listenTop', {
  inserted: function (el, binding, vnode) {
   
    // console.log(el);
   let scrollTop=()=>{
    //  console.log(binding.value)
      // Utils.throttle(binding.value, 100, 1000, Utils.getPosition(el))();
      binding.value(Utils.getPosition(el),binding.arg);
    }
    vnode.scrollTop=scrollTop;
    document.getElementById('scrollView').addEventListener('scroll',vnode.scrollTop);




  },
  unbind: function (el, binding, vnode) {
    document.getElementById('scrollView').removeEventListener('scroll',vnode.scrollTop);
    delete vnode.scroll;
  }
});

Vue.directive('url', {
  bind() {
    if (arguments[1] && arguments[1].value) {
      let el = arguments[0];
      let text = arguments[1].value;
      let protocol;
      let pre = '';
      let aft = '';
      if (isUri(text)) {
        protocol = (text.indexOf('http') != -1 ? '' : 'http://');
        pre = `<a href="${protocol}${text.trim()}" target="_blank">`;
        aft = `</a>`;
      }
      el.innerHTML = pre + text + aft;
    }
  }
});
