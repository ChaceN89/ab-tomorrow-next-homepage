/**
 * @file faqData.js
 * @module FAQData
 * @desc Contains the FAQ data for Alberta Tomorrow using JSX/HTML elements safely.
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 27, 2025
 */

import React from 'react';

export const faqData = [
  {
    question: "Who is this educational tool designed for?",
    answer: (
      <p>
        Everyone! Anyone interested in finding the balance between our environmental and socio-economic needs!
        The tool is for the public, but also tailored to teachers and students in grades K-12 and Post secondary.
        (Registered teachers can find lesson plans and learning tools for specific grades/topics at:{" "}
        <a
          href="https://simulator.albertatomorrow.ca/#/dashboard/resources"
          className="text-blue-600 underline"
        >
          simulator.albertatomorrow.ca/resources
        </a>
        )
      </p>
    )
  },
  {
    question: "Is it fun to use?",
    answer: <p>Yes! You can earn points, go for high scores, complete quests and challenges!</p>
  },
  {
    question: "How much does it cost to use?",
    answer: <p>Nothing! The tool is free for you to use! Just create an account and start exploring your area.</p>
  },
  {
    question: "Is the educational simulator only for use in school?",
    answer: <p>No! Anyone with an interest and an internet connection can register and create a user account!</p>
  },
  {
    question: "What can I learn from using the simulator?",
    answer: (
      <ul className="list-disc list-inside pl-4 text-gray-700">
        <li>The fine balance between our land uses, the environment and economy</li>
        <li>How our landscape has changed in the past and might change in the future</li>
        <li>Some of the changes needed to help create a sustainable future for your area</li>
        <li>How different climate change scenarios might affect our future environment and economy</li>
        <li>Beneficial management practices for balancing environment and economy</li>
        <li>How climate change affects Alberta and our glaciers — a major source of drinking water</li>
        <li>And much more!</li>
      </ul>
    )
  },
  {
    question: "Does the simulator show what will happen?",
    answer: (
      <p>
        No. The simulator uses hypothetical scenarios to model possible futures — not predictions.
        The more scenarios you explore, the better you can understand how actions today shape tomorrow.
      </p>
    )
  },
  {
    question: "How do I register for an account?",
    answer: (
      <p>
        Go to{" "}
        <a
          href="https://www.simulator.albertatomorrow.ca/#/registerwizard"
          className="text-blue-600 underline"
        >
          Register Here
        </a>
        . You can also follow along with this{" "}
        <a
          href="https://www.youtube.com/watch?v=kJ6Pu5uByQM"
          className="text-blue-600 underline"
          target="_blank"
        >
          YouTube video
        </a>{" "}
        or view this{" "}
        <a
          href="/static/pdfs/registration_instructions.pdf"
          className="text-blue-600 underline"
          target="_blank"
        >
          PDF guide
        </a>
        .
      </p>
    )
  },
  {
    question: "Where do I find the lesson plans?",
    answer: (
      <p>
        Once a teacher registers for a Teacher Account, the lesson plans are in the dashboard:{" "}
        <a
          href="https://simulator.albertatomorrow.ca/#/dashboard/resources"
          className="text-blue-600 underline"
        >
          simulator.albertatomorrow.ca/resources
        </a>
        .
      </p>
    )
  },
  {
    question: "Will the simulator work on my computer?",
    answer: (
      <p>
        Most modern devices should work. To check support, go to{" "}
        <a href="https://get.webgl.org/" className="text-blue-600 underline" target="_blank">
          get.webgl.org
        </a>{" "}
        — you should see a spinning cube.
      </p>
    )
  },
  {
    question: "Why is my simulator running slowly?",
    answer: (
      <p>
        It’s a complex app and might lag on older machines. Use an updated browser and enable "hardware acceleration" in your browser settings. Teachers can also pre-load simulations to reduce wait time in class.
      </p>
    )
  },
  {
    question: "Can I share my work with others?",
    answer: (
      <p>
        Yes! Use the reporting tool on the left of the simulation to create a report and share it via email, Facebook, or Twitter.
      </p>
    )
  },
  {
    question: "Can I still access student reports in V6.0?",
    answer: (
      <p>
        No, teachers can’t view reports directly. But students can email them. Teachers can still manage observations from the dashboard.
      </p>
    )
  },
  {
    question: "Do I need an email address to sign up?",
    answer: (
      <p>
        Yes. Most students have school emails. We collect usage stats to secure funding. Read our{" "}
        <a href="/terms-of-use" className="text-blue-600 underline">
          Terms of Use and Privacy Policy
        </a>
        .
      </p>
    )
  },
  {
    question: "I'm not from Canada — what postal code can I use?",
    answer: <p>You can use: <code>A1A 1A1</code></p>
  }
];
