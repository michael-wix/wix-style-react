import * as React from 'react';
import {BaseModalLayoutProps} from "../BaseModalLayout";

export interface AnnouncementModalLayoutProps extends BaseModalLayoutProps{
  className?: string,
  dataHook?: string,
  illustration?: React.ReactNode,
  theme?: 'standard' | 'destructive' | 'premium',
}

export default class AnnouncementModalLayout extends React.PureComponent<AnnouncementModalLayoutProps>{}
