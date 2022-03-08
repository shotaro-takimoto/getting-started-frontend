import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyBbIvSmqtVzRZ1WILrzH3LBvK6XzC3Vioo",
  appId: "1:578404551911:web:d11d5441c46796f1b66642",
  projectId: "getting-started-43e4f",
};

export const app = initializeApp(config);
export const auth = getAuth(app);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "https://localhost:3000",
  // This must be true.
  handleCodeInApp: true,
  // iOS: {
  //   bundleId: "com.example.ios",
  // },
  // android: {
  //   packageName: "com.example.android",
  //   installApp: true,
  //   minimumVersion: "12",
  // },
  // dynamicLinkDomain: "example.page.link",
};
