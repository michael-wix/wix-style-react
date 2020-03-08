import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface AnnouncementModalLayoutUniDriver extends BaseUniDriver {
  getCountText(): Promise<string>;
  clickButton(): Promise<void>;
  getButtonText(): Promise<string>;
}
