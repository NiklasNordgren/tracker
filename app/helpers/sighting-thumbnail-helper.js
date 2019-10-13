import {
  helper
} from '@ember/component/helper';
import {
  htmlSafe
} from '@ember/template'

export function sightingThumbnailHelper(params) {

  var cryptidImageUrl;

  if (params) {
    cryptidImageUrl = params.cryptid.profileImg;;
    //remove /sighting from URL
    //cryptidImageUrl = cryptidImageUrl.substr(7, cryptidImageUrl.length);
  } else {
    cryptidImageUrl = 'assets/images/cryptids/blank_th.png';
  }

  return htmlSafe('<img class="media-object thumbnail" src=' + cryptidImageUrl + ' alt="{{' + params.cryptid.name + '}}" width="100%" height="100%">');
}

export default helper(sightingThumbnailHelper);
