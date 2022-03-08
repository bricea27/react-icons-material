import { Box } from '@material-ui/core'
import React from "react";

import { SearchProps } from "./search.types";

const Search: React.FC<SearchProps> = props => (
  <Box width={10} height={10} display="block" {...props} />
);

export default Search;