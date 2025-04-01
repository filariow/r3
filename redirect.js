function redirect() {
  window.location.replace(searchParams.get('target'))
}

const searchParams = new URLSearchParams(window.location.search);

if (searchParams.has('target')) {
  setTimeout(redirect, 5000)
}
