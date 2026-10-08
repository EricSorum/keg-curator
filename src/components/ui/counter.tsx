import { MinusIcon, PlusIcon } from "lucide-react"
import { type HTMLMotionProps, motion, type SpringOptions } from "motion/react"
import * as React from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { SlidingNumber, type SlidingNumberProps } from "@/packages/text/sliding-number"

export interface CounterProps extends Omit<HTMLMotionProps<"div">, "children"> {
  number: number
  setNumber: (value: number) => void
  transition?: SpringOptions
  buttonProps?: ButtonProps
  slidingNumberProps?: Partial<SlidingNumberProps>
}

export const Counter = React.forwardRef<HTMLDivElement, CounterProps>(
  (
    {
      number,
      setNumber,
      className,
      transition = { type: "spring", bounce: 0, stiffness: 300, damping: 30 },
      buttonProps,
      slidingNumberProps,
      ...props
    },
    ref,
  ) => {
    const handleDecrement = () => {
      setNumber(number - 1)
    }

    const handleIncrement = () => {
      setNumber(number + 1)
    }

    return (
      <motion.div
        ref={ref}
        layout
        transition={transition}
        className={cn(
          "flex items-center gap-3 rounded-full border bg-background px-1.5 py-1",
          className,
        )}
        {...(props as any)}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            size="icon"
            variant="ghost"
            className="size-8 rounded-full"
            onClick={handleDecrement}
            aria-label="Decrease"
            {...buttonProps}
          >
            <MinusIcon className="size-4" />
          </Button>
        </motion.div>

        <SlidingNumber
          number={number}
          className="min-w-[2ch] text-center font-medium tabular-nums"
          {...slidingNumberProps}
        />

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            size="icon"
            variant="ghost"
            className="size-8 rounded-full"
            onClick={handleIncrement}
            aria-label="Increase"
            {...buttonProps}
          >
            <PlusIcon className="size-4" />
          </Button>
        </motion.div>
      </motion.div>
    )
  },
)

Counter.displayName = "Counter"

// Demo
export function Demo() {
  const [number, setNumber] = React.useState(42)

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <Counter number={number} setNumber={setNumber} />
    </div>
  )
}
