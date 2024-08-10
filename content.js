document.addEventListener('input', (event) => {
  const target = event.target;
  if (target.tagName === 'TEXTAREA' || target.tagName === 'INPUT') {
    const data = {
      url: window.location.href,
      type: target.tagName,
      name: target.name || target.id,
      value: target.value
    };
    
    chrome.runtime.sendMessage({ action: 'saveInput', data });
  }
});