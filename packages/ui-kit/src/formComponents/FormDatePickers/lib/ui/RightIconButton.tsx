import { DatePickerRangeCompProps } from '@ui-kit/components/DatePicker';
import { EmbedIconButton } from '@ui-kit/components/EmbedIconButton';
import { IconCalendarOutline } from '@ui-kit/icons';

// FIXME: marginRight: datePickerSize === 'xs' ? '10px' : '14px' - убрать, когда атомарная команда добавит отступ для contentRight слота в DatePickerRange
export const DefaultRightIconButton = ({
  datePickerSize
}: {
  datePickerSize: DatePickerRangeCompProps['size'];
}) => (
  <EmbedIconButton
    size={datePickerSize === 'xs' ? 's' : 'm'}
    view="secondary"
    style={{
      marginRight: datePickerSize === 'xs' ? '8px' : '12px',
      marginTop: '2px'
    }}
  >
    <IconCalendarOutline
      color="inherit"
      size={datePickerSize === 'xs' ? 'xs' : 's'}
    />
  </EmbedIconButton>
);
