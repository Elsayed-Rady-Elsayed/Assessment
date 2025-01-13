"use client";

import dynamic from "next/dynamic";
import TextEditor from "../componants/texteditor/texteditor";
const DynamicTeaxtEditor = dynamic(()=>import("../componants/texteditor/texteditor"),{ssr:false});
const HomePage = () => {
  return (
    <div>
      <DynamicTeaxtEditor />
    </div>
  );
};

export default HomePage;
