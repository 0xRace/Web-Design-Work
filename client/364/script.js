const NodeRSA = require('node-rsa');

let key = new NodeRSA({b: 512});
let publicKey = key.exportKey('pkcs8-public-pem');
let privateKey = key.exportKey('pkcs8-private-pem');

function addHtml(target, message) {
  const targetList = document.querySelector(target);
  targetList.innerHTML = `<li>${message}</li>`;
}
function encryptMessage(message, keyInput) {
  // console.log(message);
  const text = message;
  const encrypted = key.encrypt(text, 'base64');
  console.log('encrypted: ', encrypted);
  addHtml('.message-result',encrypted);

}
function decryptMessage(message, keyInput) {
  console.log(message);
  const text = message;
  const decrypted = key.decrypt(text, 'utf8');
  console.log('decrypted: ', decrypted);
  addHtml('.message-result',decrypted);
}
function generateKeys() {
  key = new NodeRSA({b: 512});
  publicKey = key.exportKey('pkcs8-public-pem');
  privateKey = key.exportKey('pkcs8-private-pem');
  console.log(publicKey);
  total = `${publicKey}<br>${privateKey}`;
  addHtml('.keys-list', total);
}
function updateKeys(newKey) {
  console.log(newKey);
  key.importKey(newKey, 'pkcs8');
  publicKey = key.exportKey('pkcs8-public-pem');
  privateKey = key.exportKey('pkcs8-private-pem');
  console.log(privateKey);
  total = `${publicKey}<br>${privateKey}`;
  addHtml('.keys-list', total);
}

async function mainEvent() {
  const form = document.querySelector('.main_form'); // change this selector to match the id or classname of your actual form
  const encrypt = document.querySelector('.encrypt_button');
  const decrypt = document.querySelector('.decrypt_button');
  const keyGen = document.querySelector('.key_generation');
  const update = document.querySelector('.update_button');

  
  const message = document.querySelector('#message');
  const encryptionKey = document.querySelector('#encryption_key');

  // encrypt.style.display = 'block';

  let storedMessage;
  let storedKey;
  // inputListener(resto);
  message.addEventListener('input', async (event) => {
    // console.log(event.target.value);
    storedMessage = event.target.value;
  });

  encryptionKey.addEventListener('input', async(event) => {
    // console.log(event.target.value);
    storedKey = event.target.value;
  });
  encrypt.addEventListener('click', async(event) => {
    // console.log(`message: ${storedMessage} key: ${storedKey}`);
    encryptMessage(storedMessage, storedKey);
  });
  decrypt.addEventListener('click', async(event) => {
    console.log(`message: ${storedMessage} key: ${storedKey}`);
    decryptMessage(storedMessage, storedKey);
  });
  keyGen.addEventListener('click', async(event) => {
    generateKeys();
  });
  update.addEventListener('click', async(event) => {
    updateKeys(storedKey);
  });

  form.addEventListener('submit', async (submitEvent) => {
    // async has to be declared all the way to get an await
    submitEvent.preventDefault(); // This prevents your page from refreshing!
  });
}

document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests