import { useEffect, useState, useRef } from 'react';

export default function TypingName() {
  const [text, setText] = useState('Snehal'); // Start with "Snehal"
  const textRef = useRef(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const words = ['Snehal', 'Developer', 'Coder']; // Words to cycle through

  useEffect(() => {
    // Function to restart animation
    const restartAnimation = () => {
      const el = textRef.current;
      el.classList.remove('typing');
      void el.offsetWidth; // Trigger reflow to restart animation
      el.classList.add('typing');
    };

    // Function to cycle words
    const cycleWords = () => {
      let index = words.indexOf(text);
      index = (index + 1) % words.length; // Move to next word, loop back to start
      setText(words[index]); // Update text to next word
    };

    // Initial call to start the typing animation
    restartAnimation();

    // Change word every 4 seconds and restart animation
    const interval = setInterval(() => {
      cycleWords();
      restartAnimation(); // Restart typing animation
    }, 4000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [text, words]); // Dependency on text to trigger re-run of useEffect

  return (
    <div className="typing-container">
      <svg width="200" height="30" viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
        <foreignObject x="0" y="0" width="200" height="30">
          <div xmlns="http://www.w3.org/1999/xhtml" ref={textRef} className="text typing">
            {text}<span className="cursor">..!</span>
          </div>
        </foreignObject>
      </svg>

      <style>{`
        .text {
          font: bold 20px 'Segoe UI', sans-serif;
          fill: #4B4BFF;
          display: inline-block;
        }

        .cursor {
          animation: blink 0.7s steps(1) infinite;
          fill: #4B4BFF;
        }

        @keyframes blink {
          50% {
            fill: transparent;
          }
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .typing {
          overflow: hidden;
          white-space: nowrap;
          animation: typing 2.5s ease-out forwards, blink 0.7s steps(1) infinite;
        }
      `}</style>
    </div>
  );
}
