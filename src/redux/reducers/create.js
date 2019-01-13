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
    selectedImages: [
      // {
      //   uri: 'file:///Users/Benjamin/Library/Developer/CoreSimulator/Devices/A89FE026-96A7-4520-B81A-98C6C4D118D6/data/Containers/Data/Application/1595B9CB-3B40-4A1E-A920-F8A897ECD8BC/Library/Caches/ExponentExperienceData/%2540b10882578%252Fmobile/ImagePicker/F0EFE4F7-23D6-43A0-95DB-2FFB965CFE98.jpg',
      // },
      // {
      //   uri: 'file:///Users/Benjamin/Library/Developer/CoreSimulator/Devices/A89FE026-96A7-4520-B81A-98C6C4D118D6/data/Containers/Data/Application/1595B9CB-3B40-4A1E-A920-F8A897ECD8BC/Library/Caches/ExponentExperienceData/%2540b10882578%252Fmobile/ImagePicker/F0EFE4F7-23D6-43A0-95DB-2FFB965CFE98.jpg',
      // },
      // {
      //   uri: 'file:///Users/Benjamin/Library/Developer/CoreSimulator/Devices/A89FE026-96A7-4520-B81A-98C6C4D118D6/data/Containers/Data/Application/1595B9CB-3B40-4A1E-A920-F8A897ECD8BC/Library/Caches/ExponentExperienceData/%2540b10882578%252Fmobile/ImagePicker/F0EFE4F7-23D6-43A0-95DB-2FFB965CFE98.jpg',
      // }
    ],
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
