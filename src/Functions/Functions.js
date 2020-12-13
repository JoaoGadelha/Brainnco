
// simulates a fetch delay in ms
const sleeper = (ms) => {
    return (x) => {
        return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
}

// Function called when the user submits a search in the search bar
// present in the home page. The user inputs a string "name", 
// a fetch request is performed with a URL constructed with "name", 
// the search result is saved in the "searchResult" state created in Context.js
// and the page routes to "/result" to display the results of the search.
const submitSearch = async (e, name, setSearchResult, history, setLoading) => {
    e.preventDefault();
    let data = await fetch('https://api.github.com/users/' + name + '/starred');
    let jsonData = await data.json();
    // simulates a 10 seconds delay
    //sleeper(10000) 
    setSearchResult(jsonData);
    localStorage.setItem('searchResult', JSON.stringify(jsonData));
    history.push('/result');
    setLoading(false);
    // returns jsonData for testing purposes
    return jsonData
}

const saveTagsInLocalStorage = (id, tagsArray) => {
    // id is the identification of the repository
    localStorage.setItem(id, JSON.stringify(tagsArray));
}

const restoreTagsFromLocalStorage = (id) => {
    return JSON.parse(localStorage.getItem(id));
}

const removeTag = (index, tagsArray, setTagsArray) => {
    let auxArray = [...tagsArray]
    tagsArray.forEach((item, i) => {
        if (i === index) {
            auxArray.splice(i, 1);
        }
    })
    setTagsArray(auxArray);
    // returns auxArray for testing purposes
    return auxArray 
}


// addTag - function to add a new tag
// Returns a boolean value signaling if the tag already exists or not
// true - when the tag the user is trying to add already exists
// false - when the tag doesn't exist and will be created
const addTag = (tag, tagsArray, setTagsArray) => {
    let auxArray = [...tagsArray];
    let response = false;
    // checks if tag exists in tagsArray
    auxArray.map(item => {
        if (item.toLowerCase() === tag.toLowerCase()) {
            response = true; // the tag was already added previously
        }
    })
    if (!response) { // if tag doesn't exist in tagsArray, add it
        auxArray.push(tag.toLowerCase());
        setTagsArray(auxArray);
    }
    return response;
}

// tagsInput - string inputed by the user to serve as the name 
// of a new tag.
// suggestionsArray - stores all the suggestions for names of tags.
// This function takes the tagsInput string and compares
// it to each string present in suggestionsArray. If 
// one or more contains the string tagsInput, then they're
// added to an auxiliary array. 
// For example, if the user inputs 're' and suggestionsArray
// is equal to ['react','express','node'],
// then the auxiliary array is equal to ['react','express'],
// since only 'react' and 'express' contain the string 're',
// but 'node' does not.
const extractTagsFromInput = (tagsInput, suggestionsArray) => {
    if (tagsInput === '') {
        return []
    }
    let auxArray = [];
    suggestionsArray.forEach((item) => {
        if (item.toLowerCase().includes(tagsInput.toLowerCase())) {
            auxArray.push(item);
        }
    });
    return auxArray;
}


export {
    submitSearch,
    saveTagsInLocalStorage,
    restoreTagsFromLocalStorage,
    extractTagsFromInput,
    removeTag,
    addTag
}