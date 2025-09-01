import { NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
export declare class JwtMiddleware implements NestMiddleware {
    use(req: any, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
}
