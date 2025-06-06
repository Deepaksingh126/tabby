//obejcts that contains all the tab's link and there content
// url: url where you want to go
// site: name of the site where the url will take you
// type: nothing much but you can write keyword and type of link so it will help you in searching it from the search bar, add multiple keywords by sperating them by space

const tabs = [
    {
        url: 'https://leetcode.com/problemset/?page=1&sorting=W3sic29ydE9yZGVyIjoiREVTQ0VORElORyIsIm9yZGVyQnkiOiJGUk9OVEVORF9JRCJ9XQ%3D%3D',
        site: 'leetcode',
        type: 'problem solving'
    }, {
        url: 'https://grok.com',
        site: 'grok-chat',
        type: 'AI'
    },
    {
        url: 'https://medium.com/',
        site: 'medium',
        type: 'article'
    },
    {
        url: 'https://stackoverflow.com/',
        site: 'stackoverflow',
        type: 'help'
    },
    {
        url: 'https://www.freecodecamp.org/',
        site: 'freecodecamp',
        type: 'learning'
    },
    {
        url: 'https://www.w3schools.com/',
        site: 'w3schools',
        type: 'documentation'
    },
    {
        url: 'https://codepen.io/',
        site: 'codepen',
        type: 'playground'
    },
    {
        url: 'https://npmjs.com/',
        site: 'npm',
        type: 'packages'
    },
    {
        url: 'https://chat.openai.com/',
        site: 'chatgpt',
        type: 'AI'
    },
    {
        url: 'https://deepak-dev-blue.vercel.app/',
        site: 'deepak.dev',
        type: 'portfolio'
    },
    {
        url: 'https://dedlocked.vercel.app/dashboard?view=today',
        site: 'dedlocked',
        type: 'productivty'
    },
    {
        url: 'https://wakatime.com/dashboard',
        site: 'wakatime-dashboard',
        type: 'productivity'
    },
    {
        url: 'https://in.pinterest.com/search/pins/?q=posters&rs=typed',
        site: 'pinterest',
        type: ''
    },
    {
        url: 'https://tailwindcss.com/docs/installation/using-vite',
        site: 'tailwind-vite',
        type: 'production'
    },
    {
        url: 'https://github.com',
        site: 'github',
        type: 'my portfoilio'
    },
    {
        url: 'https://ui.shadcn.com/',
        site: 'ui.shadcn',
        type: 'production'
    },
    {
        url: 'https://21st.dev/',
        site: '21st.dev',
        type: 'production'
    }, {
        url: 'https://youtube.com/',
        site: 'youtube',
        type: 'production'
    },
    {
        url: 'http://localhost:3000/',
        site: 'localhost:3000',
        type: 'production'
    },
    {
        url: 'http://localhost:5173/',
        site: 'localhost:5173',
        type: 'production'
    },
    {
        url: 'http://localhost:8001/',
        site: 'localhost:8000',
        type: 'production'
    },
]

//all of the code related to DOM manipulation should be written in this function so the script will not run before rendering the page and 

document.addEventListener("DOMContentLoaded", function () {
    const allTab = document.getElementById('allTabs')
    console.log(tabs.length)
    for (let i = 0; i < tabs.length; i++) {
        allTab.innerHTML += `<div class="tab" id="tab">
            <a href="${tabs[i].url}">
            <div class="tabName">
             <img src="https://www.google.com/s2/favicons?sz=64&domain_url=${tabs[i].url}" alt="${tabs[i].site} favicon">
                <h1> ${tabs[i].site}</h1></div>
                <p class="url">${tabs[i].url}</p>
                <p class="type">${tabs[i].type}</p>                
            </a>
        </div> `

        if (tabs[i].type == undefined) {
            tabs[i] == '';
        }
    }


    // functionality of searchBar:search tabs

    const search = document.getElementById('search');
    const tab = document.querySelectorAll('.tab');

    search.addEventListener('input', () => {
        const value = search.value.toLowerCase();
        console.log(value);

        tab.forEach(tab => {
            let tabContent = tab.textContent.toLowerCase();
            if (tabContent.includes(value)) {
                tab.style.display = '';
            } else {
                tab.style.display = 'none';
            }
        });
    });


    // appearance function: will make the page appear on click

    const appearbtn = document.getElementById('appearButton');
    const sectionBody = document.getElementById('sectionBody');
    const instruct = document.getElementById('instruct');

    sectionBody.style.opacity = '0';//for fixing double tap in intializing
    sectionBody.style.display = 'none';//for fixing double tap in intializing

    appearbtn.addEventListener('click', () => {
        if (sectionBody.style.opacity === '0') {
            instruct.style.display = 'none';
            sectionBody.style.opacity = '1';
            appearbtn.style.left = '-50px';
            appearbtn.style.opacity = 0.5;
            sectionBody.style.display = 'block';//for fixing double tap in intializing

        } else {
            console.log('ehheh')
            sectionBody.style.opacity = '0';
            appearbtn.style.left = '0px';
            appearbtn.style.opacity = 1;
        }
    });

});
