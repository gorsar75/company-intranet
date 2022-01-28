const allNews = [{
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
const newsRemove = document.getElementById('news-remove');

displayAllNews(allNews);

newsForm.addEventListener('submit',  listener: (event: Event) => {
    event.preventDefault();
    console.log(document.getElementById('news-submitted-by').value );
    console.log(document.getElementById('news-content').value);


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

    items.forEach((item) => addNewCard(item, newsShowEl))
}
//     for (const key in items) {
//         addNewCard(items)
//     }
// }
function addNewCard(item, displayEl) {
    const newsCardDiv = document.createElement('div');

        newsCardDiv.innerHTML =
            <div class="pb-3 border-b-2 border-gray-500">
                <h3> ${item.name} </h3>
                <h5 class="text-xs text-gray-600">${item.date}</h5>
                <p class="text-xs">${item.content}</p>

            </div>;
        displayEl.appendChild(newsCardDiv)
    }


