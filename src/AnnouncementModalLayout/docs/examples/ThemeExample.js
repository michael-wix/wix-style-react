/* eslint-disable */
import React from 'react';

class ThemeExample extends React.Component {
  render() {
    return (
      <AnnouncementModalLayout
        primaryButtonText="Start Now"
        secondaryButtonText="Skip"
        title="All Your Info In One Place"
        illustration={"announcement_illustration.svg"}
        theme='premium'
      >
        <Text>
          Meet your brand new General Info page.<br/>
          We brought all your business information together here.
        </Text>
      </AnnouncementModalLayout>
    )
  }
}
