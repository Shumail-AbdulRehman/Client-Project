function Reveal({ as: Tag = "div", className = "", children }) {
  return <Tag className={`enter-fade-up ${className}`}>{children}</Tag>;
}

export default Reveal;
