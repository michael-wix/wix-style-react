import React from 'react';
import { mount } from 'enzyme';
import eventually from 'wix-eventually';
import floatingHelperDriverFactory from '../FloatingHelper.driver';
import FloatingHelper from '../FloatingHelper';
import FloatingHelperContent from '../FloatingHelperContent/FloatingHelperContent';
import ClosablePopover from '../ClosablePopover/ClosablePopover';
import { createRendererWithDriver, cleanup } from '../../../test/utils/unit';

describe('FloatingHelper', () => {
  const title = 'my title';
  const dataHook = 'closable-popover-data-hook';

  const requiredProps = {
    content: <FloatingHelperContent title={title} body="this is the body" />,
    placement: 'right',
    target: <div>This is the target element</div>,
  };

  describe('[sync]', () => {
    runTest(createRendererWithDriver(floatingHelperDriverFactory));
  });

  function runTest(render) {
    afterEach(() => cleanup());

    const waitForClose = driver =>
      eventually(() => expect(driver.isOpened()).toBe(false));

    it('should have helper content (with title)', () => {
      const props = { dataHook };

      const { driver } = render(
        <FloatingHelper {...requiredProps} {...props} />,
      );
      expect(driver.getHelperContentDriver().exists()).toBe(true);
      expect(driver.getHelperContentDriver().getTitleContent()).toBe(title);
    });

    describe('width', () => {
      it('should have default width of 444', () => {
        const props = { dataHook };
        const { driver } = render(
          <FloatingHelper {...requiredProps} {...props} />,
        );
        expect(driver.getWidth()).toBe('444px');
      });

      it('should have a custom width (which is a string)', () => {
        const props = { width: '500px', dataHook };
        const { driver } = render(
          <FloatingHelper {...requiredProps} {...props} />,
        );
        expect(driver.getWidth()).toBe(props.width);
      });

      it('should have a custom width (which is a number)', () => {
        const props = { width: 600, dataHook };
        const { driver } = render(
          <FloatingHelper {...requiredProps} {...props} />,
        );
        expect(driver.getWidth()).toBe(`${props.width}px`);
      });
    });

    describe('close-button', () => {
      it('should have a close-button by default', () => {
        const props = { dataHook };
        const { driver } = render(
          <FloatingHelper {...requiredProps} {...props} />,
        );
        expect(driver.hasCloseButton()).toBe(true);
      });
    });

    describe('close', () => {
      it('should be opened by default', () => {
        const props = { dataHook };
        const { driver } = render(
          <FloatingHelper {...requiredProps} {...props} />,
        );
        expect(driver.isOpened()).toBe(true);
      });

      it('should close popover when close-button is clicked', async () => {
        const props = { dataHook };
        const { driver } = render(
          <FloatingHelper {...requiredProps} {...props} />,
        );
        driver.clickCloseButton();
        await waitForClose(driver);
      });
    });

    // describe('programmatic open/close sanity', () => {
    //   it('should open and close programmatically', async () => {
    //     const props = { initiallyOpened: false, dataHook };
    //     const { driver } = render(<FloatingHelper {...requiredProps} {...props} />);
    //
    //     expect(driver.isOpened()).toBe(false);
    //     wrapper.instance().open();
    //     expect(driver.isOpened()).toBe(true);
    //     wrapper.instance().close();
    //     await waitForClose(driver);
    //     expect(driver.isOpened()).toBe(false);
    //   });
    // });

    describe('controlled', () => {
      it('should call onClose but not close', async () => {
        const props = {
          onClose: jest.fn(),
          opened: true,
          dataHook,
        };

        const { driver } = render(
          <FloatingHelper {...requiredProps} {...props} />,
        );
        driver.clickCloseButton();
        expect(props.onClose).toBeCalled();
        expect(driver.isOpened()).toBe(true);
      });

      it('should not throw error when closeButton clicked and there is no onClose callback', async () => {
        const props = { opened: true, dataHook };
        const { driver } = render(
          <FloatingHelper {...requiredProps} {...props} />,
        );
        const click = () => driver.clickCloseButton();
        expect(click).not.toThrowError();
      });
    });

    // describe('appendTo', () => {
    //   it('should be window by default', () => {
    //     const { driver } = render(<FloatingHelper {...requiredProps} />);
    //     expect(wrapper.find(ClosablePopover).props().appendTo).toBe('window');
    //   });
    // });
  }
});
