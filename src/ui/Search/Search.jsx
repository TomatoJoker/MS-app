import React from 'react';
import {clsx} from "clsx";
import './search.scss';

const Search = ({className}) => {
    const searchClass = 'search';

    return (
        <form className={clsx(searchClass, true && className)}>
            Search
        </form>
    );
};

export default Search;