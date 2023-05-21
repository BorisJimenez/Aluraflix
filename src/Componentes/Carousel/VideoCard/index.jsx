import React from 'react';
import styled from 'styled-components';

const ThumbnailContainerFront = styled.div`
  width: 23rem;
  margin-bottom: 10px;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  border-radius: 2px;
  border: 3px solid ${(props) => props.borderColor};
`;

export const VideoCardFront = ({ videoId }) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

  return (
    <ThumbnailContainerFront>
      <ThumbnailImage src={thumbnailUrl} alt="YouTube Thumbnail" borderColor="#6BD1FF"/>
    </ThumbnailContainerFront>
  );
};

export const VideoCardBack = ({ videoId }) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

  return (
    <ThumbnailContainerFront>
      <ThumbnailImage src={thumbnailUrl} alt="YouTube Thumbnail" borderColor="#00C86F"/>
    </ThumbnailContainerFront>
  );
};

export const VideoCardGestion = ({ videoId }) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

  return (
    <ThumbnailContainerFront>
      <ThumbnailImage src={thumbnailUrl} alt="YouTube Thumbnail" borderColor="#FE8C2A"/>
    </ThumbnailContainerFront>
  );
};