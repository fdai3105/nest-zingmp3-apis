import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaylistModule } from './playlist/playlist.module';
import { SongModule } from './song/song.module';
import { VideoModule } from './video/video.module';
import { ArtistModule } from './artist/artist.module';
import { ZingService } from './services/ZingService';

@Module({
  imports: [PlaylistModule, SongModule, VideoModule, ArtistModule],
  controllers: [AppController],
  providers: [AppService, ZingService],
})
export class AppModule {}
