import { htmlSafe } from '@ember/template'
import { helper } from '@ember/component/helper';

export function momentFrom(params) {
  var time = window.moment(...params);
  //Silver Challenge: Changing the Date Format
  var formatted = time.format('dddd LL');
  return htmlSafe('<span class="text-primary">' + formatted + '</span>');
}
export default helper(momentFrom);
