import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
export declare class GlobalErrorHandler implements ExceptionFilter {
    catch(error: any, host: ArgumentsHost): void;
}
