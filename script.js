const form = document.getElementById('confessionForm');
const input = document.getElementById('confessionInput');
const list = document.getElementById('confessionList');

let lastPostTime = 0; // track kung kailan huling nag-post

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const now = Date.now();
  const oneHour = 60 * 60 * 1000; // 1 oras in milliseconds

  // check kung may delay
  if (now - lastPostTime < oneHour) {
    const remaining = Math.ceil((oneHour - (now - lastPostTime)) / 60000);
    alert("Please wait " + remaining + " more minutes before posting again.");
    return;
  }

  const message = input.value.trim();
  if (message !== '') {
    const para = document.createElement('p');
    para.textContent = message;
    list.appendChild(para);
    input.value = '';
    lastPostTime = now; // update last post time
  }
});
