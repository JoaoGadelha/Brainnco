import React, { useEffect } from "react";
import { useState } from "react";

export const Context = React.createContext();

export const Provider = (props) => {
  // this is a non exhaustive suggestions array
  // used only in development.
  // For production, it should be way longer than this.
  let [suggestionsArray, setSuggestionsArray] = useState(
    [
      'react', 'node', 'express', 'docker',
      'aws', 'angular', 'vue', 'java', 'python',
      'C++', 'SQL', 'react native', 'flutter'
    ]
  );
  let [loading, setLoading] = useState(false);
  let [searchResult, setSearchResult] = useState([]);
  // defines the index of the currently clicked repository
  // in the repository search results page.
  // The user can choose one repository in order to
  // edit its tags in the repository search results page.
  // The repositories are stored in an array of objects.
  // So, when the user clicks on a repository in order to
  // edit his/her tags, the index of this repository is saved
  // in the currentRepoIndex state variable below.
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
