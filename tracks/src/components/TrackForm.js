import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

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
          <Button onPress={stopRecording} title="Stop" />
        ) : (
          <Button onPress={startRecording} title="Start Recording" />
        )}
      </Spacer>
    </>
  );
};

export default TrackForm;
