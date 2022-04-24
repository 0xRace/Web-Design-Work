function createHtmlList(collection) {
  // console.table(collection);
  const targetList = document.querySelector('.resto-list');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const {name} = item;
    const displayName = name.toLowerCase();
    const injectThisItem = `<li>${displayName}</li>`;
    targetList.innerHTML += injectThisItem;
  });
}

// function inputListener(target) {
//   target.addEventListener('input',async (event) => {
//     console.log(event.target.value);
//     const selectResto = storedDataArray.filter((item) => {
//       const lowerName = item.name.toLowerCase();
//       const lowerValue = event.target.value.toLowerCase();
//       return lowerName.includes(lowerValue);
//     });
//     console.log(selectResto);
//     createHtmlList(selectResto);
//   });
// }
async function mainEvent() {
  const form = document.querySelector('.main_form'); // change this selector to match the id or classname of your actual form
  const encrypt = document.querySelector('.encrypt_button');
  const decrypt = document.querySelector('.decrypt_button');

  const message = document.querySelector('#message');
  const key = document.querySelector('#encryption_key');

  encrypt.style.display = 'block';

  let storedMessage = [];
  let storedKey = [];
  // inputListener(resto);
  message.addEventListener('input', async (event) => {
    // console.log(event.target.value);
    storedMessage = event.target.value;
  });

  key.addEventListener('input', async(event) => {
    // console.log(event.target.value);
    storedKey= event.target.value;
  });
  encrypt.addEventListener('click', async(event) => {
    console.log('message: '+storedMessage+ ' key: ' + storedKey);
  })

  form.addEventListener('submit', async (submitEvent) => {
    // async has to be declared all the way to get an await
    submitEvent.preventDefault(); // This prevents your page from refreshing!
  });
}

document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests