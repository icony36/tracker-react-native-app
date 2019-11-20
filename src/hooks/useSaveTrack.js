import { useContext, useState } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";
import { navigate } from "../navigationRef";

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { locations, name },
    reset
  } = useContext(LocationContext);
  const [err, setErr] = useState(null);

  const saveTrack = async () => {
    if (name) {
      await createTrack(name, locations);
      reset();
      setErr(null);
      navigate("TrackList");
    } else {
      setErr("Please enter the name of track.");
    }
  };

  return [saveTrack, err];
};
