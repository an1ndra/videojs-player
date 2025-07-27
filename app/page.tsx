"use client"
import React from 'react';
import VideoJS from './src/components/videoJS';

const Home = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    poster: "https://files.vidstack.io/sprite-fight/poster.webp",
    tracks: [
      {
        src: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        label: 'English',
        kind: 'subtitles',
        default: true,
      },
      {
        kind: "chapters",
        src: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        srclang: "en",
        label: 'Chapters',
        default: true
      }
    ],
    sources: [
      {
        src: 'https://files.vidstack.io/sprite-fight/hls/stream.m3u8',
        type: 'application/x-mpegURL',
      },
    ],

  };


  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on('waiting', () => {
      console.log('Player is waiting');
    });

    player.on('dispose', () => {
      console.log('Player will dispose');
    });
  };

  return (
    <div className='video-wrapper'>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
};

export default Home;