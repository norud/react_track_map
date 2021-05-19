import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";
import { navigate } from "../NavigationRef";

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { locations, name },
    reset,
  } = useContext(LocationContext);

  const savetrack = async () => {
    await createTrack(name, locations);
    reset();
    navigate("TrackList");
  };

  return [savetrack]; //convetion retur an array on hooks
};
