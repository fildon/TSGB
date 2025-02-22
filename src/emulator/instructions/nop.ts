import { increment } from "../arithmetic";
import { Instruction } from "../instruction";

const nop: Instruction = {
  execute: (cpu) => {},
  cycles: 4,
  parameterBytes: 0,
  description: () => "NOP"
}

export default nop