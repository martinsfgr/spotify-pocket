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
  const audioElementRef = useRef(null);
  const playerRef = useRef(null);
  const playerHeight = playerRef?.current?.offsetHeight || 0;
  const dispatch = useDispatch();
}

export default Player;
