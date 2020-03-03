import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { baseModalLayoutDriverFactory } from '../BaseModalLayout/BaseModalLayout.uni.driver';

export const customModalLayoutDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
    ...baseModalLayoutDriverFactory(base),
  };
};
