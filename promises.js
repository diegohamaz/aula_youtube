const posts = [
  { title: 'Post 1', body: 'Este é o post 1' },
  { title: 'Post 2', body: 'Este é o post 2' }
];

function lerPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function criarPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Erro algo deu errado por favor repita a operação');
      }
    }, 2000);
  });
}

//Promisse 
criarPost({ title: 'Post 3', body: 'Este é post 3' })
  .then(lerPosts)
  .catch(err => console.log(err));

//Async / Await
async function init() {
  await criarPost({ title: 'Post  3', body: 'Este é post 3' });

  lerPosts();
}

init();

// Asunc / Await / Fetch
async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();

  console.log(data);
}

fetchUsers();

// Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, 'Goodbye')
);
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res =>
  res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then(values =>
  console.log(values)
);
