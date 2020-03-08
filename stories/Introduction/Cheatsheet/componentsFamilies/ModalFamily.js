/* eslint-disable no-console */
import React, { PureComponent } from 'react';
import {
  FamilyStructure,
  SingleComponentSideBySide,
} from '../sharedComponents';

import { modalsSymbolsToComponents } from '../../../symbolsComponentsMapping/families/modalsFamily';

import {
  createLinkedSymbolName,
  createLinkedComponentsNames,
} from '../sharedComponents/utils';

import {
  modalsSymbols,
  symbolsGroup,
} from '../../../symbolsComponentsMapping/symbols';

//9. Modals
import {
  MessageBoxFunctionalLayout,
  MessageBoxMarketerialLayout,
} from 'wix-style-react/MessageBox';
import Modal from 'wix-style-react/Modal';
import ModalPreviewLayout from 'wix-style-react/ModalPreviewLayout';
import ModalMobileLayout from 'wix-style-react/ModalMobileLayout';
import CustomModalLayout from 'wix-style-react/CustomModalLayout';

//Assets
import Button from 'wix-style-react/Button';
import Box from 'wix-style-react/Box';
import Text from 'wix-style-react/Text';
import FormField from 'wix-style-react/FormField';
import Input from 'wix-style-react/Input';
import NumberInput from 'wix-style-react/NumberInput';
import RichTextInputArea from 'wix-style-react/RichTextInputArea';
import Checkbox from 'wix-style-react/Checkbox';
import TextButton from 'wix-style-react/TextButton';
import { Layout, Cell } from 'wix-style-react/Layout';
import IconButton from 'wix-style-react/IconButton';
import More from 'wix-ui-icons-common/More';
import Print from 'wix-ui-icons-common/Print';
import { Container, Row, Col } from 'wix-style-react/Grid';
import ascendInvoice from '../../../../test/assets/ascend-invoice.jpg';
import { Category } from '../../../storiesHierarchy';

const groupSymbol = symbolsGroup.modals;

const AlertExamples = () => {
  const symbol = modalsSymbols.alert;
  const components = modalsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: createLinkedSymbolName({ groupSymbol: Category.MODALS, symbol }),
    componentsNames: createLinkedComponentsNames(components),
  };

  const renderMessageBoxFunctionalLayout = props => {
    const {
      title,
      confirmText,
      cancelText,
      theme,
      image,
      maxHeight,
      sideActions,
      footerBottomChildren,
      children,
    } = props;

    return (
      <MessageBoxFunctionalLayout
        title={title}
        confirmText={confirmText}
        cancelText={cancelText}
        theme={theme}
        image={image}
        maxHeight={maxHeight}
        footerBottomChildren={footerBottomChildren}
        sideActions={sideActions}
      >
        {children}
      </MessageBoxFunctionalLayout>
    );
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout>
        <Cell>
          {renderMessageBoxFunctionalLayout({
            title: 'More Info',
            confirmText: 'Main',
            cancelText: 'Cancel',
            theme: 'blue',
            sideActions: (
              <FormField
                label="Please don't show me this again"
                labelPlacement="right"
              >
                <Checkbox />
              </FormField>
            ),
            children:
              'This is a generic message. No harm done, but really needed to interrupt you.',
          })}
        </Cell>
        <Cell>
          {renderMessageBoxFunctionalLayout({
            title: 'System Crashed!',
            confirmText: 'Action',
            theme: 'red',
            cancelText: 'Secondary',
            image: (
              <Box
                height="120px"
                width="120px"
                backgroundColor="D60"
                borderRadius="50%"
              />
            ),
            children: 'Something terribly bad happened, that cannot be undone.',
          })}
        </Cell>
        <Cell>
          {renderMessageBoxFunctionalLayout({
            title: 'Premium modal',
            confirmText: 'Upgrade',
            cancelText: 'Cancel',
            theme: 'purple',
            children: 'I am a premium modal!',
            footerBottomChildren: (
              <div>
                <Text size="small">By upgrading, you agree to the </Text>
                <TextButton size="small">Wix Terms of Use.</TextButton>
              </div>
            ),
          })}
        </Cell>
      </Layout>
    </SingleComponentSideBySide>
  );
};

class CustomModalLayoutExample extends PureComponent {
  render() {
    const symbol = modalsSymbols.custom;
    const components = modalsSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: createLinkedSymbolName({ groupSymbol: Category.MODALS, symbol }),
      componentsNames: createLinkedComponentsNames(components),
    };

    return (
      <SingleComponentSideBySide {...singleComponentProps}>
        <Box>
          <CustomModalLayout
            primaryButtonText="Save"
            secondaryButtonText="Cancel"
            title="New Product"
            subtitle="To get running, your new product needs some details:"
            sideActions={<Checkbox>Don't show this again</Checkbox>}
            width="600px"
          >
            <Container fluid>
              <Row stretchViewsVertically>
                <Col span={9}>
                  <FormField label="Title">
                    <Input size="normal" placeholder="Value" />
                  </FormField>
                </Col>
                <Col span={3}>
                  <FormField label="Quantity">
                    <NumberInput value={500} />
                  </FormField>
                </Col>
              </Row>
              <Row stretchViewsVertically>
                <Col>
                  <FormField label="Description">
                    <RichTextInputArea placeholder="Tell your customers what they will get" />
                  </FormField>
                </Col>
              </Row>
            </Container>
          </CustomModalLayout>
        </Box>
      </SingleComponentSideBySide>
    );
  }
}

class ModalPreviewLayoutExample extends PureComponent {
  state = {
    isModalOpened: false,
  };

  toggleModalDisplay = () => {
    const { isModalOpened } = this.state;
    this.setState({ isModalOpened: !isModalOpened });
  };

  render() {
    const symbol = modalsSymbols.preview;
    const components = modalsSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: symbol,
      componentsNames: createLinkedComponentsNames(components),
    };

    const { isModalOpened } = this.state;

    const modalPreviewActions = (
      <Box verticalAlign="middle">
        <Box marginRight={2}>
          <TextButton size="small" skin="light" prefixIcon={<Print />}>
            Print
          </TextButton>
        </Box>
        <Box marginRight={2}>
          <Button priority="secondary" size="small" skin="light">
            Send
          </Button>
        </Box>
        <IconButton priority="secondary" size="small" skin="light">
          <More />
        </IconButton>
      </Box>
    );

    return (
      <SingleComponentSideBySide {...singleComponentProps}>
        <Button onClick={this.toggleModalDisplay}>
          Open Modal Preview Layout
        </Button>
        <Modal isOpen={isModalOpened}>
          <ModalPreviewLayout
            title="Modal with Scrollable Content"
            actions={modalPreviewActions}
            onClose={this.toggleModalDisplay}
          >
            <Box>
              <img src={ascendInvoice} />
            </Box>
          </ModalPreviewLayout>
        </Modal>
      </SingleComponentSideBySide>
    );
  }
}

const ModalMobileLayoutExample = () => {
  const symbol = modalsSymbols.mobile;
  const components = modalsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: createLinkedSymbolName({ groupSymbol: Category.MODALS, symbol }),
    componentsNames: createLinkedComponentsNames(components),
  };
  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <ModalMobileLayout
        title={<Text weight="bold">Enter VAT ID</Text>}
        content={
          <Text weight="normal" secondary>
            Enter a valid European Union VAT identification number for the
            ‘Reverse Charge’ mechanism in order to apply.
          </Text>
        }
        footer={
          <Box align="right">
            <Box marginRight="12px">
              <Button priority="secondary">Cancel</Button>
            </Box>
            <Button>Save</Button>
          </Box>
        }
        onCloseButtonClick={() => {}}
      />
    </SingleComponentSideBySide>
  );
};

const ModalFamily = () => (
  <FamilyStructure title={groupSymbol} showPreview>
    <AlertExamples />
    <CustomModalLayoutExample />
    <ModalPreviewLayoutExample />
    <ModalMobileLayoutExample />
  </FamilyStructure>
);

export default ModalFamily;
