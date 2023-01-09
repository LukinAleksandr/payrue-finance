import * as profile from './profile-service';

import { history } from '../utils/history';
import notification from './notifications-service';

export default {
  api: {
    profile,
  },
  notification,
  history,
};
