import { PipeTransform } from '@nestjs/common';
import { ArgumentMetadata, IFilterDTO } from 'libs/shared';
export declare class ValidationMultiIdsPipe implements PipeTransform {
    transform(value: IFilterDTO, metadata: ArgumentMetadata): IFilterDTO;
}
