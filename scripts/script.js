const buttonProfile = document.querySelector('.card__profile__share__button');
const buttonSocialMedia = document.querySelector('.card__social-media__share');
const socialMedia = document.querySelector('.social-media');
const socialMediaButton = document.querySelector('.card__profile__share');
const cardProfile = document.querySelector('.card__profile');



function showSocialMedia(){
  socialMedia.classList.toggle('hide');
  socialMediaButton.classList.toggle('hide');
  cardProfile.classList.toggle('hide')

}

function hideSocialMedia(){
  socialMedia.classList.add('hide');
  socialMediaButton.classList.remove('hide');
  cardProfile.classList.toggle('hide')
}

buttonProfile.addEventListener('click', showSocialMedia);

buttonSocialMedia.addEventListener('click', hideSocialMedia);
