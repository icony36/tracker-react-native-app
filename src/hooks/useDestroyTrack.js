import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";
import { navigate } from "../navigationRef";

export default () => {
  const { deleteTrack } = useContext(TrackContext);
  const { reset } = useContext(LocationContext);

  const destroyTrack = async _id => {
    await deleteTrack(_id);
    reset();
    navigate("TrackList");
  };

  return [destroyTrack];
};
