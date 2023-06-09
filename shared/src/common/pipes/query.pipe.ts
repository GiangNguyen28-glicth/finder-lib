import { PipeTransform, Injectable } from '@nestjs/common';
import { ArgumentMetadata, IFilterDTO } from '../interfaces';

@Injectable()
export class ValidationMultiIdsPipe implements PipeTransform {
  transform(value: IFilterDTO, metadata: ArgumentMetadata) {
    if (!value && !value.ids) {
      return value;
    }
    const ids = (value.ids as string).split(',');
    value.ids = ids;
    return value;
  }
}
