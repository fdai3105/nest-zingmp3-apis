import { Controller, Get, Query } from '@nestjs/common';
import { ArtistService } from './artist.service';

@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get('detail')
  getDetail(@Query('name') name: string) {
    return this.artistService.artistDetail(name);
  }
}
