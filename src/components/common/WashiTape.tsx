import { cva, VariantProps } from "class-variance-authority";

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
)

interface WashiTapeProps extends VariantProps<typeof washiTapeVariants> {
  className?: string;
}

export default function WashiTape({ className, variant = "default" }: WashiTapeProps) {
  return (
    <div className={washiTapeVariants({ variant, className })} />
  );
}