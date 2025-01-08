import { motion } from "framer-motion";

export default function HighlightText({ Text, Highlight }) {
  const Words = Text.split(" ");
  const HighlightedWords = Highlight.split(" ");

  return (
    <>
      <h2 style={{ display: "flex", flexWrap: "wrap" }}>
        {Words.map((word, index) => {
          const isHighlighted = HighlightedWords.includes(word);

          return (
            <span
              key={index}
              style={{
                position: "relative",
                marginRight: "0.3rem", // Mały odstęp między słowami
              }}
            >
              {isHighlighted && (
                <motion.span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    backgroundColor: "red",
                    zIndex: -1,
                    width: "100%",
                    height: "100%",
                  }}
                  whileInView={{ width: "100%", opacity: 1, skewX: "0deg" }}
                  initial={{ width: "0%", opacity: 0, skewX: "5deg" }}
                  viewport={{ once: false, amount: 1 }}
                  transition={{ duration: 0.5, ease: "circInOut", delay: 0.2 }}
                />
              )}
              {word + " "}
            </span>
          );
        })}
      </h2>
    </>
  );
}
