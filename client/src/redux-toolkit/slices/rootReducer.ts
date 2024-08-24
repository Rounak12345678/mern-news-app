import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import globalSlice from "./global.slice";
import userSlice from "./userSlice";
import toggleSlice from "./toggle.slice";

const userSlicePersistConfig = {
  key: "userSlice",
  storage
  // transforms: [
  //   encryptTransform({
  //     secretKey: "@AparTure@2050*",
  //     onError(error) {
  //       // Handle the error.
  //       console.log("ERROR IN ENCRYPTION", error);
  //     }
  //   })
  // ]
};



const globalSlicePersistConfig = {
  key: "globalSlice",
  storage
  // transforms: [
  //   encryptTransform({
  //     secretKey: "@AparTure@2050*",
  //     onError(error) {
  //       // Handle the error.
  //       console.log("ERROR IN ENCRYPTION", error);
  //     }
  //   })
  // ]
};

const toggleSlicePersistConfig = {
  key: "toggleSlice",
  storage
  // transforms: [
  //   encryptTransform({
  //     secretKey: "@AparTure@2050*",
  //     onError(error) {
  //       // Handle the error.
  //       console.log("ERROR IN ENCRYPTION", error);
  //     }
  //   })
  // ]
};

const rootReducer = {
  userSlice: persistReducer(userSlicePersistConfig, userSlice),
  globalSlice: persistReducer(globalSlicePersistConfig, globalSlice),
  toggleSlice:persistReducer(toggleSlicePersistConfig,toggleSlice),
};

export default rootReducer;
