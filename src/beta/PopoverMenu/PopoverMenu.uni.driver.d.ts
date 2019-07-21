import { UniDriver } from '@unidriver/core';

export interface PopoverMenuDriver {
  exists(): Promise<boolean>;
  getTriggerElement(): UniDriver;
  clickAtChild: (index: number) => Promise<void>;
  isMenuOpen(): Promise<boolean>;
  childrenCount(): Promise<number>;
}
