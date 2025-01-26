export const data = {
    inventory1: {
        companyName: "Empresa 1", 
        products: [
            {
                "id": 1,
                "product": "Laptop HP",
                "category": "Electrónica",
                "quantity": 50,
                "last_entry": "2025-01-20",
                "last_exit": "2025-01-22",
                "low_stock_alert": 10, 
              }, 
        ], 
        productCategories: [
            { "id": 1, "name": "Electrónica", "description": "Productos electrónicos como laptops, tablets y celulares." },
            { "id": 2, "name": "Accesorios", "description": "Periféricos y accesorios de tecnología." }
        ], 
        movements: [
            {
                "id": 1,
                "product": "Laptop HP",
                "type": "entrada",
                "quantity": 10,
                "date": "2025-01-20",
                "user": "admin"
            },
        ], 
        users: [
            {
                "id": 1,
                "name": "Admin User",
                "email": "admin@axisone.com",
                "role": "administrador", 
                "last_activity": "2025-01-24", 
            }, 
            {
                "id": 2,
                "name": "Empleado User",
                "email": "empleado@axisone.com",
                "role": "empleado", 
                "last_activity": "2025-01-24", 
            }, 
        ], 
        providers: [
            {
              "id": 1,
              "name": "Proveedor Tech",
              "contact": "Juan Pérez",
              "email": "juan.perez@tech.com",
              "phone": "+52 123 456 7890",
              "products_supplied": ["Laptop HP", "Mouse Logitech"]
            },
            {
              "id": 2,
              "name": "Distribuidora Global",
              "contact": "María Gómez",
              "email": "maria.gomez@global.com",
              "phone": "+52 987 654 3210",
              "products_supplied": ["Teclado Gaming", "Monitor Dell"]
            }
          ], 
    }, 
};