import * as React from "react"
import CPU from "../../emulator/cpu"
import Screen from "../../emulator/screen"

interface Props {
  cpu: CPU
}

export default function Display({ cpu }: Props) {
  const canvas = React.useRef<HTMLCanvasElement>(null)

  const [_, setScreen] = React.useState<Screen | null>(null)

  React.useEffect(() => {
    if (canvas.current) {
      setScreen(new Screen(cpu, canvas.current))
    }
  }, [canvas])

  return (
    <section>
      <h2>Display</h2>
      <canvas
        width="160"
        height="144"
        ref={canvas}
      />
    </section>
  )
}