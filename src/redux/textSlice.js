import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getText = createAsyncThunk(
    "text/fetchText",
    async ({count, format}) => {
        const res = await axios(
            `https://baconipsum.com/api/?type=all-meat&paras=${count}&format=${format}`);
        return res.data
    }
);

export const textSlice = createSlice({
    name: "texts",
    initialState: {
        text: "",
        format: "text",
        count: 4,
        loading: false
    },
    reducers: {
        updateCount: (state, action) => {
            state.count = action.payload;
            console.log(state.count);
            console.log(state.text);
        },
        updateFormat: (state, action) => {
            console.log(state.format);
            state.format = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getText.fulfilled, (state, action) => {
            state.text = action.payload;
            state.loading = false;
        });
    }
});

export const { updateCount, updateFormat } = textSlice.actions; 
export default textSlice.reducer;