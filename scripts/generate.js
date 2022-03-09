const _ = require('lodash')
const fs = require("fs");
const open = require('open')

const name = process.argv[2];

if (!name) {
  console.error("Please supply a valid component name");
  process.exit(1);
}

const componentName = `${_.startCase(name).replace(/\s/g, '')}`
const componentNameQueryString = name.split('-').join('+');
const componentFileName = `${_.camelCase(name)}`;
const componentDirectory = `./src/${componentFileName}`;

console.log("Generating component files with name: " + componentName);

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`);
  process.exit(1);
}

// Create the directory
fs.mkdirSync(componentDirectory);

// Create the component
fs.writeFileSync(
  `${componentDirectory}/${componentFileName}.tsx`,
  `import { SvgIcon, SvgIconProps } from '@material-ui/core'
import React from "react";
  
export interface ${componentName}Props extends SvgIconProps {}
  
const ${componentName} = React.forwardRef((props: ${componentName}Props, ref: any) => (
  <SvgIcon viewBox="0 0 24 24" {...props} ref={ref}>
    {/* Svg paths here. */}
  </SvgIcon>
));
  
export default ${componentName};
`
);

// Create the story file
fs.writeFileSync(
  `${componentDirectory}/${componentFileName}.stories.tsx`,
  `import React from "react";
import ${componentName} from './${componentFileName}';
  
export default {
  title: "${componentName}"
};
  
export const Primary = () => <${componentName} color="primary" />;
  
export const Secondary = () => <${componentName} color="secondary" />;
  
export const Large = () => <${componentName} fontSize="large" />;
  
export const Small = () => <${componentName} fontSize="small" />;
  
export const CustomColor = () => <${componentName} htmlColor="#1dcf83" />;
`
);

// Recursively generate the export list of components
fs.readdir('./src', (err, files) => {
  console.log(`Adding ${componentName} to the export list.`)

  // Build out the list of component exports
  const fileContents = files.reduce((prev, curr) => {
    if (curr !== 'index.ts') {
      prev += `export { default as ${_.startCase(curr).replace(/\s/g, '')} } from './${curr}/${curr}'\n`
    }

    return prev
  }, '')

  // Write the contents of the src/components/icons/index.js file
  fs.writeFileSync('./src/index.ts', fileContents)
});

// Open the Material Design Icons explorer
open(`https://fonts.google.com/icons?icon.query=${componentNameQueryString}`)

console.log("Successfully created component under: " + componentDirectory);