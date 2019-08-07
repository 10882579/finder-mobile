const initialState  = {
  title: '',
  category: '',
  condition: 'good',
  description: '',
  price: '',
  negotiable: true,
  city_town: '',
  state: '',
  selectedImages: new Array(4),
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CREATE_STATE':
      state = {
        ...state,
        ...action.payload
      }
      break;
    case 'UPLOAD_IMAGE':
      const images = state.selectedImages;      
      if(images.length <= 4){
        for (let i = 0; i < images.length; i++) {
          if(images[i] === undefined){
            images[i] = action.payload; 
            break;
          }
        }
        state = {
          ...state,
          selectedImages: images
        }
      }
      break;
    case 'DELETE_UPLOADED_IMAGE':
      const selectedImages = state.selectedImages; 
      selectedImages.map( (item, i) => {
        if(item){
          if(item.uri == action.payload) {
            selectedImages[i] = undefined
          }
        }
      })
      state = {
        ...state,
        selectedImages: selectedImages.sort()
      }
      break;
    case 'ERASE_CREATE_STATE':
      state = {
        ...initialState,
        selectedImages: new Array(4)
      };
      break;
  }
  return state
}

export default reducer
