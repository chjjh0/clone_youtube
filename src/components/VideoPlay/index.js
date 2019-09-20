import React from 'react';
import styled from 'styled-components';

const YoutubeIframe = styled.iframe`
    width: 100%;
    height: 1000px;
    overflow: hidden;
    border: none;
`;

const SelectedVideoInfo = styled.div`
    width: 100%;
    min-height: 150px;
    padding: 1rem;
    box-sizing: border-box;
    color: #aaa;
`;

const SelectedVideoChannelLink = styled.a`
    text-decoration: none;
    color: #aaaaaa;

    &:hover {
        color: #fff;
    }
`;

const SelectedVideoChannelTitle = styled.h2`

`;

const SelectedVideoTitle = styled.h3`
    margin: 1rem 0;
`;

const SelectedVideoDescription = styled.p`

`;

const VideoPlay = ({ video }) => {
    if (!video) {
        return null;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <YoutubeIframe 
                src={videoSrc} 
                allowFullScreen 
                title='Video player'
            />
            <SelectedVideoInfo>
                <SelectedVideoChannelLink href={`https://www.youtube.com/channel/${video.snippet.channelId}`}>
                    <SelectedVideoChannelTitle>
                            {video.snippet.channelTitle}
                    </SelectedVideoChannelTitle>
                </SelectedVideoChannelLink>
                <SelectedVideoTitle>{video.snippet.title}</SelectedVideoTitle>
                <SelectedVideoDescription>{video.snippet.description}</SelectedVideoDescription>
            </SelectedVideoInfo>
        </div>

    )
}

export default VideoPlay;