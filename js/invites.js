'use strict';

retrieveData();

const inviteArticle = document.getElementById('generated');
function renderInvitation() {
  const x = invitations.length - 1;
  for (let i = x; i < invitations.length; i++) {
    const headerEl = document.createElement('h1');
    inviteArticle.appendChild(headerEl);
    headerEl.textContent = 'The ' + invitations[i].groomFamilyName + ' Family & The ' + invitations[i].brideFamilyName + ' Family';
    const pEl = document.createElement('p');
    inviteArticle.appendChild(pEl);
    pEl.textContent = 'Invite you to join them in celebrating of the wedding of their children';
    const groomEl = document.createElement('h2');
    inviteArticle.appendChild(groomEl);
    groomEl.textContent = invitations[i].groom;
    const andEl = document.createElement('h3');
    inviteArticle.appendChild(andEl);
    andEl.textContent = '&';
    const brideEl = document.createElement('h2');
    inviteArticle.appendChild(brideEl);
    brideEl.textContent = invitations[i].bride;
    const detailsEl = document.createElement('p');
    inviteArticle.appendChild(detailsEl);
    detailsEl.textContent = 'The wedding will be held at ' + invitations[i].chosenVenue + ' on ' + invitations[i].weddingDay;
    const backgroundEl = document.createElement('img');
    inviteArticle.insertAdjacentElement('afterEnd', backgroundEl);
    backgroundEl.setAttribute('src', invitations[i].invite);
    backgroundEl.setAttribute('alt', 'Invitation Backgound');
    backgroundEl.setAttribute('class', 'selected');
  }
}

renderInvitation();
// renderAllInvitations();