export function fetchUsers() {
  fetch('http://[::1]:3000/api/v1/users')
    .then((response) => response.json())
    .then((data) => console.log(data));
}
