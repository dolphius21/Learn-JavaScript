class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(endpoint) {
    return fetch(this.baseURL + endpoint).then((response) => response.json());
  }

  // TODO: implement FetchWrapper's put method
  put(endpoint, body) {
    return fetch(this.baseURL + endpoint, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then((res) => res.json());
  }
}

// Sample usage - do not modify
/* normally, we don't use try/catch with fetch.
 * This is only for this challenge to allow you to
 * work on the tests one by one. */
try {
  const API = new FetchWrapper('https://api.learnjavascript.online');

  API.put('/demo/grades.json', {
    grade: 18
  }).then((data) => {
    console.log(data);
  });
} catch (error) {}
