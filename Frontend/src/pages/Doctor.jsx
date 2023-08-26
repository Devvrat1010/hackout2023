import React from "react";
import Card from "../components/Card";

export default function Doctor() {
  const avatar_images ={
    "Image1" : "https://doodleipsum.com/700/avatar?i=e9a99ae4926ef6cf11568ad0c27d11de",
    "Image2" : "https://doodleipsum.com/700/avatar-4?i=e961c3b3db59225a0691f90013b88c13",
    "Image3" : "https://doodleipsum.com/700/avatar-4?i=2048c47c8c7d48e9c5635229c0974ca8",
    "Image4" : "https://doodleipsum.com/700/avatar-4?i=58e15545cbaaccdde1e619aa57b6f85f",
  }
  const imageKeys = Object.keys(avatar_images);
  const randomImageKey = imageKeys[Math.floor(Math.random() * imageKeys.length)];
  const randomImageUrl = avatar_images[randomImageKey];
  return (
    <div className="flex gap-10 justify-between p-10 mt-10">
      <div className="border-2 w-1/4 h-350 mb-20 p-5">
        <img src={randomImageUrl} className="h-1/4 bg-blue-400 rounded-full p-3 "/>
        <div className="text-2xl font-bold mt-10">
          NAME OF PATIENT
        </div>
        <div className="text-xl font-bold mt-10">
          AABHA NUMBER
        </div>
        <div className="text-xl font-bold mt-10">
          AGE
        </div>
      </div>
      <div>
          <div>
            P-history
          </div>
          <div className="flex gap-10 justify-between">
            <div>
              Symptomps
            </div>
            <div>
                Prescription
                </div>
          </div>
      </div>
    </div>
  );
}
