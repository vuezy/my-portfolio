import { cva, VariantProps } from "class-variance-authority";
import WipeIn, { WipeInProps } from "../animations/WipeIn";

const washiTapeVariants = cva(
  "absolute h-5 rounded-sm opacity-55",
  {
    variants: {
      variant: {
        default: "washi",
        teal: "washi-teal",
        mauve: "washi-mauve",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export default function WashiTape({
  variant = "default",
  className,
  ...props
}: VariantProps<typeof washiTapeVariants> & WipeInProps) {
  return (
    <WipeIn className={washiTapeVariants({ variant, className })} {...props} />
  );
}