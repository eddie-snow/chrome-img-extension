const form = document.querySelector('form');
const input = document.querySelector('.input');

const replaceImages = (url) =>{
    const images = document.querySelectorAll('img');
    images.forEach((image) => image.scr =url);
};

form.addEventListener('submit', async(event) =>{

    event.preventDefault();

    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: replaceImages,
        args: [input.value]
    });
});
//supposed to change all imgs but is not working