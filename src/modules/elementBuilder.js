import $ from 'jquery';

export default (tag = 'div', content = '', className = 'box') => $(`<${tag}>${content}</${tag}>`).addClass(className);