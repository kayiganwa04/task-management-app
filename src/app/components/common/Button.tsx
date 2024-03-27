
export default function Button({
  label,
  type = "submit",
  loading,
  disabled,
  onClick,
  className
}: {
  label: string;
  type?: "submit" | "button" | "reset" | undefined;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className: string
}) {
  const onClickButton = (e: any) => {
    if (loading) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    onClick?.();
  };
  return (
    <button
      type={type}
      onClick={onClickButton}
      disabled={disabled}
      className={`${className} text-black px-7 py-3 rounded-lg text-sm font-bold focus:outline-none hover:bg-white`}
    >
      {label}
    </button>
  );
}
