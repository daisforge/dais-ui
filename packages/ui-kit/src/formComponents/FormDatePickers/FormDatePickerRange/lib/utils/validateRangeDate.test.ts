import { DatePickerErrorEnum } from '../../../types';
import { validateRangeDate } from './validateRangeDate';

describe('validateRangeDate', () => {
  const min = new Date('2020-01-01').getTime();
  const max = new Date('2020-12-31').getTime();
  const required = true;
  const invalidFormatMessage = DatePickerErrorEnum.DATE_FORMAT_IS_INVALID;
  const testProps = { min, max, required, invalidFormatMessage };
  it('should return resultDateFrom if it is string', () => {
    const value = { dateFrom: '2020-01-02', dateTo: '2020-12-30' };
    const result = validateRangeDate(testProps)(value, {});
    expect(result).toEqual(true);
  });

  it('should return resultDateTo if it is string', () => {
    const value = { dateFrom: '2019-01-01', dateTo: '2020-12-31' };
    const result = validateRangeDate(testProps)(value, {});
    expect(result).toEqual(true);
  });

  it('should return true if all conditions are false', () => {
    const value = { dateFrom: '2020-01-02', dateTo: '2020-12-31' };
    const result = validateRangeDate(testProps)(value, {});
    expect(result).toBe(true);
  });
  it('should return invalidFormatMessage', () => {
    const value = { dateFrom: '2020-01-02', dateTo: 'aaa' };
    const result = validateRangeDate(testProps)(value, {});
    expect(result).toBe(invalidFormatMessage);
  });
});
