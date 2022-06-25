import React from "react";
import Header from "../components/Header";
import Video from "../components/Video";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";

const Ignite: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  console.log(import.meta.env.VITE_URI);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1"></div>}
        <Sidebar />
      </main>
    </div>
  );
};

export default Ignite;
