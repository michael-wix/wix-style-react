# Upgrading `wix-style-react` from 7 to 8

## Removed

- `<VBox/>` & `<HBox/>` - Use `<Box/>` instead.
- `<FullTextView/>` - Use `<Text/>` instead.
- `<AutoCompleteComposite/>` - Use `<FormField/>` instead.
- `<InputAreaWithLabelComposite/>` - Use `<FormField/>` instead.
- `<MultiSelectComposite/>` - Use `<FormField/>` instead.
- `<FieldWithSelectionComposite/>` - Use `<FormField/>` instead.
- `<GoogleAddressInputWithLabel/>` - Use `<FormField/>` instead.
- Icons from `wix-style-react/new-icons` import path were removed. Please install and use icons from `wix-ui-icons-common` package directly. You can migrate your existing codebase using provided codemod, please see [migration guide](./docs/migration/ICONS.md) for more details.
- `<TextLink/>` - Use `<TextButton as="a"/>` instead.
- `<SideMenu/>` - Use `<Sidebar/>` instead.
- `<SideMenuDrill/>` - Use `<Sidebar/>` instead.
- `<StatsWidget/>` - Use `<StatisticsWidget/>` instead. See [migration guide](./docs/migration/StatsWidget.md).
- `<PopoverMenu/>` - replaced with new beta PopoverMenu, see migration guide below.
- `<DataTable/>` - Use `<Table/>` instead.

## Changed:

#### `<Page/>`

- Props:
  - removed `upgrade` - component is now upgraded by default

#### `<TableActionCell/>`

- Props:
  - removed `upgrade` - component is now upgraded by default
  - changed `primaryAction.theme` to `primaryAction.skin` (with new values)

#### `<Table/>`

- Testkit:
  - removed `clickRowChecbox` - removed due to typo, use `clickRowCheckbox` instead

#### `<Input/>`
- Props:
  - changed `error` to `status`
  - changed `errorMessage` to `statusMessage`
  - removed `units` use `<Input.Affix/>` component instead
  - removed `magnifyingGlass` use `<Search/>` component instead
  - removed `help` and `helpMessage` use a `<FormField/>` wrapper instead
  - removed `theme`
- Testkit:
  - removed `clickUnit`
  - removed `getUnit`
  - removed `hasMagnifyingGlass`
  - removed `clickMagnifyingGlass`
  - removed `hasHelp`
  - removed `hasExclamation`
  - removed `isNarrowError`

Removed `<Input.Units/>` use `<Input.Affix>` instead.

#### `<ColorInput/>`

- Props:
  - changed `error` to `status`
  - changed `errorMessage` to `statusMessage`
  - removed `help` and `helpMessage` use a `<FormField/>` wrapper instead
- Testkit:
  - removed `hasError`
  - added `hasStatus`
  - added `getStatus`
  - added `hasStatusMessage`
  - added `getStatusMessage`

#### `<Dropdown/>`

- Props:
  - changed `error` to `status`
  - changed `errorMessage` to `statusMessage`
  - removed `help` and `helpMessage` use a `<FormField/>` wrapper instead

#### `<DropdownLayout/>`

- Props:
  - removed `theme`
- Testkit:
  - removed `hasTheme`

#### `<InputWithOptions/>`

- Props:
  - changed `error` to `status`
  - changed `errorMessage` to `statusMessage`

#### `<LinearProgressBar/>`

- Props:
  - removed `shouldLoadAsync`
- Testkit:
  - removed `getTooltip`
  - removed `isTooltipShown`
  - changed `getTooltipErrorMessage` in driver (not uni) returns a `string` instead of a `Promise<string>`

#### `<InputArea/>`

- Props:
  - removed `onTooltipShow`
  - changed `error` to `status`
  - changed `errorMessage` to `statusMessage`
  - removed `theme`
  - removed `help` and `helpMessage` use a `<FormField/>` wrapper instead
- Testkit:
  - removed `hasError`
  - removed `hasWarning`
  - removed `getTooltipDataHook`
  - removed `getTooltipElement`
  - removed `isErrorMessageShown`
  - removed `mouseEnterErrorIndicator`
  - removed `getErrorMessage`
  - removed `getStatusMessage`
  - added `hasStatus`
  - added `getStatus`
  - added `hasStatusMessage`
  - added `getStatusMessage`

#### `<InputWithOptions/>`

- Props:
  - removed `disableClickOutsideWhenClosed`, this functionality is now permanent

#### `<Popover/>`

- Props:
  - removed `disableClickOutsideWhenClosed`, this functionality is now permanent

#### `<Avatar/>`

- Prop `color` - Deprecated old values, valid values are now only A1 to A6.

#### `<CircularProgressBar/>`

- Props:
  - removed `shouldLoadAsync`
- Testkit:
  - removed `getTooltip`
  - removed `isTooltipShown`
  - changed `getTooltipErrorMessage` in driver (not uni) returns a `string` instead of a `Promise<string>`

#### `<DatePicker/>`

- Props:
  - removed `isOpen` - use `initialOpen` instead.
  - changed `error` to `status`
  - changed `errorMessage` to `statusMessage`
  - removed `help` and `helpMessage` use a `<FormField/>` wrapper instead

#### `<Loader/>`

- Props:
  - removed `shouldLoadAsync`

#### `<Tag/>`

- Props:
  - removed `wrap` - now text has ellipsis by default

#### `<ImageViewer/>`

- Props:
  - removed `tooltipPlacement`
  - changed `error` to `status`
  - changed `errorMessage` to `statusMessage`
- Testkit:
  - removed `isErrorVisible`
  - removed `getErrorTooltipContent`
  - added `hasStatus`
  - added `getStatus`
  - added `hasStatusMessage`
  - added `getStatusMessage`

#### `<StatisticsWidget/>`

- Props:
  - removed `statistics` use `items` instead.

#### `<Button/>`

- Props:
  - removed `type` - For type button, use `<SegmentedToggle/>` component instead
- Testkit:
  - removed `isButtonType`

#### `<MultiSelect/>`

- Props:
  - changed `error` to `status`
  - changed `errorMessage` to `statusMessage`
  - removed `theme`
  - removed `help` and `helpMessage` use a `<FormField/>` wrapper instead
- Testkit:
  - removed `inputWrapperHasError`

#### `<NoBorderInput/>`

- Props:
  - changed `error` to `status`
  - changed `errorMessage` to `statusMessage`
  - removed `theme`
  - removed `help` and `helpMessage` use a `<FormField/>` wrapper instead

#### `<Search/>`

- Props:
  - changed `error` to `status`
  - changed `errorMessage` to `statusMessage`
  - removed `theme`
  - removed `help` and `helpMessage` use a `<FormField/>` wrapper instead

#### `<NumberInput/>`

- Props:
  - changed `error` to `status`
  - changed `errorMessage` to `statusMessage`
  - removed `theme`
  - removed `help` and `helpMessage` use a `<FormField/>` wrapper instead

#### `<GoogleAddressInput/>`

- Props:
  - changed `error` to `status`
  - changed `errorMessage` to `statusMessage`
  - removed `theme`
  - removed `help` and `helpMessage` use a `<FormField/>` wrapper instead

#### `<RichTextInputArea/>`

- Props:
  - changed `error` to `status`
  - changed `errorMessage` to `statusMessage`
  - removed `help` and `helpMessage` use a `<FormField/>` wrapper instead
- Testkit:
  - removed `hasError`
  - removed `getErrorMessage`
  - added `hasStatus`
  - added `getStatus`
  - added `hasStatusMessage`
  - added `getStatusMessage`

## Migrating to new PopoverMenu

Old PopoverMenu component was removed and replaced with new component that was previously available as `beta/PopoverMenu`.

Replace old PopoverMenu:

```jsx
import PopoverMenu from 'wix-style-react/PopoverMenu';
import PopoverMenuItem from 'wix-style-react/PopoverMenuItem';

<PopoverMenu>
  <PopoverMenuItem onClick={() => {}} text="Item" />
</PopoverMenu>
```

With new PopoverMenu:

```jsx
import { PopoverMenu, IconButton } from 'wix-style-react';
import More from 'wix-ui-icons-common/More';

<PopoverMenu
  triggerElement={
    <IconButton skin="inverted">
      <More />
    </IconButton>
  }
>
  <PopoverMenu.MenuItem onClick={() => {}} text="Item" />
</PopoverMenu>
```
