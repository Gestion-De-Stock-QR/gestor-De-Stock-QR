import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Producto } from './producto.model';
import { HistorialService } from 'src/historial/historial.service';

@Injectable()
export class ProductoService {

    constructor(
        @InjectModel(Producto) private readonly productoRepo: typeof Producto
    ) { }

    async crear(producto: Producto): Promise<Producto> {
        return await this.productoRepo.create(producto);
    }

    async darDeAlta(id: number, stockIngresado: number): Promise<Producto> {
        const producto = await this.productoRepo.findByPk(id);
        if (!producto) {
            throw new NotFoundException(`Producto con ID ${id} no encontrado`);
        }
        this.aumentarStock(stockIngresado, producto);

        await producto.save();

        return producto;
    }


    async darDeBaja(id: number, stockIngresado: number): Promise<Producto> {
        const producto = await this.productoRepo.findByPk(id);
        if (!producto) {
            throw new NotFoundException(`Producto con ID ${id} no encontrado`);
        }
        this.DesminuirStock(stockIngresado, producto);

        await producto.save();

        return producto;
    }


    aumentarStock(stockIngresado: number, productoActual: Producto) {
        productoActual.stock = productoActual.stock + stockIngresado;
    }
    DesminuirStock(stockIngresado: number, productoActual: Producto) {
        productoActual.stock = productoActual.stock - stockIngresado;
    }
    async obtenerProducto(id: number): Promise<Producto> {
        return await this.productoRepo.findByPk(id);
    }

    async obtenerProductos(): Promise<Producto[]> {
        return await this.productoRepo.findAll();
    }
    async obtenerNombreDeProducto(id: number): Promise<string> {
        return (await this.productoRepo.findByPk(id))?.nombre;
    }
}