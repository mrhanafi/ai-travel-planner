import axios from "axios";

// export const GetPhotoRef = async () => {
//     const response = await axios
// }

const SEARCH_URL = "https://places.googleapis.com/v1/places:searchText";

export const GetPhotoRef = async (placeName) => {
  const resp = await axios.post(
    SEARCH_URL,
    {
      textQuery: placeName,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": "AIzaSyB5m_w8mVAD1YeLIrrEQp3rdKd3L7fA-SE",
        "X-Goog-FieldMask": "places.displayName,places.photos",
      },
    }
  );
  return resp;
};

// export default {
//   GetPhotoRef,
// };
