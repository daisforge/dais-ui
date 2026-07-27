/* eslint-disable react-hooks/rules-of-hooks */
import DocArgsTemplate from '@df-storybook/templates/DocArgsTemplate.mdx';
import type { Meta, StoryObj } from '@storybook/react';
import { StoryTableCanvasConfigComp } from '@ui-kit/components/StoriesUtils/storiesUtils.TableCanvas';
import type { ComponentType } from 'react';
import React from 'react';
/**
 * ### API tableConfig:
 */
const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/API/tableConfig',
  parameters: {
    docs: {
      page: DocArgsTemplate
    }
  },
  component: StoryTableCanvasConfigComp as ComponentType<unknown>
};

export default meta;

export const Docs: StoryObj = {
  name: 'API',
  // eslint-disable-next-line react/jsx-no-useless-fragment
  render: () => <></>
};
