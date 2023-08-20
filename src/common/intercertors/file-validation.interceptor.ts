import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { errorExceptions } from '../errors/exception-errors';
import { ApolloServerErrorCode } from '@apollo/server/errors';

@Injectable()
export class FileSizeValidationPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(file: Express.Multer.File, metadata: ArgumentMetadata) {
    if (!file) {
      throw new BadRequestException('Validation failed file is null');
    }

    if (file.size > 3000000000000000) {
      errorExceptions(
        ApolloServerErrorCode.PERSISTED_QUERY_NOT_FOUND,
        'Validation failed size',
      );
    }

    if (
      file.mimetype !== 'image/jpg' &&
      file.mimetype !== 'image/jpeg' &&
      file.mimetype !== 'image/png'
    ) {
      errorExceptions(
        ApolloServerErrorCode.PERSISTED_QUERY_NOT_FOUND,
        'Validation failed type',
      );
    }

    return file;
  }
}
