import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search d-flex align-items-center mx-auto border rounded-pill p-2'>
			<MdSearch className='search-icons' size='1.3em' />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
		</div>
	);
};

export default Search;
