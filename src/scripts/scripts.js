import 'babel-polyfill';
import './favicon';
import populateUser from'./populateUsers';

const users = ['ESL_SC2', 'cretetion', 'freecodecamp', 'habathcx', 'noobs2ninjas', 'lobosjr'];
const api = 'https://wind-bow.glitch.me/twitch-api';

users.forEach((username) => {
  function ajax(url) {
    fetch(url)
      .then(data => data.json())
      .then(data => dataGen.next(data));
  }

  function* steps(api, username) {
    const user = yield ajax(`${api}/users/${username}`);
    const channel = yield ajax(`${api}/channels/${username}`);
    const stream = yield ajax(`${api}/streams/${username}`);

    populateUser(user, channel, stream);
  }

  const dataGen = steps(api, username);
  dataGen.next();
});


