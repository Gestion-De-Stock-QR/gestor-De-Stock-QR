import { Module } from '@nestjs/common';
import { ProductoModule } from './producto/producto.module';
import { HistorialModulo } from './historial/historial.modulo';
import { Producto } from './producto/producto.model';
import { Historial } from './historial/historial.model';
import { SequelizeModule } from '@nestjs/sequelize';
@Module({

  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost', // Asegúrate de que el host sea el correcto
      port: 5433, // Puerto expuesto en docker-compose.yml
      username: 'postgres',
      password: 'postgres',
      database: 'heladeria',
      models: [Producto, Historial],
      autoLoadModels: true, // Carga automática de modelos
      synchronize: true,  // Sincroniza modelos con la base de datos (Úsalo con precaución)
    }),
    ProductoModule, HistorialModulo],
})
export class AppModule { }
