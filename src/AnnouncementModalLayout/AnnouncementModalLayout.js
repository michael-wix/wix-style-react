import React from 'react';
import PropTypes from 'prop-types';

import styles from './AnnouncementModalLayout.st.css';
import BaseModalLayout from '../BaseModalLayout';
import TextButton from '../TextButton';
import { dataHooks } from './constants';
import { dataHooks as baseDataHooks } from '../BaseModalLayout/constants';
import Heading from '../Heading';

/** A layout for announcement modals, to be used inside a &lt;Modal /&gt; */
class AnnouncementModalLayout extends React.PureComponent {
  _renderIllustration() {
    const { illustration } = this.props;

    return (
      <div className={styles.illustrationContainer}>
        <div className={styles.imageWrapper}>
          {typeof illustration === 'string' ? (
            <img src={illustration} width="100%" height="100%" />
          ) : (
            illustration
          )}
        </div>
      </div>
    );
  }

  _renderLink() {
    const { linkText, linkOnClick } = this.props;
    return linkText ? (
      <div className={styles.additionalButtons}>
        <TextButton
          size="small"
          weight="normal"
          dataHook={dataHooks.link}
          onClick={linkOnClick}
        >
          {linkText}
        </TextButton>
      </div>
    ) : (
      false
    );
  }

  _renderTitle() {
    const { title } = this.props;
    return typeof title !== 'string' ? (
      title
    ) : (
      <Heading appearance={'H2'} dataHook={baseDataHooks.title}>
        {title}
      </Heading>
    );
  }

  render() {
    const { dataHook, illustration } = this.props;

    const transformedProps = this.transformProps();

    return (
      <div
        {...styles('root', {}, this.props)}
        data-hook={dataHook}
        style={{ width: '600px' }}
      >
        {illustration && this._renderIllustration()}
        <BaseModalLayout
          {...this.props}
          {...transformedProps}
          additionalButtons={this._renderLink()}
        />
      </div>
    );
  }

  transformProps() {
    const { theme, primaryButtonProps, secondaryButtonProps } = this.props;
    primaryButtonProps['skin'] = theme;
    primaryButtonProps['size'] = 'medium';
    secondaryButtonProps['skin'] = theme;
    secondaryButtonProps['size'] = 'medium';
    const transformedProps = {
      title: this._renderTitle(),
      primaryButtonProps: primaryButtonProps,
      secondaryButtonProps: secondaryButtonProps,
    };
    return transformedProps;
  }
}

AnnouncementModalLayout.displayName = 'AnnouncementModalLayout';

AnnouncementModalLayout.propTypes = {
  ...BaseModalLayout.propTypes,
  /** additional css classes */
  className: PropTypes.string,
  /** data hook for testing */
  dataHook: PropTypes.string,
  /** Illustration URL or custom element. */
  illustration: PropTypes.node,
  /** Theme will affect the buttons skins and illustration bg color. */
  theme: PropTypes.oneOf(['standard', 'premium']),
  /** When not provided, the primary link will not be rendered */
  linkText: PropTypes.string,
  /** callback for when the link is clicked */
  linkOnClick: PropTypes.func,
};

AnnouncementModalLayout.defaultProps = {
  ...BaseModalLayout.defaultProps,
  primaryButtonProps: {},
  secondaryButtonProps: {},
  theme: 'standard',
};

export default AnnouncementModalLayout;
