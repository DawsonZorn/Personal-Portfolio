import { useState } from 'react'

export default function Header() {
  return (
    <div id="header" className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Full-Stack Developer</h1>
      <p className="text-lg text-gray-700 mb-8">
        I create modern web applications with clean code and exceptional user experiences. Passionate about building scalable solutions that make a difference.
      </p>

    </div>
  );
}