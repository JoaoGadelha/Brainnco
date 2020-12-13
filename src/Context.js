import React, { useEffect } from "react";
import { useState } from "react";

export const Context = React.createContext();

export const Provider = (props) => {
  //  stores suggestions for tag names.
  let [suggestionsArray, setSuggestionsArray] = useState(
    [
      'react', 'node', 'express', 'docker',
      'aws', 'angular', 'vue', 'java', 'python',
      'C++', 'SQL', 'react native', 'flutter'
    ]
  );
  let [loading, setLoading] = useState(false);
    // stores all the starred repositores obtained
    // from the user seach in the home page.
  let [searchResult, setSearchResult] = useState([]);
  // When the user clicks on a repository in order to
  // edit its tags, the index of this repository is saved
  // in currentRepoIndex.
  let [currentRepoIndex, setCurrentRepoIndex] = useState();

  useEffect(() => {
    if (searchResult.length === 0) {
      setSearchResult(JSON.parse(localStorage.getItem('searchResult')));
    }
  }, [])

  return (
    <Context.Provider value={{
      loading, setLoading,
      suggestionsArray, setSuggestionsArray,
      searchResult, setSearchResult,
      currentRepoIndex, setCurrentRepoIndex
    }}>
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
