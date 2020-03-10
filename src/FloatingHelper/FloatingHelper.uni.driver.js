import { closablePopoverUniDriverFactory } from './ClosablePopover/ClosablePopover.uni.driver';
import { floatingHelperContentUniDriverFactory } from './FloatingHelperContent/FloatingHelperContent.uni.driver';
import { dataHooks } from './constants';

const floatingHelperUniDriverFactory = (base, body) => {
  const getElementByDataHook = dataHook => base.$(`[data-hook='${dataHook}']`);

  const closableUniPopoverDriver = closablePopoverUniDriverFactory(base, body);

  const closeButton = () => getElementByDataHook(dataHooks.closeButton);
  const contentWrapper = () => getElementByDataHook(dataHooks.contentWrapper);

  return {
    ...closableUniPopoverDriver,
    /** check whether the helper has a close button */
    hasCloseButton: () => closeButton().exists(),
    /** click the close button */
    clickCloseButton: () => closeButton().click(),
    /** Get the driver for the helper's content */
    getHelperContentDriver: () =>
      floatingHelperContentUniDriverFactory(base, body),
    /** Get width of content's root element */
    getWidth: () => window.getComputedStyle(contentWrapper()).width,
  };
};

export default floatingHelperUniDriverFactory;
