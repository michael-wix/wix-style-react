/* eslint-disable */
import React from 'react';

class LinkExample extends React.Component {
  render() {
    return (
      <AnnouncementModalLayout
        primaryButtonText="Start Now"
        linkText="Learn More"
        title="All Your Info In One Place"
        illustration={"announcement_illustration.svg"}
      >
        <Text>
          Meet your brand new General Info page.<br/>
          We brought all your business information together here.
        </Text>
      </AnnouncementModalLayout>
    )
  }
}
