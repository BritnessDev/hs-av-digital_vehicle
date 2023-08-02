const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import { SignUpAPI } from './authAPI'


export const signupProcess = createAsyncThunk(
    'signup/signupProcess',
    async (signup, thunkAPI) => {
        try {
            const data = await SignUpAPI(signup)
            if (!data.success) {
                return {
                    ...thunkAPI.rejectWithValue(data),
                    success: true
                }
            }
            return data
        } catch (error) {
            console.log('catch error', error?.response?.data);
            return {
                ...thunkAPI.rejectWithValue(error),
                success: false
            }
        }
    }
)


export const signUpSlice = createSlice({
    name: 'signup',
    initialState: {
        signup: {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        },
        errors: {},
        errorMessage: '',
        successMessage: '',
        isFetching: false,
        isError: false,
        isSuccess: false
    },
    reducers: {
        setLoading: state => {
            state.isFetching = true
        },
        setSignUpDetail: (state, action) => {
            state.isError = false;
            state.isSuccess = false
            state.errors = {}
            state.signup = { ...state.signup, ...action.payload }
        }
    },
    extraReducers: {
        [signupProcess.fulfilled]: (state, action) => {
            state.isFetching = false
            state.isSuccess = true
            state.isError = false
            state.errorMessage = ''
            state.successMessage = action.payload.message
            state.errors = {}
        },
        [signupProcess.pending]: (state, action) => {
            state.isFetching = true
        },
        [signupProcess.rejected]: (state, action) => {
            state.isFetching = false
            state.isSuccess = false
            state.isError = true
            state.errorMessage = action.payload.message
        },
    }
})

export const { setLoading, setSignUpDetail } = signUpSlice.actions
export default signUpSlice.reducer