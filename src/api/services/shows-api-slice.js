import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const VEGAS_API_KEY = '2xVQNFpSH4QhJRlTAQkkCqiR1ATG52I9';

const userInput = 'shinlim'
// e.target.value


// RTK Query
export const showsApiSlice = createApi({
    reducerPath: 'showApi',
    // how we're going to fetch our data
        // base url is the root url
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://app.ticketmaster.com/discovery/v2/', 
        // prepareHeaders(headers) {
        // // this is the key given when signing up for api
        // headers.set('x-api-key', VEGAS_API_KEY);

        // return headers;
    // } 
}),
    endpoints: (builder) => ({
        fetchShows: builder.query({
            query() {
                // this randomly returns events with magic
                return `events.json?classificationName=magic&dmaId=319&sort=date,asc&apikey=${VEGAS_API_KEY}&size=15`;
            }
        }),
        getShowsByName: builder.query({
            query: (keyword) => `events.json?dmaId=319&keyword=${keyword}&apikey=${VEGAS_API_KEY}&size=12`
        })
    })
})

export const { useFetchShowsQuery, useGetShowsByNameQuery } = showsApiSlice;

export default showsApiSlice;