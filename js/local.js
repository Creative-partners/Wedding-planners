'use strict';
const inviteTemplates = [
  ['../img/invites/1.jpg', 'winter'],
  ['../img/invites/2.jpg', 'summer'],
  ['../img/invites/3.jpg', 'spring'],
  ['../img/invites/4.jpg', 'gold'],
  ['../img/invites/5.jpg', 'fall'],
];

let weddingVenue;
let invitationTemp;
let invitations = [];

// rendering invitation templates to select from
const templateSection = document.getElementById('templates');
function renderTemplates() {
  const articleEl = document.createElement('article');
  templateSection.appendChild(articleEl);
  const headerEl = document.createElement('h4');
  articleEl.appendChild(headerEl);
  headerEl.textContent = 'Sample Invitation Generator';
  const paragraphEl = document.createElement('p');
  articleEl.appendChild(paragraphEl);
  paragraphEl.textContent = 'Please select one of the below templates to generate your personalized sample invitation:';
  for (let i = 0; i < inviteTemplates.length; i++) {
    let linkEl = document.createElement('a');
    articleEl.appendChild(linkEl);
    linkEl.setAttribute('href', 'invite.html');
    linkEl.setAttribute('target', '_blank');
    let imageEl = document.createElement('img');
    linkEl.appendChild(imageEl);
    imageEl.setAttribute('src', inviteTemplates[i][0]);
    imageEl.setAttribute('title', inviteTemplates[i][1]);
    imageEl.setAttribute('id', inviteTemplates[i][1]);
    imageEl.setAttribute('class', 'template-backgrounds');
  }
}
// event listener to check for user location selection
results.addEventListener('click', selectLocationHandler);
function selectLocationHandler(event) {
  if (event.target.className === 'button') {
    for (let i = 0; i < options.length; i++) {
      if (event.target.id === options[i].id) {
        weddingVenue = options[i].name;
        console.log(weddingVenue);
        renderTemplates();
      }
    }
  }
  document.getElementById('results').removeEventListener('click', selectLocationHandler);
}
console.log('check venue selected ' + weddingVenue);

// event listener to check for user template selection
templateSection.addEventListener('click', selectTemplateHandler);

function selectTemplateHandler(event) {
  if (event.target.id !== 'templates') {
    for (let i = 0; i < inviteTemplates.length; i++) {
      if (event.target.id === inviteTemplates[i][1]) {
        invitationTemp = inviteTemplates[i][0];
      }
    }
  }
  new Invitation(bName, lName, gName, glName, wDate, weddingVenue, invitationTemp);
  storeData();
  document.getElementById('templates').removeEventListener('click', selectTemplateHandler);
}

// store invitation information into an array of objects
function Invitation(bName, bFamily, gName, gFamily, wedDate, wedVenue, inviteTemp) {
  this.bride = bName;
  this.brideFamilyName = bFamily;
  this.groom = gName;
  this.groomFamilyName = gFamily;
  this.weddingDay = wedDate;
  this.chosenVenue = wedVenue;
  this.invite = inviteTemp;
  invitations.push(this);
}
console.log('check invitations ' + invitations);

// store invitations into local storage
function storeData() {
  const inviteDataString = JSON.stringify(invitations);
  localStorage.setItem('invites', inviteDataString);
}
// get back data from local storage
function retrieveData() {
  let inviteDataString = localStorage.getItem('invites');

  let inviteDataArray = JSON.parse(inviteDataString);
  console.log(inviteDataArray);
  // invitations.push(inviteDataArray);
  for (let i = 0; i < inviteDataArray.length; i++) {
    new Invitation(
      inviteDataArray[i].bride,
      inviteDataArray[i].brideFamilyName,
      inviteDataArray[i].groom,
      inviteDataArray[i].groomFamilyName,
      inviteDataArray[i].weddingDay,
      inviteDataArray[i].chosenVenue,
      inviteDataArray[i].invite
    );
  }
}

