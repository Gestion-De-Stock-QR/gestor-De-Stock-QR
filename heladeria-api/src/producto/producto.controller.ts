import { Controller, Get, Post, Body, Param, BadRequestException, NotFoundException, Patch, Query } from "@nestjs/common";
import { ProductoService } from "../producto/producto.service";

import { Producto } from './producto.model';
import { HistorialService } from "src/historial/historial.service";
import { TipoHistorial } from 'src/historial/tipo.enum';

@Controller("producto")
export class ProductoController {
    productoService: ProductoService;
    historialServicio: HistorialService;
    constructor(productoService: ProductoService , historialServicio: HistorialService ) {
        this.productoService = productoService;
        this.historialServicio = historialServicio;
    }

    @Post("/crear")
    async crearProducto(@Body() producto: Producto): Promise<Producto> {
        return await this.productoService.crear(producto);
    }

    @Patch(":id/alta")
    async darDeAlta(@Param('id') id: number, @Body('stockIngresado') stockIngresado: number): Promise<Producto> {

        try {

            this.guardarHistorial(stockIngresado,TipoHistorial.ALTA,id);
            return await this.productoService.darDeAlta(id, stockIngresado);
        }
        catch (error) {
            throw new NotFoundException(`No se pudo dar de alta producto: ${error.message}`);
        }
    }

    @Patch(":id/baja")
    async darDeBaja(@Param('id') id: number, @Body('stockRetirado') stockRetirado: number): Promise<Producto> {

        try {

            this.guardarHistorial(stockRetirado,TipoHistorial.BAJA,id);
            return await this.productoService.darDeBaja(id, stockRetirado);
        }
        catch (error) {
            throw new NotFoundException(`No se pudo dar de baja producto: ${error.message}`);
        }
    }

    async guardarHistorial(stock: number, tipo :TipoHistorial, productoID : number ): Promise<void> {
        const fecha = new Date();
        const nombreProducto = this.productoService.obtenerNombreDeProducto(productoID);
        await this.historialServicio.crear(stock,tipo, fecha, productoID );
    }
   



}