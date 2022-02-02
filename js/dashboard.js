let allNews = [{
    id: 1,
    name: "Watchman Nee",
    date: "01-26-2022",
    content: "U.S. economy grew 6.9% in fourth quarter, GDP shows, as businesses restocked and consumers boosted spending"
}, {
    id: 2,
    name: "Margaret Barber",
    date: "01-24-2022",
    content: "Treasury yield curve flattens to levels not seen since 2019-2020 after Fed's policy update"
}, {
    id: 3,
    name: "Witness Lee",
    date: "01-22-2022",
    content: "Here’s how painful the economic loss will be for the U.S. from unchecked climate change"
}];



const newsShowEl = document.getElementById('news-show');
const newsForm = document.getElementById('news-form');

displayAllNews(allNews);

newsForm.addEventListener('submit', (event) => {
    event.preventDefault();


const newNews = {
    id: Math.floor(Math.random() * 1000),
    name: document.getElementById('news-submitted-by').value,
    date: "01-26-2022",
    content:document.getElementById('news-content').value
};


allNews = [...allNews, newNews];

displayAllNews(allNews)

});



function displayAllNews(items) {
    newsShowEl.innerHTML = "";

    items.map(
        item => addNewCard(item, newsShowEl)
    );
}

function addNewCard(item, displayEl) {
    const newsCardDiv = document.createElement('div');

    newsCardDiv.innerHTML = `
          <div class="p-3 m-2 bg-gray-200 shadow-sm">
          <span class="mb-2 bg-black text-white w-2 p-2 rounded-full cursor-pointer"
            onclick="deleteNews(${item.id})"
          >
          ⨯
          </span>
           <h3> ID: ${item.id} | ${item.name} </h3>
            <h5 class="text-xs text-gray-600"> ${item.date} </h5>
            <p class="text-xs"> ${item.content} </p>
        </div>
    `;

    displayEl.appendChild(newsCardDiv);
}



