import React from 'react';
import { iconsList } from './icons-list';

export const Icon = ({ name, size, fill }) => {
  const IconComponent = iconsList[name];
  return <IconComponent size={size} fill={fill} />;
};
