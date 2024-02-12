import { ConsoleAdapter } from "./ConsoleAdapter";
import { DatadogAdapter } from "./DatadogAdapter";
import { SentryAdapter } from "./SentryAdapter";

export interface Logger {
  log(message: string, context: Record<string, unknown>): void;
  debug(message: string, context: Record<string, unknown>): void;
  info(message: string, context: Record<string, unknown>): void;
  warn(message: string, context: Record<string, unknown>): void;
  error(message: string, context: Record<string, unknown>): void;
}

export const logger: Logger = new ConsoleAdapter();
// export const logger: Logger = new DatadogAdapter();
// export const logger: Logger = new SentryAdapter();
