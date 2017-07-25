const mainUsers = document.getElementById('mainUsers');
const range = document.createRange();

range.selectNode(mainUsers);

function linkify(text) {
  const urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  return text.replace(urlRegex, function(url) {
    return '<a href="' + url + '">' + url + '</a>';
  });
}

export default function populateUser(user, channel, stream) {
  const logo = user.logo;
  const displayName = user.display_name;
  const bio = linkify(user.bio);
  const status = channel.status;
  const online = stream.stream;
  const url = channel.url;
  const template = `\
      <div class="column is-half-desktop">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <a href="${url}"><img src="${logo}" alt="Image"></a>
                </figure>
              </div>
              <div class="media-content is-clearfix">
                <p class="title is-4"><a href="${url}">${displayName}</a> <a href="${url}"><span class="tag ${online?'is-success':'is-danger'} is-pulled-right">${online?'Online':'Offline'}</span></a></p>
                ${online?`<a href="${url}" class="subtitle is-6">${status}</a>`:'User is currently offline.'}
              </div>
            </div>
          </div>
        </div>
      </div>
`;

  const documentFragment = range.createContextualFragment(template);
  mainUsers.appendChild(documentFragment);
}