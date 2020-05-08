import {
  PHOTOS_FETCHED,
  PHOTOS_UPLOADED,
  DELETE_UPLOADED_PHOTO
} from "../../cloudinary/Constants";

export default function(state = [], action) {
  switch (action.type) {
    case PHOTOS_FETCHED:
      return [...action.photos];
    case PHOTOS_UPLOADED: {
      return [...action.photos, ...state];
    }
    case DELETE_UPLOADED_PHOTO:
      return state.filter(photo => photo.public_id !== action.publicId);
    default:
      return [...state];
  }
}
