import { Controller, Get, Param } from '@nestjs/common';

interface tarea {
  id?: number;
  titulo: string;
  descripcion: string;
}

@Controller('tarea-d')
export class TareaDController {
  tareas: tarea[] = [
    {
      id: 1,
      titulo: '¿Tipos de datos sql?',
      descripcion: 'Muchos por aghota',
    },

    {
      id: 2,
      titulo: '¿Tipos de datos sql?',
      descripcion: 'Muchos por aghota',
    },

    {
      id: 3,
      titulo: '¿Tipos de datos sql?',
      descripcion: 'Muchos por aghota',
    },
  ];
  @Get(':idtarea')
  getMostrar(@Param('idtarea') idtarea) {
    return this.tareas.find((tarea) => tarea.id === parseInt(idtarea));
  }
  @Get()
  getMostrarTodo() {
    return this.tareas;
  }
}
