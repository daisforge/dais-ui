import { vi } from 'vitest';

import { validateRequiredHoс } from './validateRequiredHoс';

describe('validateRequiredHoс', () => {
  it('should return requireResult if dateFrom or dateTo is undefined, null or empty string', () => {
    const required = 'required';
    const validateRange = vi.fn().mockReturnValue(true);
    const externalValidates = vi.fn().mockReturnValue(true);
    const value = { dateFrom: undefined, dateTo: undefined };
    const formValues = {};
    const result = validateRequiredHoс({
      required,
      validateRange,
      externalValidates
    })(value, formValues);
    expect(result).toEqual('required');
  });

  it('should return resultRange if it is string', () => {
    const required = 'required';
    const validateRange = vi.fn().mockReturnValue('resultRange');
    const externalValidates = vi.fn().mockReturnValue(true);
    const value = { dateFrom: '2020-01-01', dateTo: '2020-12-31' };
    const formValues = {};
    const result = validateRequiredHoс({
      required,
      validateRange,
      externalValidates
    })(value, formValues);
    expect(result).toEqual('resultRange');
  });

  it('should return externalValidate result if it is function', () => {
    const required = 'required';
    const validateRange = vi.fn().mockReturnValue(true);
    const externalValidates = vi.fn().mockReturnValue('externalValidateResult');
    const value = { dateFrom: '2020-01-01', dateTo: '2020-12-31' };
    const formValues = {};
    const result = validateRequiredHoс({
      required,
      validateRange,
      externalValidates
    })(value, formValues);
    expect(result).toEqual('externalValidateResult');
  });

  it('should return externalValidate result if it is object', () => {
    const required = 'required';
    const validateRange = vi.fn().mockReturnValue(true);
    const externalValidates = {
      key: vi.fn().mockReturnValue('externalValidateResult')
    };
    const value = { dateFrom: '2020-01-01', dateTo: '2020-12-31' };
    const formValues = {};
    const result = validateRequiredHoс({
      required,
      validateRange,
      externalValidates
    })(value, formValues);
    expect(result).toEqual('externalValidateResult');
  });

  it('should return true if all conditions are false', () => {
    const required = 'required';
    const validateRange = vi.fn().mockReturnValue(true);
    const externalValidates = vi.fn().mockReturnValue(true);
    const value = { dateFrom: '2020-01-01', dateTo: '2020-12-31' };
    const formValues = {};
    const result = validateRequiredHoс({
      required,
      validateRange,
      externalValidates
    })(value, formValues);
    expect(result).toBe(true);
  });
});
