import { createSlice } from "@reduxjs/toolkit";

export const previewSlice = createSlice({
    name: 'preview',
    initialState: {
        previewData: {
            data: {},
            id: "0"
        }
    },
    reducers: {
        setPreviewData: (state, action) => {
            state.previewData = action.payload.previewData
        },
    },
    extraReducers: {
    }
})

export const { setPreviewData } = previewSlice.actions
export default previewSlice.reducer