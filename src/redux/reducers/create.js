const initialState  = {
  permissionsCameraRollGranted: false,
  progress: 0,
  data: {
    title: '',
    category: '',
    condition: 'Yaxshi',
    description: '',
    price: '',
    negotiable: true,
    city_town: '',
    state: '',
    selectedImages: [],
  },
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CREATE_STATE':
      state = {
        ...state,
        ...action.payload
      }
      break;
    case 'UPDATE_CREATE_DATA_STATE':
      state = {
        ...state,
        data: {
          ...state.data,
          ...action.payload
        }
      }
      break
    case 'ERASE_CREATE_DATA_STATE':
      state = {
        ...state,
        progress: 0,
        data: {...initialState.data}
      }
      break
    case 'UPLOAD_IMAGE':
      state = {
        ...state,
        data: {
          ...state.data,
          selectedImages: [...state.data.selectedImages, action.payload]
        }
      }
      break;
    case 'DELETE_UPLOADED_IMAGE':
      const selectedImages = state.data.selectedImages;
      const arr = []
      selectedImages.map( (item, index) => {
        if(item.uri !== action.payload) {
          arr.push(item)
        }
      })
      state = {
        ...state,
        data: {...state.data, selectedImages: arr}
      }
      break
  }
  return state
}

export default reducer
