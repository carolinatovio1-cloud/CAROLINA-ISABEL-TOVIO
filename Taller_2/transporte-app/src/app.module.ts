import { Module } from '@nestjs/common';
import { BusModule } from './bus/bus.module';
import { DriverModule } from './driver/driver.module';

@Module({
  imports: [BusModule, DriverModule],
  controllers: [],
  providers: [],
})
export class AppModule {}