async function fetchCatPic() {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data[0].url;
  } catch (error) {
    throw new Error("Error fetching cat picture:", error);
  }
}

async function fetchDadJoke() {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.joke;
  } catch (error) {
    throw new Error("Error fetching dad joke:", error);
  }
}

Promise.all([fetchCatPic(), fetchDadJoke()])
  .then((results) => {
    const [catPic, dadJoke] = results;

    console.log("Cat pic:", catPic);
    console.log("Dad joke:", dadJoke);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
