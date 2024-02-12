import { Logger } from "./Logger";

export class ConsoleAdapter implements Logger {
  log(message: string, context: Record<string, unknown>): void {
    console.log(message, context);
  }

  debug(message: string, context: Record<string, unknown>): void {
    console.debug(message, context);
  }

  info(message: string, context: Record<string, unknown>): void {
    console.info(message, context);
  }

  warn(message: string, context: Record<string, unknown>): void {
    console.warn(message, context);
  }

  error(message: string, context: Record<string, unknown>): void {
    console.error(message, context);
  }
}
