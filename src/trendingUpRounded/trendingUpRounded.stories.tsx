import React from "react";
import TrendingUpRounded from './trendingUpRounded';

export default {
  title: "TrendingUpRounded"
};

export const Primary = () => <TrendingUpRounded color="primary" />;

export const Secondary = () => <TrendingUpRounded color="secondary" />;

export const Large = () => <TrendingUpRounded fontSize="large" />;

export const Small = () => <TrendingUpRounded fontSize="small" />;

export const CustomColor = () => <TrendingUpRounded htmlColor="#1dcf83" />;