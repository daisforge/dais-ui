import { Image } from '@ui-kit/components/Image';
import { TextS } from '@ui-kit/components/Typography';
import { surfaceSolidTertiary } from '@ui-kit/tokens';
import React from 'react';
import styled from 'styled-components';

import noRowsImage from './no-rows-image.png';

const ContainerStyled = styled.div`
  grid-column: 1/-1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .img {
    margin-bottom: -4.8px;
    margin-left: -13.65px;
  }
  & .text {
    margin-top: -2px;
  }
`;

export const NoRowsFallback = ({ text }: { text?: string }) => (
  <ContainerStyled>
    <Image
      className="img"
      src={noRowsImage}
      width="122px"
      height="98px"
      alt="Картинка для случая, когда в таблице нет данных"
    />
    <TextS className="text" color={surfaceSolidTertiary}>
      {text ?? 'Нет данных по заданным параметрам'}
    </TextS>
  </ContainerStyled>
);
