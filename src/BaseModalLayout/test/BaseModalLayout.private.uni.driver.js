import { baseModalLayoutDriverFactory as publicDriverFactory } from '../BaseModalLayout.uni.driver';

export const baseModalLayoutPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
    hasClass: className => base.hasClass(className),
    childExists: selector => base.$(selector).exists(),
  };
};
