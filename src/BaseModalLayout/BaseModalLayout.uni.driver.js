import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';
import { buttonDriverFactory } from '../Button/Button.uni.driver';

export const baseModalLayoutDriverFactory = (base, body) => {
  const getPrimaryButton = () =>
    buttonDriverFactory(base.$(`[data-hook="${dataHooks.primaryButton}"]`));
  const getSecondaryButton = () =>
    buttonDriverFactory(base.$(`[data-hook="${dataHooks.secondaryButton}"]`));

  return {
    ...baseUniDriverFactory(base, body),

    /** Get the title's text */
    getTitleText: async () => base.$(`[data-hook="${dataHooks.title}"]`).text(),

    /** Get the subtitle's text */
    getSubtitleText: async () =>
      base.$(`[data-hook="${dataHooks.subtitle}"]`).text(),

    /** Click the primary button */
    clickPrimaryButton: async () =>
      base.$(`[data-hook="${dataHooks.primaryButton}"]`).click(),

    /** Click the secondary button */
    clickSecondaryButton: async () =>
      base.$(`[data-hook="${dataHooks.secondaryButton}"]`).click(),

    /** Click the secondary button */
    clickCloseButton: async () =>
      base.$(`[data-hook="${dataHooks.closeButton}"]`).click(),

    /** Get the primary button's text */
    getPrimaryButtonText: async () => getPrimaryButton().getButtonTextContent(),

    /** Is 'skin' the primary button's skin */
    primaryButtonHasSkin: async skin => getPrimaryButton().hasSkin(skin),

    /** Get the secondary button's text */
    getSecondaryButtonText: async () =>
      base.$(`[data-hook="${dataHooks.secondaryButton}"]`).text(),

    /** Is 'skin' the secondary button's skin */
    secondaryButtonHasSkin: async skin => getSecondaryButton().hasSkin(skin),

    /** Get the modal's width from the wrapping div style */
    getModalWidth: async () => (await base._prop('style')).width,
  };
};
