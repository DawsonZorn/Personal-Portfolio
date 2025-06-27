import { useState } from 'react'

export default function Header() {
  return (
    <div id="header" className="w-full flex flex-col items-center justify-center min-h-screen bg-stone-800 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-4 text-white">Full-Stack Developer</h1>
        <p className="text-lg text-gray-200 mb-8">
          I create modern web applications with clean code and exceptional user experiences. Passionate about building scalable solutions that make a difference.
        </p>
      </div>
    </div>
  );
}