import * as productoModelo from '../modelos/productoModelo.js';

// --- Funciones de Controladores de Productos ---

// ejercicio6. POST /productos (Crear)
export const createProducto = async (req, res) => {
    const { nombre, precio, stock, categoria_id } = req.body;
    if (!nombre || !precio || !stock || !categoria_id) {
        return res.status(400).json({ message: "Faltan datos obligatorios (nombre, precio, stock, categoria_id)." });
    }
    try {
        // CORREGIDO: Llamando a productoModelo
        const id = await productoModelo.insertaProducto(nombre, precio, stock, categoria_id);
        res.status(201).json({ id, nombre, message: "Producto creado exitosamente." });
    } catch (error) {
        // En caso de error de clave foránea (categoria_id inexistente) o BD
        res.status(500).json({ error: error.message });
    }
};

// ejercicio7. GET /productos (Leer Todos)
export const getProductos = async (req, res) => {
    try {
        // CORREGIDO: Llamando a productoModelo
        const productos = await productoModelo.obtenerTodosProductos();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ejercicio8. GET /productos/:id (Leer Uno)
export const getProductoById = async (req, res) => {
    try {
        // CORREGIDO: Llamando a productoModelo
        // Aquí 'producto' es la variable local que almacena el resultado
        const producto = await productoModelo.obtenerProductoPorId(req.params.id);
        
        if (!producto) return res.status(404).json({ message: "Producto no encontrado." });
        
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ejercicio9. PUT /productos/:id (Actualizar Completo)
export const updateProducto = async (req, res) => {
    const { nombre, precio, stock, categoria_id } = req.body;
    if (!nombre || !precio || !stock || !categoria_id) {
        return res.status(400).json({ message: "Faltan datos obligatorios para la actualización." });
    }
    try {
        // CORREGIDO: Llamando a productoModelo
        const affectedRows = await productoModelo.actualizaProducto(req.params.id, nombre, precio, stock, categoria_id);
        
        if (affectedRows === 0) return res.status(404).json({ message: "Producto no encontrado para actualizar." });
        
        res.status(200).json({ message: "Producto actualizado exitosamente." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ejercicio10. PATCH /productos/:id/stock (Actualizar Parcial/Stock)
export const patchStock = async (req, res) => {
    const { cantidad } = req.body;
    // Valida que 'cantidad' sea un número válido y no cero
    if (typeof cantidad !== 'number' || cantidad === 0) {
        return res.status(400).json({ message: "Se requiere un valor numérico 'cantidad' (positivo o negativo) válido." });
    }
    try {
        // CORREGIDO: Llamando a productoModelo
        const affectedRows = await productoModelo.actualizaStock(req.params.id, cantidad);
        
        if (affectedRows === 0) return res.status(404).json({ message: "Producto no encontrado o stock no actualizado." });
        
        res.status(200).json({ message: `Stock actualizado en ${cantidad} unidades.` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};