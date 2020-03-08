import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import AnnouncementModalLayout from '../AnnouncementModalLayout';
import { announcementModalLayoutPrivateDriverFactory } from './AnnouncementModalLayout.private.uni.driver';
import { dataHooks } from '../constants';
import { dataHooks as baseDataHooks } from '../../BaseModalLayout/constants';

describe('AnnouncementModalLayout', () => {
  const render = createRendererWithUniDriver(
    announcementModalLayoutPrivateDriverFactory,
  );

  const commonProps = {
    dataHook: dataHooks.announcementModalLayout,
    primaryButtonText: 'Start Now',
    primaryButtonProps: { dataHook: baseDataHooks.primaryButton },
    secondaryButtonText: 'Skip',
    secondaryButtonProps: { dataHook: baseDataHooks.secondaryButton },
  };

  afterEach(() => {
    cleanup();
  });

  describe('Render', () => {
    it('should render', async () => {
      const { driver } = render(
        <AnnouncementModalLayout {...commonProps}>
          Content
        </AnnouncementModalLayout>,
      );

      expect(await driver.exists()).toBe(true);
      expect(await driver.getPrimaryButtonText()).toEqual(
        commonProps.primaryButtonText,
      );
      expect(await driver.getSecondaryButtonText()).toEqual(
        commonProps.secondaryButtonText,
      );
      expect(await driver.getModalWidth()).toEqual('600px');
    });

    it('should render children', async () => {
      const children = <div data-hook="child">Child div</div>;
      const { driver } = render(
        <AnnouncementModalLayout>{children}</AnnouncementModalLayout>,
      );

      expect(await driver.childExists('[data-hook=child]')).toBe(true);
    });
  });

  describe('Title', () => {
    it('Node provided - should render with that node', async () => {
      const title = <div data-hook={baseDataHooks.title}>Title</div>;
      const { driver } = render(
        <AnnouncementModalLayout title={title}>
          Content
        </AnnouncementModalLayout>,
      );

      expect(
        await driver.childExists('[data-hook=' + baseDataHooks.title + ']'),
      ).toBe(true);
    });
    it('String provided - should render wrapped in H2', async () => {
      const title = 'Title';
      const { driver } = render(
        <AnnouncementModalLayout title={title}>
          Content
        </AnnouncementModalLayout>,
      );

      expect(
        await driver.childExists('h2[data-hook=' + baseDataHooks.title + ']'),
      ).toBe(true);
    });
  });

  describe('Illustration', () => {
    it('Should render illustration', async () => {
      const illustration = <div data-hook={dataHooks.illustration}></div>;
      const { driver } = render(
        <AnnouncementModalLayout illustration={illustration}>
          Content
        </AnnouncementModalLayout>,
      );

      expect(
        await driver.childExists('[data-hook=' + dataHooks.illustration + ']'),
      ).toBe(true);
    });
  });

  describe('Link', () => {
    it('Should render', async () => {
      const { driver } = render(
        <AnnouncementModalLayout linkText="Linky">
          Content
        </AnnouncementModalLayout>,
      );

      expect(
        await driver.childExists('[data-hook=' + dataHooks.link + ']'),
      ).toBe(true);
    });
  });

  describe('Theme', () => {
    it('Default - Standard theme', async () => {
      const { driver } = render(
        <AnnouncementModalLayout {...commonProps}>
          Content
        </AnnouncementModalLayout>,
      );

      expect(await driver.primaryButtonHasSkin('standard')).toBe(true);
      expect(await driver.secondaryButtonHasSkin('standard')).toBe(true);
    });
    it('Premium theme', async () => {
      const { driver } = render(
        <AnnouncementModalLayout {...commonProps} theme="premium">
          Content
        </AnnouncementModalLayout>,
      );

      expect(await driver.primaryButtonHasSkin('premium')).toBe(true);
      expect(await driver.secondaryButtonHasSkin('premium')).toBe(true);
    });
  });
});
