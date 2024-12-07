import { configureStore } from '@reduxjs/toolkit'
import tripsReducer from '../store/trips/trips.slice'
import invoicesReducer from '../store/invoices/invoices.slice'

export const store = configureStore({
  reducer: {
    trips: tripsReducer,
    invoices: invoicesReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
