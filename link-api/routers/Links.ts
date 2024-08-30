
const createRandomId = () => {
  let random_id = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < 7; i++) {
    random_id += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return random_id;
}


