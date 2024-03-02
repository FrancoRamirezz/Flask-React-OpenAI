"use client"
import React from "react";
import { useState } from "react";
import {Dialog} from '@headlessui/react'
import resumepk from '/Client/my-app/public/Images/reaumepk.gif'
function resume(){
const [isDialogOpen, setIsDialogOpen] = useState(false);

const openResumeDialog = () => {
      setIsDialogOpen(true);
    };
  
    const closeResumeDialog = () => {
      setIsDialogOpen(false);
    };





return(
<div className="flex flex-col items-center justify-center">
      <div className="cursor-pointer" onClick={openResumeDialog}>
        {/* Make sure to adjust the path if your gif is in a different location */}
        <Image src={resumepk} alt="Choose a Pokémon" width={253} height={189} />
      </div>

      {/* Resume Dialog Popup */}
      <Dialog open={isDialogOpen} onClose={closeResumeDialog} className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          {/* Your resume content */}
          <div className="relative bg-white p-4 max-w-sm mx-auto rounded">
            <Dialog.Title className="text-lg font-medium">My Resume</Dialog.Title>
            <Dialog.Description className="mt-2 text-sm text-gray-500">
              Here is a summary of my professional experience and skills.
            </Dialog.Description>

            {/* Your resume details here */}
            <p className="mt-4">...your resume details...</p>

            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring"
              onClick={closeResumeDialog}
            >
              Close
            </button>
          </div>
        </div>
      </Dialog>
    </div>
)
};
export default  resume