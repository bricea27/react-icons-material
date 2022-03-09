import React from "react";
import { ComponentMeta } from '@storybook/react';

import TrendingUpRoundedComponent from './trendingUpRounded';

export default {
  title: "TrendingUpRounded",
  component: TrendingUpRoundedComponent
} as ComponentMeta<typeof TrendingUpRounded>;

export const TrendingUpRounded = args => <TrendingUpRoundedComponent {...args} />

TrendingUpRounded.storyName = 'TrendingUpRounded'
