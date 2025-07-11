const socket = io();

const form = document.getElementById('message-form');
const input = document.getElementById('message-input');
const chatBox = document.getElementById('chat-box');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = input.value;
  socket.emit('chat message', message);
  input.value = '';
});

socket.on('chat message', (msg) => {
  const msgEl = document.createElement('p');
  msgEl.textContent = msg;
  chatBox.appendChild(msgEl);
  chatBox.scrollTop = chatBox.scrollHeight;
});