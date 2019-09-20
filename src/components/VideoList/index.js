import React from 'react';
import styled from 'styled-components';
import VideoItem from './VideoItem';

const VideoListLayout = styled.div`
    width: 68vw;
    margin: 8vh auto 0;
    padding: .3rem;
`;

const VideoList = ({ videos , handleVideoSelect }) => {
    const renderedVideos =  videos.map(video => {
        return (
            <VideoItem 
                key={video.id.channelId ? video.id.channelId : video.id.videoId} 
                video={video} 
                handleVideoSelect={handleVideoSelect} 
            />
        )
    });

    return (
        <VideoListLayout>
            {renderedVideos}
        </VideoListLayout>
    )
}

export default VideoList;