import React, { useState, useEffect } from "react";

const Typewriter = () => {
  const textArray = [" Rajan Pandey", "A Web Developer"];
  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenTexts = 1500;

  useEffect(() => {
    const handleTyping = () => {
      const currentText = textArray[textIndex];

      if (!isDeleting && charIndex < currentText.length) {
        setText((prev) => prev + currentText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), delayBetweenTexts);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % textArray.length);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <h1 className="typewriter">
      {text}
      <span className="cursor">|</span>
    </h1>
  );
};

export default Typewriter;
