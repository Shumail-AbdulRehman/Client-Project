function Button({ href, children, variant = "primary", size = "md", type = "button" }) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-semibold transition duration-200";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-sm",
  };

  const variants = {
    primary:
      "bg-sky-300 text-slate-950 hover:bg-sky-200",
    secondary:
      "border border-white/18 bg-white/6 text-white hover:border-sky-300/60 hover:bg-white/10 hover:text-sky-100",
  };

  const className = `${baseStyles} ${sizes[size]} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}

export default Button;
