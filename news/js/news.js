let news = [];
let page = 1;
let total_pages = 0;
let menus = document.querySelectorAll(".menus button");
let searchButton = document.getElementById("search-button");
let url;

url = new URL(
  `https://api.newscatcherapi.com/v2/latest_headlines?countries=CA&topic=science&page_size=5`
);

let searchBox = document.getElementById("search");

searchBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search-button").click();
    setTimeout(function () {
      searchBox.value = "";
    }, 1000);
  }
});

const getNews = async () => {
  try {
    let header = new Headers({
      "x-api-key": "uKIl3ZG6je4K6ZVErWNpz4Pt9tAqb4mMJTDdEgM2XM4",
    });
    url.searchParams.append("page", page);
    let response = await fetch(url, { headers: header });
    let data = await response.json();
    if (response.status == 200) {
      if (data.total_hits == 0) {
        throw new Error("No search results match your criteria.");
      }
      news = data.articles;
      total_pages = data.total_pages;
      page = data.page;
      console.log(news);
      render();
      pagenation();
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.log("Your error is", error.message);
    errorRender(error.message);
  }
};

const getLatestNews = async () => {
  url = new URL(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=CA&topic=science&page_size=5`
  );
  getNews();
};

menus.forEach((menu) =>
  menu.addEventListener("click", (event) => getNewsByTopic(event))
);

const getNewsByTopic = async (event) => {
  console.log("clicked", event.target.textContent);
  let topic = event.target.textContent.toLowerCase();

  url = new URL(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=CA&page_size=5&topic=${topic}`
  );
  getNews();
};

const getNewsByKeyword = async () => {
  let keyword = document.getElementById("search").value;

  url = new URL(
    `https://api.newscatcherapi.com/v2/search?q=${keyword}&countries=CA`
  );
  getNews();
};

const render = () => {
  let newsHTML = "";
  newsHTML = news // this "news" is an array as you can see in the green-coloured detail
    .map((item) => {
      const summary = item.summary
        ? `${item.summary.slice(0, 200)}...`
        : "no summary";
      const source = item.rights ? `${item.rights}...` : "no source";
      // the "item" is each news from the scroll window
      return ` <div class="row news">
        <div class="col-lg-4">
          <img
            src="${
              item.media ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU"
            }"
            alt="news picture"
            class="image-size"
          />
        </div>
        <div class="col-lg-8">
          <h2>${item.title}</h2>
          <p>
            ${summary}
          </p>
          <div>
            ${source} * ${moment(item.published_date)
        .startOf("hours ago")
        .fromNow()}
          </div>
        </div>
      </div>`;
    })
    .join("");
  document.getElementById("news-board").innerHTML = newsHTML;
};

const errorRender = (message) => {
  let errorHTML = `<div class="alert alert-danger text-center" role="alert">
  ${message}
</div>`;
  document.getElementById("news-board").innerHTML = errorHTML;
};

const pagenation = () => {
  let pagenationHTML = ``;
  let pageGroup = Math.ceil(page / 5);
  let last = pageGroup * 5;
  let first = last - 4;
  let lastPage = total_pages;

  if (total_pages <= 3) {
    last = total_pages;
    first = 1;
  }

  if (last > lastPage) {
    last = lastPage;
    first = last - 4 <= 0 ? 1 : last - 4; // if the first page group has less than 5 pages of items
  }

  pagenationHTML = `<li class="page-item">
  <a class="page-link" href="#" aria-label="Previous" onclick="moveToPage(${
    total_pages.first
  })">
    <span aria-hidden="true">&lt;&lt;</span>
  </a></li>
  <li class="page-item">
  <a class="page-link" href="#" aria-label="Previous" onclick="moveToPage(${
    page - 1
  })">
    <span aria-hidden="true">&lt;</span>
  </a></li>`;

  if (page == 1) {
    pagenationHTML = `<li class="page-item"  style="display: none">
    <a class="page-link" href="#" aria-label="Previous">
      <span aria-hidden="true">&lt;&lt;</span>
    </a></li>
    <li class="page-item" style="display: none">
  <a class="page-link" href="#" aria-label="Previous" onclick="moveToPage(${
    page - 1
  })">
    <span aria-hidden="true">&lt;</span>
  </a></li>`;
  }

  for (let i = first; i <= last; i++) {
    pagenationHTML += `<li class=" page-item ${
      page == i ? "active" : ""
    }"><a class="page-link" onclick="moveToPage(${i})" href="#">${i}</a></li>`;
  }

  if (page == lastPage) {
    pagenationHTML += `<li class="page-item" style="display: none" >
    <a class="page-link" href="#" aria-label="Next" onclick="moveToPage(${
      page + 1
    })">
      <span aria-hidden="true"></span>
    </a></li>
    <li class="page-item"  style="display: none">
  <a class="page-link" href="#" aria-label="Next" onclick="moveToPage(${lastPage})">
    <span aria-hidden="true"></span>
  </a></li>`;
  } else {
    pagenationHTML += `<li class="page-item" >
  <a class="page-link" href="#" aria-label="Next" onclick="moveToPage(${
    page + 1
  })">
    <span aria-hidden="true">&gt;</span>
  </a></li>
  <li class="page-item" >
  <a class="page-link" href="#" aria-label="Next" onclick="moveToPage(${lastPage})">
    <span aria-hidden="true">&gt;&gt;</span>
  </a></li>`;
  }

  document.querySelector(".pagination").innerHTML = pagenationHTML;
};

const moveToPage = (pageNum) => {
  page = pageNum;
  url.searchParams.set("page", page);
  getNews();
};

searchButton.addEventListener("click", getNewsByKeyword);
getLatestNews();
