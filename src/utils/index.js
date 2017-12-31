/**
 * Created by roger on 31/12/2017.
 */
/**
 * @desc 寻找当前元素最近的符合要求的祖先元素
 * @param {HTMLElement} element - 当前元素
 * @param {string} target - 描述元素的
 * @returns {HTMLElement} 目标祖先元素
 */
function getClosestElement(element, target) {
  const parent = element.parentElement;

  if (parent.nodeName.toUpperCase() !== 'BODY') {
    if (target.indexOf('id::') > -1) {
      const id = parent.getAttribute('id') || '';

      if(id === target.split('::')[1]) {
        return parent
      } else {
        return getClosestElement(parent, target);
      }
    } else if (target.indexOf('class::') > -1) {
      const className = parent.getAttribute('class') || '';

      if(className.split(' ').includes(target.split('::')[1])) {
        return parent
      } else {
        return getClosestElement(parent, target);
      }
    } else if (target.indexOf('nodeName::') > -1) {
      if(parent.nodeName.toUpperCase() === target.split('::')[1].toUpperCase()) {
        return parent
      } else {
        return getClosestElement(parent, target);
      }
    } else {
      throw new Error('数据描述有误!');
    }
  } else {
    return null;
  }
}

module.exports = {
  getClosestElement
};