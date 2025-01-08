export default function Breakline({ Amount }) {
    return (
      <>
        {Array.from({ length: Amount }, (_, index) => (
          <br key={index} />
        ))}
      </>
    );
  }
  