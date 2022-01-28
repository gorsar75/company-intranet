const allNews = [{
    name: "Watchman Nee",
    date: "01/26/2022",
    content: "U.S. economy grew 6.9% in fourth quarter, GDP shows, as businesses restocked and consumers boosted spending"
}, {
    name: "Margaret Barber",
    date: "01/24/2022",
    content: "Treasury yield curve flattens to levels not seen since 2019-2020 after Fed's policy update"
}, {
    name: "Witness Lee",
    date: "01/22/2022",
    content: "Here’s how painful the economic loss will be for the U.S. from unchecked climate change"
}];


// console.log(allStories[0].content)
//
// for(const key in allStories){
//     console.log(allStories[key].name)
//     console.log(allStories[key].content)}
const newsShow = document.getElementById('div');
 for (const key in allNews) {
     const newsCardDiv = document.createElement('div')

     newsCardDiv.innerHTML =
         <div class ="pb-3 border-b-2 border-gray-500">
         <h3>Watchman Nee</h3>
         <h5 class="text-xs text-gray-600">01-26-2022</h5>
         <p class="text-xs">Lorem ipsum </p>

         </div>
     newsShow.appendChild(newsCardDiv)
 }


