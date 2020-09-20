import { Application } from 'https://deno.land/x/oak@v6.2.0/mod.ts';
import REST from './src/rest.services.ts';

const server = new Application();
server.use(REST.routes());
server.use(REST.allowedMethods());

const port = 5000;

console.log(`Server running on http://127.0.0.1:${port}`);

await server.listen({port : 5000});
