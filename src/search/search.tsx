import { SvgIcon } from '@material-ui/core'
import React from "react";

import { SearchProps } from "./search.types";

const Search: React.FC<SearchProps> = props => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    {/* Svg paths here. */}
  </SvgIcon>
);

export default Search;