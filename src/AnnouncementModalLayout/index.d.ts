import * as React from 'react';

export interface AnnouncementModalLayoutProps {
  className?: string,
  dataHook?: string,
  title?: React.ReactNode,
  subtitle?: string,
  primaryButtonText?: string,
  //TODO - refactor when wsr-types is merged to this project
  primaryButtonProps?: object,
  primaryButtonOnClick?: () => void,
  secondaryButtonText?: string,
  //TODO - refactor when wsr-types is merged to this project
  secondaryButtonProps?: object,
  secondaryButtonOnClick?: () => void,
  linkText?: string,
  linkOnClick?: () => void,
  onCloseButtonClick?: () => void,
  footnote?: React.ReactNode,
  sideActions?: React.ReactNode,
  width?: string,
  children: React.ReactNode,
  illustration?: React.ReactNode,
  theme?: 'standard' | 'alert' | 'premium',
}

export default class AnnouncementModalLayout extends React.PureComponent<AnnouncementModalLayoutProps>{}
