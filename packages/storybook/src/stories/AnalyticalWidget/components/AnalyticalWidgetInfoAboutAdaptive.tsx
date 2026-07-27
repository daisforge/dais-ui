import { Box } from '@ui-kit/components/Box';
import { BodyM } from '@ui-kit/components/Typography';

export const AnalyticalWidgetInfoAboutAdaptive = () => (
  <Box $css={{ maxWidth: '800px', marginBottom: '32px' }}>
    <BodyM as="h3" style={{ marginBottom: '16px' }}>
      Адаптивность и размеры виджета
    </BodyM>

    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '24px'
      }}
    >
      <thead>
        <tr style={{ borderBottom: '1px solid #eee' }}>
          <th style={{ textAlign: 'left', padding: '12px', width: '15%' }}>
            Размер
          </th>
          {/* <th style={{ textAlign: 'left', padding: '12px', width: '15%' }}>
            Брейкпоинт
          </th> */}
          <th style={{ textAlign: 'left', padding: '12px', width: '70%' }}>
            Параметры
          </th>
        </tr>
      </thead>
      <tbody>
        {/* Размер L */}
        <tr style={{ borderBottom: '1px solid #eee' }}>
          <td rowSpan={3} style={{ padding: '12px', verticalAlign: 'top' }}>
            <strong>L (Large)</strong>
          </td>
          {/* <td style={{ padding: '12px' }}>0-1439px</td> */}
          {/* <td style={{ padding: '12px' }}>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>
                <code>min-width: 396px</code>
              </li>
              <li>
                <code>max-width: 608px</code>
              </li>
              <li>
                <code>width: 100%</code>
              </li>
              <li>
                <code>min-height: 344px</code>
              </li>
              <li>
                <code>padding: 10px</code>
              </li>
              <li>
                <code>border-radius: 12px</code>
              </li>
            </ul>
          </td> */}
        </tr>
        <tr style={{ borderBottom: '1px solid #eee' }}>
          {/* <td style={{ padding: '12px' }}>1440-1919px</td> */}
          {/* <td style={{ padding: '12px' }}>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>
                <code>min-width: 396px</code>
              </li>
              <li>
                <code>max-width: 608px</code>
              </li>
              <li>
                <code>width: 100%</code>
              </li>
              <li>
                <code>min-height: 432px</code>
              </li>
              <li>
                <code>padding: 16px</code>
              </li>
              <li>
                <code>border-radius: 16px</code>
              </li>
            </ul>
          </td> */}
        </tr>
        <tr style={{ borderBottom: '1px solid #eee' }}>
          {/* <td style={{ padding: '12px' }}>1920px+</td> */}
          <td style={{ padding: '12px' }}>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>
                <code>min-width: 448px</code>
              </li>
              <li>
                <code>max-width: 608px</code>
              </li>
              <li>
                <code>width: 100%</code>
              </li>
              <li>
                <code>min-height: 512px</code>
              </li>
              <li>
                <code>height: 100%</code>
              </li>
              <li>
                <code>padding: 16px</code>
              </li>
              <li>
                <code>border-radius: 16px</code>
              </li>
            </ul>
          </td>
        </tr>

        {/* Размер M */}
        <tr style={{ borderBottom: '1px solid #eee' }}>
          <td rowSpan={3} style={{ padding: '12px', verticalAlign: 'top' }}>
            <strong>M (Medium)</strong>
          </td>
          {/* <td style={{ padding: '12px' }}>0-1439px</td> */}
          {/* <td style={{ padding: '12px' }}>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>
                <code>min-width: 396px</code>
              </li>
              <li>
                <code>max-width: 608px</code>
              </li>
              <li>
                <code>width: 100%</code>
              </li>
              <li>
                <code>min-height: 172px</code>
              </li>
              <li>
                <code>padding: 10px</code>
              </li>
              <li>
                <code>border-radius: 12px</code>
              </li>
            </ul>
          </td> */}
        </tr>
        <tr style={{ borderBottom: '1px solid #eee' }}>
          {/* <td style={{ padding: '12px' }}>1440-1919px</td> */}
          {/* <td style={{ padding: '12px' }}>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>
                <code>min-width: 396px</code>
              </li>
              <li>
                <code>max-width: 608px</code>
              </li>
              <li>
                <code>width: 100%</code>
              </li>
              <li>
                <code>min-height: 208px</code>
              </li>
              <li>
                <code>padding: 16px</code>
              </li>
              <li>
                <code>border-radius: 16px</code>
              </li>
            </ul>
          </td> */}
        </tr>
        <tr style={{ borderBottom: '1px solid #eee' }}>
          {/* <td style={{ padding: '12px' }}>1920px+</td> */}
          <td style={{ padding: '12px' }}>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>
                <code>min-width: 448px</code>
              </li>
              <li>
                <code>max-width: 608px</code>
              </li>
              <li>
                <code>width: 100%</code>
              </li>
              <li>
                <code>min-height: 248px</code>
              </li>
              <li>
                <code>height: 100%</code>
              </li>
              <li>
                <code>padding: 16px</code>
              </li>
              <li>
                <code>border-radius: 16px</code>
              </li>
            </ul>
          </td>
        </tr>

        {/* Размер S */}
        <tr style={{ borderBottom: '1px solid #eee' }}>
          <td rowSpan={3} style={{ padding: '12px', verticalAlign: 'top' }}>
            <strong>S (Small)</strong>
          </td>
          {/* <td style={{ padding: '12px' }}>0-1439px</td> */}
          {/* <td style={{ padding: '12px' }}>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>
                <code>min-width: 190px</code>
              </li>
              <li>
                <code>max-width: 296px</code>
              </li>
              <li>
                <code>width: 100%</code>
              </li>
              <li>
                <code>min-height: 172px</code>
              </li>
              <li>
                <code>padding: 10px</code>
              </li>
              <li>
                <code>border-radius: 12px</code>
              </li>
            </ul>
          </td> */}
        </tr>
        <tr style={{ borderBottom: '1px solid #eee' }}>
          {/* <td style={{ padding: '12px' }}>1440-1919px</td> */}
          {/* <td style={{ padding: '12px' }}>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>
                <code>min-width: 190px</code>
              </li>
              <li>
                <code>max-width: 296px</code>
              </li>
              <li>
                <code>width: 100%</code>
              </li>
              <li>
                <code>min-height: 208px</code>
              </li>
              <li>
                <code>padding: 16px</code>
              </li>
              <li>
                <code>border-radius: 16px</code>
              </li>
            </ul>
          </td> */}
        </tr>
        <tr>
          {/* <td style={{ padding: '12px' }}>1920px+</td> */}
          <td style={{ padding: '12px' }}>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>
                <code>min-width: 216px</code>
              </li>
              <li>
                <code>max-width: 296px</code>
              </li>
              <li>
                <code>width: 100%</code>
              </li>
              <li>
                <code>min-height: 248px</code>
              </li>
              <li>
                <code>height: 100%</code>
              </li>
              <li>
                <code>padding: 16px</code>
              </li>
              <li>
                <code>border-radius: 16px</code>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>

    {/* <Box $css={{ padding: '16px', background: '#f8f8f8', borderRadius: '8px' }}>
      <BodyM as="h4" style={{ marginBottom: '8px' }}>
        Ключевые особенности:
      </BodyM>
      <ul style={{ margin: 0, paddingLeft: '20px' }}>
        <li style={{ marginBottom: '8px' }}>
          <strong>Адаптивные параметры:</strong> min-height, padding и
          border-radius меняются в зависимости от viewport
        </li>
        <li style={{ marginBottom: '8px' }}>
          <strong>Фиксированные ограничения ширины:</strong> min-width и
          max-width зависят только от размера виджета (L/M/S)
        </li>
      </ul>
    </Box> */}
  </Box>
);
