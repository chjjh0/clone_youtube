import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// components
import SearchBar from './components/Searchbar';
import VideoPlay from './components/VideoPlay';
import VideoList from './components/VideoList';


// styled
const UiContainer = styled.div`
    height: 100vh;
    background: black;
    overflow-x: hidden;
`;

const NavEmptySpace = styled.div`
    min-height: 50px;
`;

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    
    // event
    const handleAPICall = (searchKeyword) => {
        const APIKEY = 'AIzaSyCRFHkLfiaf2JndtrpE0YAF-ZkK1BtcukQ';
        axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: APIKEY,
                q: searchKeyword,
            }}
        ).then(data => {
            setVideos(data.data.items);
        })
    }

    const handleVideoSelect = (video) => {
        setSelectedVideo(video)
    }

    return (
        <UiContainer>
            <SearchBar handleAPICall={handleAPICall}></SearchBar>
            <NavEmptySpace></NavEmptySpace>
            <VideoPlay video={selectedVideo}></VideoPlay>
            <VideoList handleVideoSelect={handleVideoSelect} videos={videos}/>
        </UiContainer>
    );
}

export default App;
