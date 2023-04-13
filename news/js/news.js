let news = [];
let menus = document.querySelectorAll(".menus button");

menus.forEach((menu) =>
  menu.addEventListener("click", (event) => getNewsByTopic(event))
);

const getLatestNews = async () => {
  let url = new URL(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=Canada&topic=business&page_size=5`
  );
  let header = new Headers({
    "x-api-key": "uKIl3ZG6je4K6ZVErWNpz4Pt9tAqb4mMJTDdEgM2XM4",
  });
  let response = await fetch(url, { headers: header });
  let data = await response.json();
  news = data.articles;
  console.log(news);

  render();
};

const getNewsByTopic = async (event) => {
  let topic = event.target.textContent.toLowerCase();
  let url = new URL(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=Canada&page_size=5&topic=${topic}`
  );
  let header = new Headers({
    "x-api-key": "uKIl3ZG6je4K6ZVErWNpz4Pt9tAqb4mMJTDdEgM2XM4",
  });
  let response = await fetch(url, { headers: header });
  let data = await response.json();
  console.log(data);
};

const render = () => {
  let newsHTML = "";
  newsHTML = news // this "news" is an array as you can see in the green-coloured detail
    .map((item) => {
      // the "item" is each news from the scroll window
      return ` <div class="row news">
        <div class="col-lg-4">
          <img
            src="${item.media}"
            alt="Science Centre picture"
            class="image-size"
          />
        </div>
        <div class="col-lg-8">
          <h2>${item.title}</h2>
          <p>
            ${item.summary}
          </p>
          <div>
            ${item.rights} * ${item.published_date}
          </div>
        </div>
      </div>`;
    })
    .join("");
  document.getElementById("news-board").innerHTML = newsHTML;
};

getLatestNews();
