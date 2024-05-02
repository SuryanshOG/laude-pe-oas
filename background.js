chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === "install") {
        chrome.tabs.create({ url: 'https://t.me/ashokmittal' });
    }
});
console.log("Developer By Suryansh Shukla , Follow me on telegram https://t.me/ashokmittal , follow me on Github https://github.com/SuryanshOG , Follow me on linkedin https://www.linkedin.com/in/suryanshog/ ");

