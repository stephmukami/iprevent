"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";

type Props = object;

function Responsibility({}: Props) { 
  const [note, setNote] = useState("");

  const sendPrivacyNote = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      axios.post("/api/privacy", { note });
      console.log("Note submitted successfully", note);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="top-row text-center md:p-[80px] p-[40px] title-flex-container flex md:flex-row flex-col items-center ">
        <h3 className="text-3xl p-4 md:mb-0 mb-3"> In a world of AI we choose to be </h3>
        <h3 className="text-2xl bg-black text-white flex md:flex-row flex-col items-center p-4"> responsible </h3>
      </div>

      <div className="bottom-row bg-black text-white flex md:flex-row flex-col md:p-[70px] p-4 md:space-x-[250px] md:w-screen">
        <div className="md:w-[450px] w-screen p-6 md:p-0">
          <p className="mb-4">Our app is committed to responsible computing, giving users full control over their personal data. This includes the ability to delete their accounts and all associated data whenever they choose, ensuring complete transparency and data ownership. We believe in empowering users to manage their information with ease and confidence.</p>
          <p className="mb-4">Additionally, we have established a clear accountability process. Users can report issues or inaccuracies in the app predictions, ensuring continuous improvement and reliability of the platform. Accessibility is also a priority, with the app interface designed to adapt seamlessly to various screen sizes and devices, making it easy to use for all individuals, regardless of the device they have.</p>
        </div>

        <div>
          <img className="h-[650px] w-[500px]" src="./iprevent-eight.jpg" alt="robot arm" />
        </div>
      </div>

      <div className="feedback bg-black text-white md:w-screen">
        <div className="flex text-center justify-center items-center space-x-5 mb-4">
          <h3 className="text-2xl"> We’re here just for YOU </h3>
          <img className="w-[50px] h-[50px]" src="https://img.icons8.com/?size=100&id=FXVPqB6MxEu7&format=png&color=FFFFFF" alt="message icon" />
        </div>
        <h3 className="text-xl text-center mb-6">Do you have any concerns regarding privacy and how your data is used? Drop us a note and we will address it</h3>
       
        <div className="flex items-center justify-center">
          <form className="flex flex-col items-center justify-center h-[400px] w-[600px] border border-white" action="" onSubmit={sendPrivacyNote}>
            <div className="mb-4 bg-black">
              <label htmlFor="privacy-note" className="font-light text-white">Text us, we’ll respond</label>
            </div>

            <div className="mb-8 md:w-[370px] w-[200px] bg-black">
              <input 
                className="text-black bg-white md:w-[370px] w-full rounded-md h-[200px] text-center" 
                placeholder="Enter your message here" 
                id="note" 
                name="note" 
                type="text" 
                value={note}
                onChange={(e) => setNote(e.target.value)}
                required 
              />
            </div>

            <button className="text-black font-bold w-[110px] h-[36px] bg-brand-green rounded-md">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Responsibility;
