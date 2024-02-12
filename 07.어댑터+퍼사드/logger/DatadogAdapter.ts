import { datadogLogs } from "@datadog/browser-logs";
import { Logger } from "./Logger";

export class DatadogAdapter implements Logger {
  log(message: string, context: Record<string, unknown>): void {
    datadogLogs.logger.debug(message, context);
  }

  debug(message: string, context: Record<string, unknown>): void {
    datadogLogs.logger.debug(message, context);
  }

  info(message: string, context: Record<string, unknown>): void {
    datadogLogs.logger.info(message, context);
  }

  warn(message: string, context: Record<string, unknown>): void {
    datadogLogs.logger.warn(message, context);
  }

  error(message: string, context: Record<string, unknown>): void {
    datadogLogs.logger.error(message, context);
  }
}
