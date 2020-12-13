import { submitSearch, addTag, extractTagsFromInput, removeTag } from './Functions'

describe('function submitSearch', () => {
    it('tests if the fetch function inside submitSearch actually returns anything'
        , async () => {
            const e = { preventDefault: jest.fn() };
            let name = 'joaogadelha';
            let setSearchResult = jest.fn();
            let history = { push: jest.fn() };
            let setLoading = jest.fn();

            let result = await submitSearch(e, name, setSearchResult, history, setLoading);
            expect(result.message).not.toBe('Not Found')
        })
})

describe('function addTag', () => {
    it('tries to insert a "react" tag when it does not exist in tagsArray', () => {
        let tag = 'react';
        let tagsArray = ['node', 'sql', 'aws'];
        let setTagsArray = jest.fn();

        let response = addTag(tag, tagsArray, setTagsArray)
        expect(response).toBe(false);
    })

    it('tries to insert a "react" tag  when it is already present', () => {
        let tag = 'react';
        let tagsArray = ['react', 'node', 'sql', 'aws'];
        let setTagsArray = jest.fn();

        let response = addTag(tag, tagsArray, setTagsArray)
        expect(response).toBe(true);
    })
})

describe('function removeTag', () => {
    it('', () => {
        let index = 2;
        let tagsArray = ['abc', 'bcd', 'cde', 'def'];
        let setTagsArray = jest.fn();

        let response = removeTag(index, tagsArray, setTagsArray)
        expect(response).toEqual(['abc', 'bcd', 'def']);
    })
})

describe('function extractTagsFromInput', () => {

    it('must return an empty array when tagsInput is empty', () => {
        let tagsInput = '';
        let suggestionsArray = ['react', 'express'];

        let result = extractTagsFromInput(tagsInput, suggestionsArray);
        expect(result).toEqual([]);
    })

    it('must return an empty array when tagsInput is not empty and nonexistent in suggestionsArray', () => {
        let tagsInput = 'sql';
        let suggestionsArray = ['react', 'express'];

        let result = extractTagsFromInput(tagsInput, suggestionsArray);
        expect(result).toEqual([]);
    })

    it('must return a non empty array when tagsInput exists inside suggestionsArray', () => {
        let tagsInput = 're';
        let suggestionsArray = ['react', 'express'];

        let result = extractTagsFromInput(tagsInput, suggestionsArray);
        expect(result).not.toEqual([]);
    })


})



