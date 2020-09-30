'use strict';

retrieveData();

let homePageSection = document.querySelector('#previous');
function renderAllInvitations() {
  let x;
  if (invitations.length < 3) {
    x = 0;
  } else {
    x = invitations.length - 3;
  }
  for (let i = x; i < invitations.length; i++) {
    let localInvites = document.createElement('article');
    homePageSection.appendChild(localInvites);
    localInvites.setAttribute('class', 'invitation-article');
    let headerPrevEl = document.createElement('h3');
    localInvites.appendChild(headerPrevEl);
    headerPrevEl.textContent = 'The ' + invitations[i].groomFamilyName + ' family and the ' + invitations[i].brideFamilyName + ' family';
    let paragraphPrevEl = document.createElement('p');
    localInvites.appendChild(paragraphPrevEl);
    paragraphPrevEl.textContent = 'Invite you to join them in celebrating of the wedding of their children';
    let brideNamePrevEl = document.createElement('h2');
    localInvites.appendChild(brideNamePrevEl);
    brideNamePrevEl.textContent = invitations[i].bride;
    let andPrevEl = document.createElement('h4');
    localInvites.appendChild(andPrevEl);
    andPrevEl.textContent = '&';
    let groomNamePrevEl = document.createElement('h2');
    localInvites.appendChild(groomNamePrevEl);
    groomNamePrevEl.textContent = invitations[i].groom;
    let detailsPrevEl = document.createElement('p');
    localInvites.appendChild(detailsPrevEl);
    detailsPrevEl.textContent = 'The wedding will be held at ' + invitations[i].chosenVenue + ' on ' + invitations[i].weddingDay;
    let backgroundPrevEl = document.createElement('img');
    localInvites.insertAdjacentElement('afterEnd', backgroundPrevEl);
    backgroundPrevEl.setAttribute('src', invitations[i].invite);
    backgroundPrevEl.setAttribute('alt', invitations[i].chosenVenue);
    backgroundPrevEl.setAttribute('class', 'previous-invitation');
  }
}
renderAllInvitations();