export async function fetchUsers() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()
  return 3
  //console.log(users)
}
fetchUsers()