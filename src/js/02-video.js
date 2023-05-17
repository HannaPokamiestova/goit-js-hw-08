import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, seconds);
}

const savedTime = localStorage.getItem(VIDEOPLAYER_CURRENT_TIME);

if (savedTime) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
