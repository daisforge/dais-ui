import { convertToISO } from './convertToISO';

describe('convertToISO', () => {
  // ---------- DD.MM.YYYY ----------
  test('should convert DD.MM.YYYY to ISO', () => {
    const result = convertToISO({
      date: '12.03.2023',
      format: 'DD.MM.YYYY',
    });
    expect(result).toMatch(/2023-03-11T\d{2}:\d{2}:\d{2}\.\d{3}Z/);
  });

  test('should return "" for partial DD.MM.YYYY', () => {
    const result = convertToISO({ date: '02 2025', format: 'DD.MM.YYYY' });
    expect(result).toBe('');
  });

  test('should return "" for empty string', () => {
    const result = convertToISO({ date: '', format: 'DD.MM.YYYY' });
    expect(result).toBe('');
  });

  // ---------- DD.MM.YY ----------
  test('should convert DD.MM.YY to ISO', () => {
    const result = convertToISO({ date: '12.03.23', format: 'DD.MM.YY' });
    expect(result).toMatch(/2023-03-11T\d{2}:\d{2}:\d{2}\.\d{3}Z/);
  });

  // ---------- DD MMM ----------
  test('should convert DD MMM (short name with dot)', () => {
    const currentYear = new Date().getFullYear().toString();
    const result = convertToISO({ date: '12 мар.', format: 'DD MMM' });
    expect(result).toMatch(
      new RegExp(`${currentYear}-03-11T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z`),
    );
  });

  test('should return "" for DD MMM with double dot', () => {
    const result = convertToISO({ date: '12 мар..', format: 'DD MMM' });
    expect(result).toBe('');
  });

  test('should convert DD MMM (long name as input)', () => {
    const currentYear = new Date().getFullYear().toString();
    const result = convertToISO({ date: '12 марта', format: 'DD MMM' });
    expect(result).toMatch(
      new RegExp(`${currentYear}-03-11T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z`),
    );
  });

  // ---------- DD MMMM YYYY ----------
  test('should convert DD MMMM YYYY', () => {
    const result = convertToISO({
      date: '12 марта 2023',
      format: 'DD MMMM YYYY',
    });
    expect(result).toMatch(/2023-03-11T\d{2}:\d{2}:\d{2}\.\d{3}Z/);
  });

  test('should convert DD MMMM YYYY (nominative)', () => {
    const result = convertToISO({
      date: '12 март 2023',
      format: 'DD MMMM YYYY',
    });
    expect(result).toMatch(/2023-03-11T\d{2}:\d{2}:\d{2}\.\d{3}Z/);
  });

  test('should convert DD MMMM YYYY (июль)', () => {
    const result = convertToISO({
      date: '22 июль 2023',
      format: 'DD MMMM YYYY',
    });
    expect(result).toMatch(/2023-07-21T\d{2}:\d{2}:\d{2}\.\d{3}Z/);
  });

  // ---------- MM.YYYY (без дня) ----------
  test('should convert MM.YYYY', () => {
    const result = convertToISO({
      date: '03.2025',
      format: 'MM.YYYY',
    });
    expect(result).toMatch(/2025-02-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/);
  });

  test('should convert MM.YYYY (december)', () => {
    const result = convertToISO({
      date: '12.2023',
      format: 'MM.YYYY',
    });
    expect(result).toMatch(/2023-11-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/);
  });

  test('should return "" for invalid MM.YYYY', () => {
    const result = convertToISO({ date: '13.2025.01', format: 'MM.YYYY' });
    expect(result).toBe('');
  });

  // ---------- MMMM YYYY (без дня) ----------
  test('should convert MMMM YYYY', () => {
    const result = convertToISO({
      date: 'март 2025',
      format: 'MMMM YYYY',
    });
    expect(result).toMatch(/2025-02-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/);
  });

  test('should convert MMMM YYYY (genitive)', () => {
    const result = convertToISO({
      date: 'марта 2025',
      format: 'MMMM YYYY',
    });
    expect(result).toMatch(/2025-02-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/);
  });

  test('should convert MMMM YYYY (short name)', () => {
    const result = convertToISO({
      date: 'мар. 2025',
      format: 'MMMM YYYY',
    });
    expect(result).toMatch(/2025-02-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/);
  });

  test('should return "" for invalid MMMM YYYY', () => {
    const result = convertToISO({
      date: 'невалидно 2025',
      format: 'MMMM YYYY',
    });
    expect(result).toBe('');
  });

  // ---------- форматы с тире ----------
  test('should convert DD-MM-YYYY', () => {
    const result = convertToISO({
      date: '15-06-2024',
      format: 'DD-MM-YYYY',
    });
    expect(result).toMatch(/2024-06-14T\d{2}:\d{2}:\d{2}\.\d{3}Z/);
  });

  test('should convert DD-MM-YY', () => {
    const result = convertToISO({
      date: '15-06-24',
      format: 'DD-MM-YY',
    });
    expect(result).toMatch(/2024-06-14T\d{2}:\d{2}:\d{2}\.\d{3}Z/);
  });

  test('should convert MM-YYYY', () => {
    const result = convertToISO({
      date: '06-2024',
      format: 'MM-YYYY',
    });
    expect(result).toMatch(/2024-05-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/);
  });

  test('should convert MMMM-YYYY', () => {
    const result = convertToISO({
      date: 'июнь-2024',
      format: 'MMMM-YYYY',
    });
    expect(result).toMatch(/2024-05-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/);
  });

  test('should return "" when delimiter does not match format', () => {
    const result = convertToISO({
      date: '15.06.2024',
      format: 'DD-MM-YYYY',
    });
    expect(result).toBe('');
  });
});
