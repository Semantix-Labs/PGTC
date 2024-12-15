import * as React from "react"

// export interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {}

const VisuallyHidden = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <span
        ref={forwardedRef}
        className="absolute h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
        {...props}
      >
        {children}
      </span>
    )
  }
)
VisuallyHidden.displayName = "VisuallyHidden"

export { VisuallyHidden }

