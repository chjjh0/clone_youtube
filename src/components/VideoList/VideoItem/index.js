import React from 'react';
import styled from 'styled-components';

const VideoItemLayout = styled.div`
    width: 100%;
    height: 138px;
    margin-bottom: 1rem;
    color: white;
    cursor: pointer;
    clear: both;
`;

const VideoThumbnail = styled.img`
    display: block;
    float: left;
    max-width: 246px;
    max-height: 138px;
`;

const VideoInfoLayout = styled.div`
    padding: 1rem 1rem 1rem 262px;

`;

const VideoTitle = styled.h3`
    font-weight: 500;
    margin: 0;
`;

const VideoItem = ({ video , handleVideoSelect }) => {
    return (
        <VideoItemLayout
            onClick={ () => handleVideoSelect(video) }
        >
            <VideoThumbnail 
                src={video.snippet.thumbnails.medium.url} 
                alt={video.snippet.description} 
            />
            <VideoInfoLayout>
                <VideoTitle>{video.snippet.title}</VideoTitle>            
            </VideoInfoLayout>
        </VideoItemLayout>
    )
};

export default VideoItem;