"use client";

import dynamic from "next/dynamic";
const DynamicTeaxtEditor = dynamic(()=>import("../componants/texteditor/texteditor"),{ssr:false});
const HomePage = () => {
  return (
    <div>
      <DynamicTeaxtEditor />
    </div>
  );
};

export default HomePage;
