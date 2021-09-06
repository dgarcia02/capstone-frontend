import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const VEGAS_API_KEY = '2xVQNFpSH4QhJRlTAQkkCqiR1ATG52I9';

// const shows = {
//     name: String, 
//     type: String,
//     id: String,
//     test: Boolean,
//     url: String,
//     locale: String,
//     images: Array,
//     sales: Object,
//     dates: Object,
//     classification: Array,
//     promoter: Object,
//     promoters: Array,
//     priceRanges: Array,
//     _links: Object,
//     _embedded: Object
// }

// RTK Query
export const showsApiSlice = createApi({
    reducerPath: 'showApi',
    // how were going to fetch our data
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
            query(limit = 10) {
                return `events.json?dmaId=319&apikey=${VEGAS_API_KEY}`;
            }
        })
    })
})

export const { useFetchShowsQuery } = showsApiSlice;

export default showsApiSlice;