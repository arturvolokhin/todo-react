import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Todo } from '../../types';

export const tasksApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ['post'],
  endpoints: (build) => ({
    
    fetchAllUsers: build.query<Todo[], number>({
      query: (limit: number = 5) => ({
         url: `/posts`,
         params: {
           _limit: limit
         },
         refetchOnMountOrArgChange: 3,
      }),
      providesTags: () => ['post'],  
    }),

    createPost: build.mutation<Todo, Todo>({
      query: (task) => ({
        url: `/posts`,
        method: 'POST',
        body: task,
      }),
      invalidatesTags: () => ['post'],
    }),

    deletePost: build.mutation<Todo, number>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => ['post'],
    }),

    changePost: build.mutation<Todo, {task: Todo, id: number}>({
      query: ({task, id}) => ({
        url: `posts/${id}`,
        method: 'PATCH',
        body: task,
      }),
      invalidatesTags: () => ['post'],
    })
  })

})