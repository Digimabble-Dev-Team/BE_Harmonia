import { ArgumentMetadata, ValidationPipe } from '@nestjs/common';
export declare class EncryptionPipe extends ValidationPipe {
    transform(value: any, metadata: ArgumentMetadata): Promise<any>;
}
