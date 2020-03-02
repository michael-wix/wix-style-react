import React from 'react';

import Page from '../Page';
import Card from '../Card';
import Text from '../Text';
import Table from '.';
import range from '../utils/operators/range';

const numberOfRows = 30;
const numberOfColumns = 20;

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
          data={range(0, numberOfRows).map(rowIndex =>
            range(0, numberOfColumns).reduce(
              (rows, columnIndex) => ({
                ...rows,
                [`value${columnIndex + 1}`]: `Lorem ipsum ${columnIndex +
                  1}-${rowIndex + 1}`,
              }),
              {},
            ),
          )}
          columns={range(0, numberOfColumns).map(columnIndex => ({
            title: `Column ${columnIndex + 1}`,
            render: row => row[`value${columnIndex + 1}`],
            width: '150px',
          }))}
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
