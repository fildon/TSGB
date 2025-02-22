import { Instruction } from "../instruction";

export const disableInterrupts: Instruction = {
  execute: (cpu) => { cpu.interruptsEnabled = false },
  cycles: 4,
  parameterBytes: 0,
  description: () => "DI"
}

export const enableInterrupts: Instruction = {
  execute: (cpu) => { cpu.interruptsEnabled = true },
  cycles: 4,
  parameterBytes: 0,
  description: () => "EI"
}

export const stop: Instruction = {
  execute: (cpu) => {
    cpu.isStopped = true
    // TODO what does this actually do?

    cpu.memory.at(0xFF04).write(0)
  },
  cycles: 4,
  parameterBytes: 0,
  description: () => "STOP"
}

export const scf: Instruction = {
  execute(cpu) {
    cpu.registers.getFlag("Operation").write(0)
    cpu.registers.getFlag("Half-Carry").write(0)
    cpu.registers.getFlag("Carry").write(1)
  },
  cycles: 4,
  parameterBytes: 0,
  description: () => "SCF"
}

export const ccf: Instruction = {
  execute(cpu) {
    const carry = cpu.registers.getFlag("Carry")
    
    cpu.registers.getFlag("Operation").write(0)
    cpu.registers.getFlag("Half-Carry").write(0)
    carry.write(carry.read() ^ 1)
  },
  cycles: 4,
  parameterBytes: 0,
  description: () => "CCF"
}