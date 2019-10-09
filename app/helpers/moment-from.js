import { htmlSafe } from '@ember/template'
import { helper } from '@ember/component/helper';

export function momentFrom(params) {
  var time = window.moment(...params);
  var formatted = time.fromNow();
  return htmlSafe('<span class="text-primary">' + formatted + '</span>');
}

export default helper(momentFrom);
