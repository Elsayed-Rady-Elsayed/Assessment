import { createSlice, createAsyncThunk, PayloadAction, configureStore } from "@reduxjs/toolkit";

interface User {
  id: number;
  FirstName: string;
  LastName: string;
  Phone: string;
  Email: string;
}

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("http://localhost:1337/user-informations");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  const data = await response.json();  
  return data; 
});
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;        
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching users";
      });
  },
});
export const userReducer = userSlice.reducer;
const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
