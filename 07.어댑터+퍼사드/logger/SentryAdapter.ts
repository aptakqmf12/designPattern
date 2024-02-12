import { captureMessage, captureException } from "@sentry/browser";
import { Logger } from "./Logger";

export class SentryAdapter implements Logger {
  log(message: string, context: Record<string, unknown>): void {
    captureMessage(message, context);
  }

  debug(message: string, context: Record<string, unknown>): void {
    captureMessage(message, context);
  }

  info(message: string, context: Record<string, unknown>): void {
    captureMessage(message, context);
  }

  warn(message: string, context: Record<string, unknown>): void {
    captureException(new Error(message), { data: context });
  }

  error(message: string, context: Record<string, unknown>): void {
    captureException(new Error(message), { data: context });
  }
}
