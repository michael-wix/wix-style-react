import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { baseModalLayoutDriverFactory } from '../BaseModalLayout/BaseModalLayout.uni.driver';

export const announcementModalLayoutDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),
    ...baseModalLayoutDriverFactory(base),
  };
};
