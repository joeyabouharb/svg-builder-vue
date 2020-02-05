Promise.allSettled([1, 3, 5, Promise.reject(21), 32])
  .then((data) => {
    data.forEach(bla => {
      console.log(bla)
    })
  })
  .catch((err) => {
    console.log(err);
  });