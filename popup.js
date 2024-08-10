function displayRecords(records) {
  const preElement = document.getElementById('records');
  preElement.textContent = JSON.stringify(records, null, 2);
}

function clearRecords() {
  chrome.storage.local.remove('inputs', function() {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    }
    displayRecords([]); // Clear the display
  });
}

document.getElementById('clearRecords').addEventListener('click', clearRecords);

chrome.storage.local.get('inputs', function(data) {
  if (chrome.runtime.lastError) {
    console.error(chrome.runtime.lastError);
    document.getElementById('records').textContent = 'Failed to load records.';
    return;
  }

  const records = data.inputs || [];
  displayRecords(records);
});