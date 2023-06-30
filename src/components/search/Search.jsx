
import React, { useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import { useDebounce } from '../../hooks';


import './Search.scss';
const Search = () => {

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);
    const inputRef = useRef();


    // useEffect(() => {
    //     if (!debouncedValue.trim()) {
    //         setSearchResult([]);
    //         return;
    //     }
    //     const fetchApi = () => {
    //         setLoading(true);
    //         setTimeout(() => {
    //             const result = users.filter((item) => item.user_name.includes(debouncedValue));
    //             setSearchResult(result);
    //             setLoading(false);
    //         }, 500);
    //     };
    //     fetchApi();
    // }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    return (
        <div className="searchContainer">
              
                <div className="searchInput">
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search here"
                        spellCheck={false}
                        onChange={handleChange}
                    />
                    {!!searchValue && !loading && (
                        <button className="clearIcon" onClick={handleClear}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    )}

                    {loading && <i className=" loadingIcon fa-solid fa-spinner"></i>}
                </div>
                
                
            </div>
    );
};

export default Search;
