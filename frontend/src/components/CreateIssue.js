import React, { useState, useRef, useContext } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import { PostContext } from "../contexts/PostContext";

import { BACKEND_URI } from "../config";

const CreateIssue = ({onClose}) => {
  const { user } = useContext(UserContext);
  const comment = useRef();
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [loading, setLoading] = useState(false);

  const { posts, setPosts } = useContext(PostContext);

  const handleChoosePhoto = (e) => {
    const file = e.target.files[0];
    setSelectedPhoto(file);
    setPreviewURL(URL.createObjectURL(file));
  };

  const handleRemovePhoto = () => {
    setSelectedPhoto(null);
    setPreviewURL(null);
  };
  const handlePost = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("caption", comment.current.value.trim());
      formData.append("photo", selectedPhoto);

      const response = await axios.post(
        `${BACKEND_URI}/api/v1/posts`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.status === "success") {
        alert("Post created successfully 🎉");
        setPosts(() => [response.data.data, ...posts]);
        setSelectedPhoto(null);
        setPreviewURL(null);
        comment.current.value = "";
      }
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal">
      <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-2xl my-4">
        <div className="w-12 h-12 rounded-full bg-gray-200">
            <img
            className="rounded-full"
            src={user ? `${BACKEND_URI}/img/users/${user.photo}` : null}
            alt=""
            />
        </div>
        <div className="flex-1">
            <textarea
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 resize-none overflow-y-hidden"
            style={{ wordWrap: "break-word" }}
            placeholder="Write a comment..."
            ref={comment}
            ></textarea>
            {/* {selectedPhoto && (
            <div className="relative mt-2">
                <img
                className="max-h-64 object-contain rounded-lg"
                src={previewURL}
                alt="Selected"
                />
                <button
                className="absolute top-2 right-2 bg-white rounded-full p-1 text-gray-500 hover:text-gray-700"
                onClick={handleRemovePhoto}
                >
                <XIcon className="w-5 h-5" />
                </button>
            </div>
            )} */}
            <div className="flex justify-end mt-2 gap-2">
            {/* <label className="px-2 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600">
                <PhotographIcon className="w-6 h-6" />
                <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleChoosePhoto}
                />
            </label> */}
            <button 
                className="px-4 py-2 text-white bg-red-500 rounded-xl hover:bg-red-600"
                onClick={onClose}
            >
                Close
            </button>
            <button
                className="px-4 py-2 text-white bg-green-500 rounded-xl hover:bg-green-600"
                onClick={handlePost}
                disabled={loading}
            >
                {loading ? (
                <div className="h-4 w-4 rounded-full border-t-2 border-white border-opacity-50 animate-spin mr-2"></div>
                ) : (
                "Post Issue"
                )}
            </button>
            </div>
        </div>
        </div>
    </div>
  );
};

export default CreateIssue;
