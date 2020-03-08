/* eslint-disable */
import React from 'react';

class FootnoteExample extends React.Component {
  render() {
    return (
      <AnnouncementModalLayout
        primaryButtonText="Start Now"
        secondaryButtonText="Skip"
        title="All Your Info In One Place"
        illustration={"announcement_illustration.svg"}
        footnote={
          <>
            <Text size="small">By sending an invite, you agree to the{'\u00A0'}</Text>
            <TextButton size="small">Wix Terms of Use.</TextButton>
          </>
        }
      >
        <Text>
          Meet your brand new General Info page.<br/>
          We brought all your business information together here.
        </Text>
      </AnnouncementModalLayout>
    )
  }
}
