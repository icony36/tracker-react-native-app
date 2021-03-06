import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "fetch_tracks":
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = dispatch => async () => {
  const res = await trackerApi.get("/tracks");
  dispatch({ type: "fetch_tracks", payload: res.data });
};

const createTrack = dispatch => async (name, locations) => {
  await trackerApi.post("/tracks", { name, locations });
};

const deleteTrack = dispatch => async _id => {
  await trackerApi.delete("/tracks", { data: { _id } });
};

const editTrack = dispatch => async (_id, name) => {
  await trackerApi.put("/tracks", { _id, name });
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack, deleteTrack, editTrack },
  []
);
