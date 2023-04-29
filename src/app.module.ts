import { Module } from '@nestjs/common';
import { TareaDController } from './tarea-d/tarea-d.controller';
import { ProcedimientoController } from './procedimiento/procedimiento.controller';

@Module({
  imports: [],
  controllers: [TareaDController, ProcedimientoController],
  providers: [],
})
export class AppModule {}
