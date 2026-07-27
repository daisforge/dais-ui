/* eslint-disable react-hooks/rules-of-hooks */
import DocArgsTemplate from '@df-storybook/templates/DocArgsTemplate.mdx';
import type { Meta, StoryObj } from '@storybook/react';
import { StoryColumnConfigTableCanvasComp } from '@ui-kit/components/StoriesUtils/storiesUtils.TableCanvas';
import type { ComponentType } from 'react';
import React from 'react';

/**
 * ### API columnConfig:
 */
const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/API/columnConfig',
  parameters: {
    docs: {
      page: DocArgsTemplate
    }
  },
  excludeStories: ['CANVAS'],
  component: StoryColumnConfigTableCanvasComp as ComponentType<unknown>
};

export default meta;

export const Docs: StoryObj = {
  name: 'API',
  // eslint-disable-next-line react/jsx-no-useless-fragment
  render: () => <></>
};
