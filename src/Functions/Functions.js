
// simulates a fetch delay in ms
const sleeper = (ms) => {
    return (x) => {
        return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
}

const submitSearch = async (e, name, setSearchResult, history,
    users, setLoading) => {
    e.preventDefault();
    await fetch('https://api.github.com/users/' + name + '/starred')
        .then(res => res.json())
        //.then(sleeper(10000)) // simulates a 10 seconds delay
        .then(res => {
            setSearchResult(res);
            localStorage.setItem('searchResult', JSON.stringify(res));
            history.push('/' + users);
            setLoading(false);
        });
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
}


// addTag - function to add a new tag
// Returns a boolean value signaling if the tag already existed or not
// true - when the tag the user is trying to add was already added previously
// false - when the tag didn't exist and will be created
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