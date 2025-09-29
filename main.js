
const showHide = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');
const form = document.querySelector('.comment-form');
const nameField = form.querySelector('#name');
const commentField = form.querySelector('#comment');
const list = document.querySelector('.comment-container');

commentWrapper.style.display = 'none';
showHide.setAttribute('aria-expanded', 'false');

showHide.addEventListener('click', () => {
  const expanded = showHide.getAttribute('aria-expanded') === 'true';
  showHide.setAttribute('aria-expanded', String(!expanded));
  showHide.textContent = expanded ? 'Show comments' : 'Hide comments';
  commentWrapper.style.display = expanded ? 'none' : 'block';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameValue = nameField.value.trim();
  const commentValue = commentField.value.trim();
  if (!nameValue || !commentValue) return;

  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;
  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);
  form.reset();
});
