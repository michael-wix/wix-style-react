import ReactTestUtils from 'react-dom/test-utils';
import styles from './Input.scss';
import { tooltipDriverFactory } from 'wix-ui-core/dist/src/components/tooltip/Tooltip.driver';
import { dataHooks } from './constants';

const inputDriverFactory = ({ element, wrapper, eventTrigger }) => {
  const input = element && element.querySelector('input');
  const clearButton =
    element && element.querySelector(`[data-hook=input-clear-button]`);
  const suffixNode = element && element.querySelector(`.${styles.suffix}`);
  const customAffixNode =
    element && element.querySelector(`[data-hook="custom-affix"]`);
  const iconAffixNode =
    element && element.querySelector(`[data-hook="icon-affix"]`);
  const menuArrowNode =
    element && element.querySelector(`.${styles.menuArrow}`);
  const getName = () => input.getAttribute('name');
  const getType = () => input.getAttribute('type');
  const getMaxLength = () => input.getAttribute('maxlength');

  const driver = {
    trigger: (trigger, event) => ReactTestUtils.Simulate[trigger](input, event),
    focus: options => {
      input.focus(options);
      ReactTestUtils.Simulate.focus(input);
    },
    blur: () => {
      input.blur();
      ReactTestUtils.Simulate.blur(input);
    },
    getName,
    getMaxLength,
    getType,
    keyDown: key => ReactTestUtils.Simulate.keyDown(input, { key }),
    click: () => ReactTestUtils.Simulate.click(input),
    clickSuffix: () => ReactTestUtils.Simulate.click(suffixNode),
    clickCustomAffix: () => ReactTestUtils.Simulate.click(customAffixNode),
    clickClear: () => ReactTestUtils.Simulate.click(clearButton),
    clickIconAffix: () => ReactTestUtils.Simulate.click(iconAffixNode),
    clickMenuArrow: () => ReactTestUtils.Simulate.click(menuArrowNode),
    mouseOver: () => ReactTestUtils.Simulate.mouseOver(input),
    mouseOut: () => ReactTestUtils.Simulate.mouseOut(input),
    clearText: () => driver.enterText(''),
    enterText: text => {
      input.value = text;
      ReactTestUtils.Simulate.change(input, {
        target: { name: getName(), type: getType(), value: text },
      });
    },
    getValue: () => input.value,
    getText: () => input.value,
    getPlaceholder: () => input.placeholder,
    getPattern: () => input.pattern,
    getDefaultValue: () => input.defaultValue,
    getTabIndex: () => input.tabIndex,
    getReadOnly: () => input.readOnly,
    getDisabled: () => input.disabled,
    getTextOverflow: () => input.style['text-overflow'],
    getAriaLabel: () => input.getAttribute('aria-label'),
    getAriaControls: () => input.getAttribute('aria-controls'),
    getAriaDescribedby: () => input.getAttribute('aria-describedby'),
    getAutocomplete: () => input.getAttribute('autocomplete'),
    getRequired: () => input.required,
    hasPrefix: () => element.querySelectorAll(`.${styles.prefix}`).length === 1,
    hasPrefixClass: () =>
      element.querySelectorAll(`.${styles.input}.${styles.withPrefix}`)
        .length === 1,
    hasSuffix: () => !!suffixNode,
    hasSuffixClass: () =>
      element.querySelectorAll(`.${styles.input}.${styles.withSuffix}`)
        .length === 1,
    hasSuffixesClass: () =>
      element.querySelectorAll(`.${styles.input}.${styles.withSuffixes}`)
        .length === 1,
    prefixComponentExists: style =>
      !!element.querySelector(`.${styles.prefix} ${style}`),
    suffixComponentExists: style =>
      !!element.querySelector(`.${styles.suffix} ${style}`),
    isMenuArrowLast: () =>
      element.querySelectorAll(
        `.${styles.suffixes} .${styles.suffix}:last-child > .${styles.menuArrow}`,
      ).length === 1,
    getTooltipElement: () => element,
    getTooltipDataHook: () => 'input-tooltip',
    getDataHook: () => element.getAttribute('data-hook'),
    getCustomAffix: () => customAffixNode.textContent,
    hasMenuArrow: () => !!menuArrowNode,
    hasClearButton: () => !!clearButton,
    isRTL: () => element.className.indexOf(styles.rtl) >= 0,
    isFocusedStyle: () => element.classList.contains(styles.hasFocus),
    isHoveredStyle: () => element.classList.contains(styles.hasHover),
    isDisabled: () => element.classList.contains(styles.disabled),
    isOfStyle: style => element.classList.contains(styles[`theme-${style}`]),
    isOfSize: size => element.classList.contains(styles[`size-${size}`]),
    getSize: () => element.getAttribute('data-size'),
    isFocus: () => document.activeElement === input,
    exists: () => !!(element && element.querySelector('input')),
    startComposing: () => ReactTestUtils.Simulate.compositionStart(input),
    endComposing: () => ReactTestUtils.Simulate.compositionEnd(input),
    getCursorLocation: () => input.selectionStart,
    getRootElementClasses: () => element.classList,
    getInputElementClasses: () => input.classList,
    hasRightBorderRadius: () =>
      !element.classList.contains(styles.noRightBorderRadius),
    hasLeftBorderRadius: () =>
      !element.classList.contains(styles.noLeftBorderRadius),
    isCustomInput: () => {
      return input.getAttribute('data-hook') === 'wsr-custom-input';
    },

    // Status
    /** Return true if there's a status */
    hasStatus: () =>
      !!element.querySelector(`[data-hook='${dataHooks.status}']`),
    /** If there's a status, returns its type */
    getStatus: () =>
      element
        .querySelector(`[data-hook='${dataHooks.status}']`)
        .getAttribute('data-status'),
    /** Return true if there's a status message */
    hasStatusMessage: () =>
      !!element.querySelector(`[data-hook='status-indicator-tooltip']`),
    /** If there's a status message, returns its text value */
    getStatusMessage: () => {
      const tooltipDriver = tooltipDriverFactory({
        element: element.querySelector(
          `[data-hook='status-indicator-tooltip']`,
        ),
        wrapper,
        eventTrigger,
      });

      tooltipDriver.mouseEnter();
      return tooltipDriver.getContentElement().textContent;
    },
  };

  return driver;
};

export default inputDriverFactory;
