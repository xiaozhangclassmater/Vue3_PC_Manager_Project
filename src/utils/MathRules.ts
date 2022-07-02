function Not_empty_Check(isRequired: boolean, Message: string, Trigger: string) {
  return { required: isRequired, message: Message, trigger: Trigger };
}

function LengthCheck(MinLen: number, Maxlen: number, Message: string, Trigger: string) {
  return { min: MinLen, max: Maxlen, message: Message, trigger: Trigger };
}

function RegularCheck(Regular: unknown, Message: string, Trigger: string) {
  return { pattern: Regular, message: Message, trigger: Trigger };
}

export { Not_empty_Check, LengthCheck, RegularCheck };
