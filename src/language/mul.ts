import { Math } from "../math";
import { Feat } from "./feat";

export class Mul extends Feat {
  constructor(c) {
    super(c);
  }
  static k = "*";
  lex() {
    return Math.mul;
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  eval() {
    throw new Error("Method not implemented.");
  }
}
