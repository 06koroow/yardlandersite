if (typeof window === 'object') { 
    //check if document is loaded
    document.addEventListener("DOMContentLoaded", 
    () => {
            console.log('finishedLoading')
        });
    
// Fetch Live date data
const fetchData = () => {
    console.log('Looking for data');
    fetch("liveDates.db")
        .then(response => {
            if(!response.ok){ throw Error ('ERROR') }

            return response.json();
        })
        .then(data =>{
            const content = mapToLiveSection(data);
            console.log({data, content}
                );
            document
            .querySelector(
                '.showDetails'
            )
            .innerHTML = content;
        }).catch(error => {
            console.log(error)
        })
};

fetchData();



// begining the date filter function, function below gets todays date in dd-mm-yyyy format and prints it to the console. To expand on. 
const today = new Date();
var fullDate = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
console.log(fullDate);


//map data to DOM
// map function using string interpolation/template literals, gigs can be updated in the database and will automatically appear. In future I would like to write a function to filter out gigs that have already happened by comparing the current date to the date in the DB then filtering it out. Not needed for production yet though. 

const mapToLiveSection = data =>{
    return data  
.map(content =>{
    return `
    <div class="show">
        <table>
            <tr>    
                ${ content.date ? `<td><p class="showDate">${content.date}</p></td>` : ''}
                ${ content.venue ? `<td><p class="venue"> ${content.venue}</p></td>`: ''}
                ${ content.address ? `<td><p class="address">${content.address}</p></td>`: ''}
                ${ content.desription ? `<td><p class="description">${content.description}</p></td>`: ''}
                ${ content.ticketLink ? `<td><a href="${content.ticketLink}" class="ticketLink">Buy Tickets!</a></td>`: ''}
            </tr>
        </table>
    </div>
`})
.join(" "); // removing the comma join
};

// navbar style change on scroll intersection observer
//defining intersection observers in case i want to change individual section styling later, for now just observing sectionOne
const sectionOne = document.querySelector('.home');
const sectionOneHalf = document.querySelector('.container');
const sectionTwo = document.querySelector('.live');
const sectionThree = document.querySelector('.media');
const header = document.querySelector('.header');

const sections = document.querySelectorAll(".section");

const options = {
    root: null, //viewport
    threshold: 0,
    rootMargin: "100px"
};

const sectionOneObserver = 
    new IntersectionObserver(function(entries, observer){
entries.forEach(entry => {
    if(!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
    } else {
        header.classList.remove("nav-scrolled");
    }
    
})
    }, options);

    //individual section observers for use later if needed.

    //observer.observe(sectionOne)
    //observer.observe(sectionTwo)
    //observer.observe(sectionThree)

    sections.forEach(section => {
        sectionOneObserver.observe(sectionOneHalf);
    })

}