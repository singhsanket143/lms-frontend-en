import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import HomeLayout from "../../layouts/HomeLayout";
import { addCourseLecture } from "../../redux/slices/lectureSlice";

function AddLecture() {

    const courseDetails = useLocation().state;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [userInput, setUserInput] = useState({
        id: courseDetails._id,
        lecture: undefined,
        title: "",
        description: "",
        videoSrc: ""
    });

    function handleInputChange(e) {
        const {name, value} = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    }

    function handleVideo(e) {
        const video = e.target.files[0];
        const src = window.URL.createObjectURL(video);
        console.log("src", src, video);
        setUserInput({
            ...userInput,
            lecture: video,
            videoSrc: src
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        if(!userInput.lecture || !userInput.title || !userInput.description) {
            toast.error("All fields are mandatory");
            return;
        }
        const response = await dispatch(addCourseLecture(userInput));
        if(response?.payload?.success) {
            navigate(-1);
            setUserInput({
                id: courseDetails._id,
                lecture: undefined,
                title: "",
                description: "",
                videoSrc: ""
            });
        }
    }

    useEffect(() => {
        if(!courseDetails) navigate("/course");
    }, [])


    return (
        <HomeLayout>
            <div className="min-h-[90vh] text-white flex flex-col items-center justify-center gap-10 mx-15">
                <div className="flex flex-col gap-5 p-2 shadow-[0_0_10px_black] w-96 rounded-lg">
                    <header className="flex items-center justify-center relative">
                        <button className="absolute left-2 text-xl text-green-500">
                            <AiOutlineArrowLeft />
                        </button>
                        <h1 className="text-xl text-yellow-500 font-semibold">
                            Add new lecture
                        </h1>
                    </header>

                    <form
                        onSubmit={onFormSubmit}
                        className="flex flex-col gap-3"
                    >
                        <input
                            type="text"
                            name="title"
                            placeholder="enter the title of the lecture"
                            className="bg-transparent px-3 py-1 border"
                            value={userInput.title}
                            onChange={handleInputChange}
                        />

                        <textarea
                            type="text"
                            name="description"
                            placeholder="enter the description of the lecture"
                            className="bg-transparent px-3 py-1 resize-none h-36 overflow-y-scroll border"
                            onChange={handleInputChange}
                            value={userInput.description}
                        />

                        {
                            userInput.videoSrc ? (
                                <video 
                                    className="object-fill rounded-tl-lg w-full rounded-tr-lg"
                                    controls 
                                    muted
                                    src={userInput.videoSrc}
                                    controlsList="nodownload"
                                    disablePictureInPicture
                                >

                                </video>
                            ) : (
                                <div
                                    className="h-48 border flex items-center justify-center cursor-pointer"
                                >
                                    <label className="font-semibold text-xl cursor-pointer" htmlFor="lecture">Choose your lecture</label>
                                    <input
                                        type="file"
                                        className="hidden"
                                        id="lecture"
                                        name="lecture"
                                        onChange={handleVideo}
                                        accept="video/mp4 video/x-mp4 video/*"
                                    />
                                </div>
                            )
                        }

                        <button type="submit" className="btn-primary py-1 text-lg font-semibold">
                            Add new lecture
                        </button>

                    </form>
                </div>
            </div>
        </HomeLayout>
    )
}

export default AddLecture;