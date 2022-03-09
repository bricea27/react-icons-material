module.exports = ({ componentName, componentFileName }) => ({
  extension: '.stories.tsx',
  content: `import React from "react";
import { ComponentMeta } from '@storybook/react';
    
import ${componentName}Component from './${componentFileName}';
    
export default {
  title: "${componentName}",
  component: ${componentName}Component
} as ComponentMeta<typeof ${componentName}>;
    
export const ${componentName} = args => <${componentName}Component {...args} />
    
${componentName}.storyName = '${componentName}'
`
})