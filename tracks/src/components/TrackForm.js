import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [savetrack] = useSaveTrack(); //to extract useSaveTrack funtion from the hook

  console.log(locations.length);
  return (
    <>
      <Spacer>
        <Input
          value={name}
          placeholder="Enter name"
          style={{ fontSize: 18 }}
          onChangeText={changeName}
        />
        {recording ? (
          <Button onPress={() => stopRecording()} title="Stop" />
        ) : (
          <Button
            onPress={() => {
              startRecording(locations, recording);
            }}
            title="Start Recording"
          />
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save Rocording" onPress={savetrack} />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
