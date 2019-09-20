import React, { useState } from 'react';
import styled from 'styled-components';
// assets
import youtubeLogo from '../../imgs/youtubeLogo.png';

// style
const SearchBarLayout = styled.div`
    position: fixed;
    background: #272727;
    width: 100vw;
    min-height: 50px;
    overflow: hidden;
`;

const YoutubeLogo = styled.img`
    width: 106px;
    display: block;
    float: left;
    margin: 0 1rem;
    padding: .6rem 0 0;
`;

const SearchBarField = styled.div`
    margin: 0 auto;
    width: 70vw;
    box-sizing: border-box;
    padding: .5rem 0;
`;

const SearchBarLabel = styled.label`
    display: none;
`;

const SearchBarInput = styled.input`
    width: 60vw;
    height: 100%;
    outline: none;
    border: none;
    background: #000;
    color: white;
    font-size: 1rem;
    padding: .3rem;
`;

const SearchBtn = styled.button`
    height: 100%;
    font-family: 'Inconsolata';
    font-size: 1rem;
    line-height: 1.2rem;
    color: white;
    background: #f00;
    border: none;
    cursor: pointer;
    padding: 2px;

    &::after {
        content: 'SEARCH';
    }
`;

const Searchbar = ({ handleAPICall }) => {
    const [searchKeyword, setSearchKeyword] = useState('');

    // event
    const handleChange = e => {
        setSearchKeyword(e.target.value);
        if (e.key && e.key === 'Enter') {
            handleSearchBtn();
        }
    }

    const handleSearchBtn = e => {
        handleAPICall(searchKeyword);
    }

    return (
        <>
        <SearchBarLayout>
            <YoutubeLogo src={youtubeLogo} alt='youtubeLogo' />
            <SearchBarField>
                <SearchBarLabel htmlFor='searchVideo' />
                <SearchBarInput 
                    placeholder='검색어를 입력해주세요'
                    name='searchVideo'
                    onChange={handleChange}
                    value={searchKeyword}
                    onKeyPress={handleChange}
                />
                <SearchBtn onClick={handleSearchBtn}></SearchBtn>
            </SearchBarField>
        </SearchBarLayout>
        </>
    )
}

export default Searchbar;