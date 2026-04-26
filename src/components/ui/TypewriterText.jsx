import { useEffect, useState } from "react";

function TypewriterText({
  text,
  as: Tag = "p",
  className = "",
  delay = 0,
  speed = 34,
}) {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        setVisibleText(text);
        return undefined;
      }
    }

    setVisibleText("");

    let timeoutId;
    let index = 0;

    function typeNextCharacter() {
      index += 1;
      setVisibleText(text.slice(0, index));

      if (index < text.length) {
        timeoutId = window.setTimeout(typeNextCharacter, speed);
      }
    }

    timeoutId = window.setTimeout(typeNextCharacter, delay);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [delay, speed, text]);

  return (
    <Tag className={className} aria-label={text}>
      <span>{visibleText}</span>
      <span aria-hidden="true" className="typewriter-cursor">
        |
      </span>
    </Tag>
  );
}

export default TypewriterText;
