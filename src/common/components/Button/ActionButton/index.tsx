import clsx from "clsx";
import { IconType } from "react-icons/lib";

type variant = "contained" | "semiContained" | "outlined" | "semiOutlined";
type size = "sm" | "md" | "lg" | "xs";

interface Props {
  onClick?: () => void;
  label: string;
  icon?: IconType;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  variant?: variant;
  submitType?: boolean;
  size?: size;
}
function ActionButton(props: Props) {
  const {
    onClick,
    label,
    icon: Icon,
    className,
    disabled,
    loading,
    variant = "contained",
    submitType,
    size = "md",
  } = props;

  const sizeClass = {
    text: {
      xs: "text-xs",
      sm: "text-[0.8rem]",
      md: "text-base",
      lg: "text-lg",
    },
    padding: {
      xs: "p-[0.4rem] px-2.5",
      sm: "p-[0.5rem] px-3",
      md: "p-2 px-3",
      lg: "p-3 px-3",
    },
    icon: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 22,
    },
  };

  const baseClass = "h-fit rounded-md flex gap-1.5 items-center duration-100";

  const variantClass = {
    contained:
      "border border-transparent bg-tertiary-bright rounded-md hover:bg-tertiary-bright/80",
    semiContained:
      "border border-transparent bg-tertiary-dark rounded-md hover:bg-tertiary/70",
    outlined:
      "border border-border-primary bg-secondary hover:bg-secondary-light/80",
    semiOutlined:
      "border border-border-primary/90 bg-primary hover:bg-secondary-light/40 text-tertiary",
  };

  return (
    <button
      className={clsx(
        className,
        baseClass,
        sizeClass.text[size],
        sizeClass.padding[size],
        variantClass[variant],
      )}
      onClick={onClick}
      disabled={disabled || loading}
      type={submitType ? "submit" : "button"}
    >
      {Icon && (
        <span className="p-0">
          <Icon size={sizeClass.icon[size]} strokeWidth={0.7} />
        </span>
      )}
      <span>{label}</span>
    </button>
  );
}

export default ActionButton;
