"use client";

import React, { useState, useRef } from "react";
import { GoItalic } from "react-icons/go";
import { LuRedo, LuUndo } from "react-icons/lu";
import { MdFormatBold, MdFormatUnderlined } from "react-icons/md";
import { RxTextAlignCenter, RxTextAlignLeft, RxTextAlignRight } from "react-icons/rx";

const TextEditor = () => {
  const [history, setHistory] = useState<string[]>([""]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const editorRef = useRef<HTMLDivElement | null>(null);

  const handleAlignment = (alignment: "left" | "center" | "right") => {
    if (editorRef.current) {
      editorRef.current.style.textAlign = alignment;
    }
  };

  const saveState = () => {
    const currentText = editorRef.current?.innerHTML || "";
    const newHistory = [...history.slice(0, currentIndex + 1), currentText];
    setHistory(newHistory);
    setCurrentIndex(currentIndex + 1);
  };

  const handleInput = () => {
    saveState();
  };

  const handleUndo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      if (editorRef.current) {
        editorRef.current.innerHTML = history[currentIndex - 1];
      }
    }
  };

  const handleRedo = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
      if (editorRef.current) {
        editorRef.current.innerHTML = history[currentIndex + 1];
      }
    }
  };

  const handleFontStyle = (font: string) => {
    if (editorRef.current) {
      editorRef.current.style.fontFamily = font;
    }
  };

  const handleUnderline = () => {
    if(typeof window==="undefined"){
      return;
    }
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const span = document.createElement("span");
      span.style.textDecoration = "underline";
      range.surroundContents(span);
    }
  };

  const handleMarkText = () => {
    if(typeof window==="undefined"){
      return;
    }
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const span = document.createElement("span");
      span.style.backgroundColor = "yellow";
      range.surroundContents(span);
    }
  };

  const handleBold = () => {
    if(typeof window==="undefined"){
      return;
    }
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      document.execCommand("bold");
    }
  };

  const handleItalic = () => {
    if(typeof window==="undefined"){
      return ;
    }
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      document.execCommand("italic");
    }
  };

  const handleFontSize = (size: string) => {
    if (editorRef.current) {
      editorRef.current.style.fontSize = size;
    }
  };

  return (
    <div className="border" >
      <div className="flex p-2 flex-wrap items-center justify-between h-full gap-4">
        <button onClick={() => handleAlignment("left")}><RxTextAlignLeft /></button>
        <button onClick={() => handleAlignment("center")}><RxTextAlignCenter /></button>
        <button onClick={() => handleAlignment("right")}><RxTextAlignRight /></button>
        <button onClick={handleUndo} disabled={currentIndex === 0}>
            <LuUndo />
        </button>
        <button onClick={handleRedo} disabled={currentIndex === history.length - 1}>
            <LuRedo />
        </button>
        <button onClick={handleUnderline}><MdFormatUnderlined /></button>
        <button onClick={handleMarkText}>Mark</button>
        <button onClick={handleBold}><MdFormatBold /></button>
        <button onClick={handleItalic}><GoItalic /></button>

        <select onChange={(e) => handleFontStyle(e.target.value)} style={{ marginLeft: "10px" }}>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Verdana">Verdana</option>
        </select>

        <select onChange={(e) => handleFontSize(e.target.value)} style={{ marginLeft: "10px" }}>
          <option value="14px">14px</option>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
          <option value="24px">24px</option>
        </select>
      </div>

      <div
        ref={editorRef}
        contentEditable
        className="border h-[300px] p-2 text-md"
        onInput={handleInput}
        onBlur={handleInput}
      ></div>
    </div>
  );
};

export default TextEditor;
