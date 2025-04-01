
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


export default function CurriculumDropDown({ learningOutcomes, title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" py-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-start items-center w-full text-left hover:cursor-pointer "
        aria-expanded={isOpen}
      >
        <h4 className="font-semibold text-base">{title}</h4>
        {isOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
      </button>


      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 mt-2' : 'max-h-0'
        }`}
      >
        <ul className="list-disc list-inside pl-4 text-sm text-gray-700">
          {learningOutcomes.map((item, index) => (
            <li key={index} className="py-0.5">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
