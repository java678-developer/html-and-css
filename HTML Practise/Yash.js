// This file is for HTML Web Services
let i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i); // Send data back to the main script
  setTimeout(timedCount, 500); // Run every 500ms
}

timedCount();
