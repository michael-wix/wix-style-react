import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  columns,
  divider,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import AnnouncementModalLayout from '..';
import Checkbox from '../../Checkbox';

import BasicExample from '!raw-loader!./examples/BasicExample';
import FootnoteExample from '!raw-loader!./examples/FootnoteExample';
import LinkExample from '!raw-loader!./examples/LinkExample';
import NoIllustrationExample from '!raw-loader!./examples/NoIllustrationExample';
import ThemeExample from '!raw-loader!./examples/ThemeExample';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: AnnouncementModalLayout,
  componentPath: '..',

  componentProps: {
    title: 'Modal title',
    children: 'Lorem ipsum',
    primaryButtonText: 'Confirm',
    secondaryButtonText: 'Cancel',
    sideActions: <Checkbox>Check</Checkbox>,
    footnote: 'footnote text',
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/AnnouncementModalLayout/',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'This line here should briefly describe component in just a sentence or two. It should be short and easy to read.',
            }),
          ]),

          columns([
            importExample(
              "import AnnouncementModalLayout from 'wix-style-react/AnnouncementModalLayout';",
            ),
          ]),

          divider(),

          title('Examples'),

          code({
            title: 'Simple Usage',
            description: 'A simple example with compact preview',
            compact: true,
            source: BasicExample,
          }),
          code({
            title: 'Link Example',
            description: 'With a Link instead of the secondary action button.',
            compact: true,
            source: LinkExample,
          }),
          code({
            title: 'No Illustration Example',
            compact: true,
            source: NoIllustrationExample,
          }),
          code({
            title: 'Footnote Example',
            description: 'The basic example with the addition of a footnote',
            compact: true,
            source: FootnoteExample,
          }),
          code({
            title: 'Theme Example',
            description: 'The basic example with a premium theme',
            compact: true,
            source: ThemeExample,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
