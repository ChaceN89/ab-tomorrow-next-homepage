/**
 * @file QuestionDropdown.jsx
 * @module UI/QuestionDropdown
 * @desc FAQ item with collapsible answer section. Animates open/close and avoids raw HTML rendering.
 * 
 * @author Chace Nielson
 * @created Mar 27, 2025
 */
"use client"
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function QuestionDropdown({ question, answer, maxW='4xl' }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`w-full max-w-${maxW} mx-auto py-2`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left cursor-pointer border border-black/10 rounded-lg px-4 py-3 hover:bg-primary/20 transition"
        aria-expanded={isOpen}
      >
        <h4 className="text-lg font-semibold text-gray-800">{question}</h4>
        {isOpen ? (
          <FaChevronUp className="text-gray-500" />
        ) : (
          <FaChevronDown className="text-gray-500" />
        )}
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden px-4 ${
          isOpen ? 'max-h-[500px] mt-2 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-sm text-gray-700 pb-2">{answer}</div>
      </div>
    </div>
  );
}
