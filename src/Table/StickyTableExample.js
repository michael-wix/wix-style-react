import React from 'react';
import Duplicate from 'wix-ui-icons-common/Duplicate';
import Delete from 'wix-ui-icons-common/Delete';

import Page from '../Page';
import Card from '../Card';
import Text from '../Text';
import TableActionCell from '../TableActionCell';
import Table from '.';
import range from '../utils/operators/range';

const numberOfRows = 30;
const numberOfColumns = 20;

const getColumnContent = (columnIndex, rowIndex) =>
  columnIndex === 1 && rowIndex === 2
    ? 'A very long column text that should span multiple lines and grow the row height.'
    : `Lorem ipsum ${columnIndex + 1}-${rowIndex + 1}`;

export default () => (
  <Page upgrade height="100vh">
    <Page.Header
      title="Sticky Columns Table"
      subtitle={
        <>
          Using new <Text weight="bold">stickyColumns=2</Text> prop.
        </>
      }
    />
    <Page.Content>
      <Card>
        <Table
          stickyColumns={2}
          rowVerticalPadding="large"
          highlightRowOnHover
          data={range(0, numberOfRows).map(rowIndex =>
            range(0, numberOfColumns).reduce(
              (rows, columnIndex) => ({
                ...rows,
                [`value${columnIndex + 1}`]: getColumnContent(
                  columnIndex,
                  rowIndex,
                ),
              }),
              {},
            ),
          )}
          columns={[
            ...range(0, numberOfColumns).map(columnIndex => ({
              title: `Column ${columnIndex + 1}`,
              render: row => row[`value${columnIndex + 1}`],
              width: '150px',
            })),
            {
              title: '',
              render: () => (
                // This could be a implemented as a separate compound <Table.StickyActionCell> component for example
                <div
                  style={{ position: 'absolute', right: 12, marginTop: -18 }}
                >
                  <TableActionCell
                    primaryAction={{
                      text: 'Preview',
                      onClick: () => {},
                    }}
                    secondaryActions={[
                      {
                        text: 'Duplicate',
                        icon: <Duplicate />,
                        onClick: () => {},
                      },
                      {
                        text: 'Delete',
                        icon: <Delete />,
                        onClick: () => {},
                      },
                    ]}
                    numOfVisibleSecondaryActions={2}
                  />
                </div>
              ),
            },
          ]}
        >
          <Page.Sticky>
            <Table.Titlebar />
          </Page.Sticky>
          <Table.Content titleBarVisible={false} />
        </Table>
      </Card>
    </Page.Content>
  </Page>
);
