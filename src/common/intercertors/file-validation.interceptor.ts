import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { errorBadRequest } from '../errors/exception-errors';

@Injectable()
export class FileSizeValidationPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(file: Express.Multer.File, metadata: ArgumentMetadata) {
    if (!file) {
      throw new BadRequestException('Validation failed file is null');
    }

    if (file.size > 3000000000000000) {
      return errorBadRequest('Validation failed size');
    }

    if (
      file.mimetype !== 'image/jpg' &&
      file.mimetype !== 'image/jpeg' &&
      file.mimetype !== 'image/png'
    ) {
      return errorBadRequest('Validation failed type');
    }

    return file;
  }
}
