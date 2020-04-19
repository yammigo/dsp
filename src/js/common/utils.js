import utils from 'hey-utils';

const rclass = /[\t\r\n\f]/g;

//合并
export default utils.extend({}, utils, {
  getClass(elem) {
    return (elem.getAttribute && elem.getAttribute('class')) || '';
  },
  hasClass(elem, selector) {
    let className;
    className = ` ${selector} `;
    if (elem.nodeType === 1 && (` ${this.getClass(elem)} `)
      .replace(rclass, ' ')
      .indexOf(className) > -1) {
      return true;
    }

    return false;
  },
  throttle (fn, delay, atleast,args) {
   
    let timer = null
    let previous = null
    return function () {
      let now = +new Date()
      if (!previous) previous = now
      if (atleast && now - previous > atleast) {
          fn(args)
        previous = now
        clearTimeout(timer)
      } else {
        clearTimeout(timer)
        timer = setTimeout(function () {
          fn(args)
          previous = null
        }, delay)
      }
    }
  },
  getPosition(element) {

    var rect = element.getBoundingClientRect();
  
    var top = document.documentElement.clientTop;
  
    var left = document.documentElement.clientLeft;
    return {
  
        top: rect.top - top,
  
        bottom: rect.bottom - top,
  
        left: rect.left - left,
  
        right: rect.right - left
  
    }
  }
 
});

