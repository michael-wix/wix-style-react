import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface MessageModalLayoutUniDriver extends BaseUniDriver {
  getCountText(): Promise<string>;
  clickButton(): Promise<void>;
  getButtonText(): Promise<string>;
}
