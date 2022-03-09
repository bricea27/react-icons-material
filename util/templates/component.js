module.exports = ({ componentName }) => ({
  extension: '.tsx',
  content: `import { SvgIcon, SvgIconProps } from '@material-ui/core'
import React from "react";
    
interface ${componentName}Props extends SvgIconProps {}
    
const ${componentName} = React.forwardRef((props: ${componentName}Props, ref: any) => (
  <SvgIcon viewBox="0 0 24 24" {...props} ref={ref}>
    {/* Svg paths here. */}
  </SvgIcon>
));
    
${componentName}.displayName = '${componentName}';
  
export default ${componentName};
`
})