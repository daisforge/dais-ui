import { DatePickerErrorEnum } from '../../types';
import { validateDate } from './validateDate';

describe('validateDate', () => {
  it('should return true if date is between min and max', () => {
    const min = new Date('2020-01-01').getTime();
    const max = new Date('2020-12-31').getTime();
    const value = new Date('2020-06-01');
    const result = validateDate({
      min,
      max,
      invalidFormatMessage: DatePickerErrorEnum.DATE_FORMAT_IS_INVALID,
    })(value);

    expect(result).toBe(true);
  });

  it('should return "Дата меньше минимальной" if date is less than min', () => {
    const min = new Date('2020-01-01').getTime();
    const max = new Date('2020-12-31').getTime();
    const value = new Date('2019-06-01');
    const result = validateDate({
      min: { value: min, message: DatePickerErrorEnum.DATE_IS_SMALLER },
      max,
      invalidFormatMessage: DatePickerErrorEnum.DATE_FORMAT_IS_INVALID,
    })(value);
    expect(result).toBe(DatePickerErrorEnum.DATE_IS_SMALLER);
  });

  it('should return "Дата больше максимальной" if date is greater than max', () => {
    const min = new Date('2020-01-01').getTime();
    const max = new Date('2020-12-31').getTime();
    const value = new Date('2021-06-01');
    const result = validateDate({
      min,
      max: { value: max, message: DatePickerErrorEnum.DATE_IS_BIGGER },
      invalidFormatMessage: DatePickerErrorEnum.DATE_FORMAT_IS_INVALID,
    })(value);
    expect(result).toBe(DatePickerErrorEnum.DATE_IS_BIGGER);
  });

  it('should return "Формат указанной даты - неверный" if date is not valid', () => {
    const min = new Date('2020-01-01').getTime();
    const max = new Date('2020-12-31').getTime();
    const value = 'invalid date';
    const result = validateDate({
      min,
      max,
      required: {
        value: true,
        message: DatePickerErrorEnum.DATE_FORMAT_IS_INVALID,
      },
      invalidFormatMessage: DatePickerErrorEnum.DATE_FORMAT_IS_INVALID,
    })(value);
    expect(result).toBe(DatePickerErrorEnum.DATE_FORMAT_IS_INVALID);
  });

  it('should return true if min and max are not provided', () => {
    const value = new Date('2020-06-01');
    const result = validateDate({
      invalidFormatMessage: DatePickerErrorEnum.DATE_FORMAT_IS_INVALID,
    })(value);
    expect(result).toBe(true);
  });

  it('should return "Формат указанной даты - неверный" if value is not provided', () => {
    const min = new Date('2020-01-01').getTime();
    const max = new Date('2020-12-31').getTime();
    const result = validateDate({
      min,
      max,
      required: {
        value: true,
        message: DatePickerErrorEnum.DATE_IS_REQUIRED,
      },
      invalidFormatMessage: DatePickerErrorEnum.DATE_FORMAT_IS_INVALID,
    })();
    expect(result).toBe(DatePickerErrorEnum.DATE_IS_REQUIRED);
  });

  it('should return true if date is min', () => {
    const min = new Date('2020-01-01').getTime();
    const value = new Date('2020-01-01');
    const result = validateDate({
      min: {
        value: min,
        message: DatePickerErrorEnum.DATE_IS_SMALLER,
      },
      invalidFormatMessage: DatePickerErrorEnum.DATE_FORMAT_IS_INVALID,
    })(value);

    expect(result).toBe(DatePickerErrorEnum.DATE_IS_SMALLER);
  });
});
