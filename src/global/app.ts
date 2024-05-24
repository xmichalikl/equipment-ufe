import '@material/web/list/list';
import '@material/web/list/list-item';
import '@material/web/icon/icon';
import '@material/web/textfield/outlined-text-field';
import '@material/web/select/outlined-select';
import '@material/web/select/select-option';
import '@material/web/slider/slider';
import '@material/web/radio/radio';
import '@material/web/divider/divider';

import '@material/web/button/filled-button';
import '@material/web/button/filled-tonal-button';
import '@material/web/button/outlined-button';

import { registerNavigationApi } from './navigation.js';

export default function () {
  registerNavigationApi();
}
