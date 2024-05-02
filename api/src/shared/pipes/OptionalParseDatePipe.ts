import { BadRequestException, PipeTransform } from '@nestjs/common';

export class OptionalParseDatePipe implements PipeTransform {
  transform(value: string) {
    if (typeof value === 'undefined') return undefined;

    if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      throw new BadRequestException(
        'Formato de data inválido. Use o formato: YYYY-MM-DD',
      );
    }

    return value;
  }
}
