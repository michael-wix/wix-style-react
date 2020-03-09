import { tooltipDriverFactory as tooltipDriverFactoryCore } from 'wix-ui-core/dist/src/components/tooltip/Tooltip.uni.driver';
import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const tooltipDriverFactory = (base, body) => {
  const testkit = tooltipDriverFactoryCore(base, body);
  return {
    ...baseUniDriverFactory(base),

    /** returns true if trigger element exists on the DOM */
    exists: async () => await testkit.exists(),

    /** returns true if tooltip element exists on the DOM */
    tooltipExists: async () => await testkit.tooltipExists(),

    /** mouse over the target element */
    mouseEnter: async () => await testkit.mouseEnter(),

    /** mouse leaves the target element */
    mouseLeave: async () => await testkit.mouseLeave(),

    /** returns tooltips content value in string */
    getTooltipText: async () => await testkit.getTooltipText(),
  };
};
