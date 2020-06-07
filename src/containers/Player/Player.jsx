import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import Ink from 'react-ink';

import { setPlayerHeight, removeTrackToPlayer } from '../../redux/actions'; 
import {  } from '../../modules/custom-hooks';

import './Player.scss';

const Player = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progressBarWidth, setProgressBarWidth] = useState('0%');
  const playingNowId = useSelector(state => state.content.playingNowId);
  const playingNowTrack = useSelector(state => state.content.playingNowTrack);
  const prevPlayingNowId = usePrevious(playingNowId);
  const audioElementRef = useRef(null);
  const playerRef = useRef(null);
  const playerHeight = playerRef?.current?.offsetHeight || 0;
  const dispatch = useDispatch();

  const handleTimeUpdate = () => {
    const audioPlayer = audioElementRef.current;
    const width = Math.floor((audioPlayer.currentTime / audioPlayer.duration) * 100) + '%';

    setProgressBarWidth(width);
  }

  const handleOnEnded = () => {
    dispatch(removeTrackToPlayer());
  }

  useEffect(() => {
    if (playingNowId === prevPlayingNowId) {
      return;
    }

    setCurrentTrack(playingNowTrack);
  }, [playingNowId, prevPlayingNowId, playingNowTrack]);

  useEffect(() => {
    const audioPlayer = audioElementRef.current;

    if (prevPlayingNowId === playingNowId) {
      if (isPlaying && audioPlayer?.paused) {
        audioPlayer.play();
      }

      if (!isPlaying && !audioPlayer?.paused) {
        audioPlayer.pause();
      }
    }
    else {
      setIsPlaying(true);
    }
  }, [isPlaying, playingNowId, prevPlayingNowId]);

  useEffect(() => {
    if (playerHeight > 0) {
      dispatch(setPlayerHeight(playerHeight))
    }
  }, [isPlaying, dispatch, playerHeight])

}

export default Player;
