function Button({ href, children, variant = "primary", size = "md", type = "button" }) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-semibold transition duration-200";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-sm",
  };

  const variants = {
    primary:
      "bg-slate-900 text-white hover:bg-slate-800",
    secondary:
      "border border-slate-300 bg-transparent text-slate-900 hover:border-sky-700/40 hover:text-sky-700",
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
