import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const fetchApi =createApi({

    reducerPath:"fetchSApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:5000/api"}),
    endpoints:(builder)=>({

        getFetchApi :builder.query({

            query:()=>"products",
        })
    })

})
export const {useGetFetchApiQuery} = fetchApi