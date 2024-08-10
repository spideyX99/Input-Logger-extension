chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'saveInput') {
    chrome.storage.local.get({ inputs: [] }, (result) => {
      const inputs = result.inputs;
      inputs.push(message.data);
      chrome.storage.local.set({ inputs });
    });
  }
});