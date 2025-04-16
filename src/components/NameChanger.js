import { useEffect, useState, useRef } from 'react';

export default function NameChanger() {
  const [text, setText] = useState('Snehal'); // Start with "Snehal"
  const textRef = useRef(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const words = ['Snehal', 'Developer', 'Coder'];

  useEffect(() => {
    const cycleWords = () => {
      let index = words.indexOf(text);
      index = (index + 1) % words.length;
      setText(words[index]);
    };

    const interval = setInterval(cycleWords, 4000); // Change word every 4 seconds
    return () => clearInterval(interval);
  }, [text, words]);

  return (
    <div className="typing-container">
      <svg width="250" height="30" viewBox="0 0 250 30" xmlns="http://www.w3.org/2000/svg">
        <foreignObject x="0" y="0" width="250" height="30">
          <div xmlns="http://www.w3.org/1999/xhtml" ref={textRef} className="text typing">
            {text}<span className="cursor">|</span>
          </div>
        </foreignObject>
      </svg>

      <style>{`
        .text {
          font: bold 20px 'Segoe UI', sans-serif;
          fill: #4B4BFF;
          display: inline-block;
          position: relative;
        }

        .cursor {
          animation: blink 0.7s steps(1) infinite;
          fill: #4B4BFF;
          position: absolute;
          right: 0;
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
          animation: typing 2s ease-out forwards, blink 0.7s steps(1) infinite;
        }

        .text {
          transition: opacity 0.5s ease-in-out; /* Smooth fade between words */
        }
      `}</style>
    </div>
  );
}
