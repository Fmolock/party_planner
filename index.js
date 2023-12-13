let partyList;
const counter = document.querySelector('.counter');
const parties = document.querySelector('#parties');

async function fetchParties(){
    const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2309_ftb_et_web_am/events')
    const json = await response.json();
    
    partyList = json.data;
    counter.textContent = partyList.length;
    render();
};

function render(){
    const html = partyList.map(party => {
        const dateTime = party.date.split('T');
        const date = dateTime[0];
        const time = dateTime[1].slice(0,5)
        return `
        <li>
            <h2>${party.name}</h2> 
            <p>${party.description}</p>
            <p> Date: ${date}</p>
            <p> Time: ${time}</p>
            <p> Location: ${party.location}</p>
        </li>
        `;
    }).join('');
    parties.innerHTML = html;
    
};

fetchParties();