const tabs = document.querySelectorAll(".tabs");
const currentDisplay = document.querySelector('#displayed');
const initialTab = document.querySelector(".tabs.first")

function produceSources(sources) {

    let listItems = ``;

    sources.map(source => {
        
        listItems += `<li><a href="${source.url}">${source.title}</a></li>`;
        
    } )

    return listItems;
}

tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        produceTab(resources,e.target);
    } )
})

function produceTab(resources,eventTarget) {

    tabs.forEach(tab => tab.classList.remove("active"));

    eventTarget.classList.add("active");

    const filteredArray = resources.filter(resource => resource.category === eventTarget.textContent);    

    currentDisplay.innerHTML = `
        <h1 id="technology">${filteredArray[0].category}</h1>
            <p id="description">
                ${filteredArray[0].text}
            </p>
            <ul id="links">                
                ${produceSources(filteredArray[0].sources)}
            </ul>
    `;
}

window.addEventListener('load', () => {
    produceTab(resources,initialTab);
})





