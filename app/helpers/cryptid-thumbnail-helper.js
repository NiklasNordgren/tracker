import { htmlSafe } from '@ember/template'
import { helper } from '@ember/component/helper';

//Gold Challenge: Creating a Custom Thumbnail Helper
export function cryptidThumbnailHelper(params) {

  var cryptidImageUrl;
  var cryptidAlt;

  if(params){
    cryptidImageUrl = params[0];
    cryptidAlt = params[1];
  }else{
    cryptidImageUrl = 'assets/images/cryptids/blank_th.png';
  }

  return htmlSafe('<img class="media-object thumbnail" src=' + cryptidImageUrl + ' alt="' + cryptidAlt + '" width="100%" height="100%">');
}

export default helper(cryptidThumbnailHelper);
