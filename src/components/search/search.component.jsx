import React from 'react';
import { SearchContainer, SeachField } from './search.styles';
// import { ReactComponent as SearchIcon } from '../../assets/search-24px (1).svg';
export const Search = () => {
	return (
		<SearchContainer>
			<SeachField type='text' placeholder='search'></SeachField>
		</SearchContainer>
	);
};

export default Search;
