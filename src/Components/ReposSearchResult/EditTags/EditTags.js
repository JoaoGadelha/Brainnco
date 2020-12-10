import React, { useState, useContext, useRef, useEffect } from 'react'
import styles from './EditTags.module.css'
import Tag from './Tag/Tag'
import { addTag } from '../../../Functions/Functions'
import { Context } from "../../../Context.js";
import {
    saveTagsInLocalStorage,
    restoreTagsFromLocalStorage
} from '../../../Functions/Functions'
import SuggestionWindow from './SuggestionWindow/SuggestionWindow'

const EditTags = ({ setEditTagsWindowIsOpen }) => {
    let { searchResult,
        currentRepoIndex } = useContext(Context);
    let [tagsInput, setTagsInput] = useState('');
    let [tagsArray, setTagsArray] = useState([]);
    // tagAlreadyExists - flag that signals if 
    // the tag the user is trying to add was already
    // previously added or not. The values for the 
    // flag can be:
    // true - for when the tag is already present 
    // false - the tag doesn't exist and will be created
    let [tagAlreadyExists, setTagAlreadyExists] = useState(false);
    let inputRef = useRef();

    useEffect(() => {

        if (restoreTagsFromLocalStorage(
            searchResult[currentRepoIndex].id
        ) !== null) {
            setTagsArray(restoreTagsFromLocalStorage(
                searchResult[currentRepoIndex].id
            ));
        }
    }, [])


    return (
        <div className={styles.container}>
            {tagAlreadyExists &&
                <p className={styles.repeatedTagMessage}>
                    This tag was already added.
                </p>
            }
            <div className={styles.innerContainer}>
                <h1 className={styles.title}>edit tags for kubernets</h1>
                <div className={styles.inputBorder}
                    onClick={() => inputRef.current.focus()}
                >
                    {tagsArray
                        .map((item, index) =>
                            <Tag tag={item}
                                index={index}
                                setTagsArray={setTagsArray}
                                tagsArray={tagsArray}
                            />
                        )
                    }
                    <div className={styles.inputsWrapper}>
                        <input className={styles.input}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    setTagAlreadyExists(
                                        addTag(
                                            tagsInput,
                                            tagsArray,
                                            setTagsArray
                                        ));
                                    setTagsInput('')
                                }
                            }}
                            value={tagsInput}
                            ref={inputRef}
                            onChange={(e) => setTagsInput(e.target.value)}
                        >
                        </input>
                        <SuggestionWindow
                            tagsInput={tagsInput}
                            setTagsInput={setTagsInput}
                            tagsArray={tagsArray}
                            setTagsArray={setTagsArray}
                            setTagAlreadyExists={setTagAlreadyExists}
                        />
                    </div>
                </div>
                <div className={styles.buttonsContainer}>
                    <button
                        onClick={
                            () => {
                                saveTagsInLocalStorage(
                                    searchResult[currentRepoIndex].id,
                                    tagsArray
                                )
                                setEditTagsWindowIsOpen(false)
                            }
                        }
                    >
                        <p>Save</p>
                    </button>
                    <button
                        onClick={() =>
                            setEditTagsWindowIsOpen(false)
                        }
                    >
                        <p>Cancel</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditTags