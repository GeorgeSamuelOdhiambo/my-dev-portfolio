"use client";
import { useEffect, useState } from "react";
import { openSource, showContactUs } from "../configs";
import GithubProfileCard from "@/cards/GithubProfileCard";
import Navigation from "@/components/Navigation";
import Greetings from "@/components/Greetings";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  const [githubProfileData, SetGithubProfileData] = useState();
  useEffect(() => {
    const getStaticProps = async () => {
      const githubProfileData = await fetch(
        `https://api.github.com/users/${openSource.githubUserName}`
      ).then((res) => res.json());
      var { avatar_url, bio, location } = githubProfileData;
      SetGithubProfileData({ avatar_url, bio, location });
    };

    getStaticProps();
  }, []);
  return (
    <div>
      <Navigation />
      <Greetings />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <ContactUs />
      <GithubProfileCard {...githubProfileData} />
    </div>
  );
}
