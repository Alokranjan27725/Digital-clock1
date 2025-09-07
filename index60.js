function updateTime() {
  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

  document.querySelector('#new-york span').textContent =
    new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'America/New_York' }).format(new Date());

  document.querySelector('#london span').textContent =
    new Intl.DateTimeFormat('en-GB', { ...options, timeZone: 'Europe/London' }).format(new Date());

  document.querySelector('#tokyo span').textContent =
    new Intl.DateTimeFormat('ja-JP', { ...options, timeZone: 'Asia/Tokyo' }).format(new Date());

  document.querySelector('#india span').textContent =
    new Intl.DateTimeFormat('en-IN', { ...options, timeZone: 'Asia/Kolkata' }).format(new Date());
}

setInterval(updateTime, 1000);
updateTime();