import { Alert, Button, TextInput } from "flowbite-react";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase"; // Adjust the path according to your project structure
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function DashProfile() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadingProgress, setimageFileUploadingProgress] =
    useState(null);
  const [imageFileUploadError, setimageFileUploadError] = useState(null);
  const filePickerRef = useRef();

  useEffect(() => {
    if (imageFile) {
      setImageFileUrl(URL.createObjectURL(imageFile));
    }
  }, [imageFile]);

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Assuming the user selects only one file

    // Reset previous error messages
    setimageFileUploadError(null);
    setimageFileUploadingProgress(null);

    if (file) {
      // Check if the file is an image
      if (!file.type.startsWith("image/")) {
        setimageFileUploadError("Please select an image file.");
        return; // Exit the function if the file is not an image
      }

      // Check if the file size is more than 2MB
      const maxSize = 2 * 1024 * 1024; // 2MB in bytes
      if (file.size > maxSize) {
        setimageFileUploadError("File size must be less than 2MB.");
        return; // Exit the function if the file exceeds the size limit
      }

      // If the file passes both checks, set the image file for upload
      setImageFile(file);
    }
  };

  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);

  const uploadImage = async () => {
    setimageFileUploadingProgress(null);
    const storage = getStorage(app); // Make sure 'app' is correctly imported from your Firebase config
    const fileName = `${new Date().getTime()}_${imageFile.name}`;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setimageFileUploadingProgress(progress.toFixed(0));
      },
      (error) => {
        setimageFileUploadError(
          "Could not upload image. Please ensure the file is less than 2MB."
        );
        setimageFileUploadingProgress(null);
        setImageFile(null);
        setImageFileUrl(null);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);
        });
      } // This closes the success callback
    ); // This closes the uploadTask.on call
  }; // This closes the uploadImage function

  // Your conditional render for currentUser or currentUser.ProfilePicture must be inside the component function before the return statement.
  if (!currentUser || !currentUser.ProfilePicture) {
    return <div>Loading...</div>; // Or any other fallback UI
  }

  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        <input
          type="file"
          accept="images/*"
          onChange={handleImageChange}
          ref={filePickerRef}
          hidden
        />
        <div
          className="relative w-32 h-32 flex self-center cursor-pointer shadow:md overflow-hidden rounded-full"
          onClick={() => filePickerRef.current.click()}
        >
          {imageFileUploadingProgress !== null && (
            <div className="absolute w-full h-full flex justify-center items-center">
              <CircularProgressbar
                value={imageFileUploadingProgress}
                text={`${imageFileUploadingProgress}%`}
                styles={{
                  root: {
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  },
                  path: {
                    stroke: `rgba(62, 152, 199, ${imageFileUploadingProgress / 100})`,
                  },
                  text: {
                    fill: '#f88',
                    fontSize: '16px',
                  },
                }}
              />
            </div>
          )}
          <img
            src={imageFileUrl || currentUser.ProfilePicture}
            alt="profile"
            className={`rounded-full w-full h-full object-cover border-8 border-lightgray ${imageFileUploadingProgress && imageFileUploadingProgress < 100 && 'opacity-60'}`}
          />
        </div>
        {imageFileUploadError && (
          <Alert color="failure">{imageFileUploadError}</Alert>
        )}
        <TextInput
          type="text"
          id="username"
          placeholder="Username"
          defaultValue={currentUser.username}
          className="rounded-md shadow-md"
        />
        <TextInput
          type="email"
          id="email"
          placeholder="Email"
          defaultValue={currentUser.email}
          className="rounded-md shadow-md"
        />
        <TextInput
          type="password"
          id="password"
          placeholder="Password"
          className="rounded-md shadow-md"
        />
        <Button
          type="submit"
          gradientDuoTone="purpleToBlue"
          className="rounded-full"
        >
          Update
        </Button>
        <div className="text-red-500 flex justify-between">
          <span className="cursor-pointer">Delete Account</span>
          <span className="cursor-pointer">Sign Out</span>
        </div>
      </form>
    </div>
  );
}
