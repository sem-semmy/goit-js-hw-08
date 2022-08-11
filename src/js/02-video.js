import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

const previousTime = Number(localStorage.getItem('videoplayer-current-time'));

if (previousTime) {
  player.setCurrentTime(previousTime);
}

player.on(
  'timeupdate',
  throttle(data => {
    console.log(data);
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);
// const player = new Vimeo.Player(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

// import Player from '@vimeo/player';
// import { throttle } from 'lodash';

// const iframe = document.querySelector('#vimeo-player');
// const player = new Player(iframe, {
//   id: 19231868,
//   width: 640,
// });

// player.on('timeupdate', function (e) {
//     const
//   console.log(e);
//   l;
// });

// const onPlay = function (data) {
//   // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);
// import Player from '@vimeo/player';

////
//
//
