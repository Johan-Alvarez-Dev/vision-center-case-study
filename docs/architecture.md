# Arquitectura pública

Vision Center usa Next.js como interfaz y frontera HTTP. Las rutas delegan en servicios; SQL Server conserva reglas y operaciones de datos; Azure Blob Storage aloja documentos.

## Contexto de seguridad

La sesión resuelve usuario, rol y sede activa. Los servicios reciben un contexto autorizado; no deben aceptar `sedeId` del body como única prueba de acceso. Administradores pueden cambiar contexto mediante un flujo explícito.

## Módulos

Pacientes, citas, historias clínicas, fórmulas, inventario, facturación, configuración y usuarios comparten contratos TypeScript y convenciones de error.

## Rendimiento

Módulos pesados se cargan bajo demanda. La caché tiene TTL y capacidad acotada. Los estados de carga y skeletons se diseñan como parte del flujo, especialmente para hardware limitado.
