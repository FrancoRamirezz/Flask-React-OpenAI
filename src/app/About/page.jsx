"use client"
import React, {useTransition, useState} from 'react'
import Image from "next/image";

//import <Canabout> from "./"
import Usepic from "/Users/franciscoramirez/Desktop/Saas projectone/Client/my-app/public/Images/Usepic.JPG"
function About() {
  const skills = [
    {
      title:"Skills",
      id: 'skills',
      content:(
        <ul className="list-disc pl-2">
          <li>Javascript</li>
          <li>React</li>
          <li> Nodejs</li>
          <li>Python</li>
          <li> Java</li>
          <li>Golang</li>
          </ul>

      ),
    },

    {
      title: "Education",
      id : "education",
      content:(
        <ui className = "list-disc pl-2">
          <li>
          California Polytechnic State University Pomona
          </li>
        </ui>
      )

   
    }
  ];
  const AboutSection = () =>{
    const [tab, setTab] = ("skills")
    const [transation, setTransation] = useTransition()

 // here to handle the change in state
 const handleTabChange = (id) => {
  startTransition(() => {
    setTab(id);
  });
};   
  }
return (

        
<>
<main className = "flex  min-h-screen flex-col bg-[#121212]" >
<section className="text-white" id = 'about'>
<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
<Image src = {Usepic} width ={500} height={500}></Image>
<div>
<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
<p className="text-base lg:text-lg">
  I am an aspiring software developer/cloud engineer who loves problem solving, learning new technologies, and building full stack applications. I have
  experience with Javascript, React, Nextjs, Nodejs, Python, Java, Golang, SQL, Firebase, and AWS. I enjoy working on the creative aspects of frontend and paired with mindset of wanting to understand how things operate,
  building full stack applications develops a mindset of perserverance for me.
</p>
<p className="text-base lg:text-lg">
  Besides tech: I am really intersted in writing short fantasy stories. I'm inspired heavily by GRRM and JRR Tolkien and their styles of creating enjoyable stories. I also enjoy watching Star Wars movies and reading the books/comics 
</p>
<div className='flex flex-row justify-start mt-8'>


</div>
</div>
</div>
</section>
</main>
</>
    );
  
}

  
export default About;