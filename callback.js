const posts = [
    { title: 'Post 1', body: 'Este é o post 1' },
    { title: 'Post 2', body: 'Este é o post 2' }
  ];
  
  function lerPosts() {
    setTimeout(() => {
      let output = '';
      posts.forEach((post, index) => {
        saida += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = saida;
    }, 1000);
  }
  
  function criarPost(post, callback) {
    setTimeout(() => {
      posts.push(post);
      callback();
    }, 2000);
  }
  
  criarPost({ title: 'Post 3', body: 'Este é post 3' }, lerPosts);
  