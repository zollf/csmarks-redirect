function redirect() {
  const date = new Date();
  date.setTime(date.getTime() + (365*24*60*60*1000));
  document.cookie = `auto_redirect=true; expires=${date.toUTCString()}; path=/`;
  document.getElementById("csmarks-link").click();
}