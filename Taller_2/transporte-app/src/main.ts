import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // Importa ValidationPipe

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activa la validación global
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,            // Elimina propiedades no definidas en el DTO
    forbidNonWhitelisted: true, // Lanza error si se envían propiedades extra
    transform: true,            // Convierte automáticamente tipos (string -> number)
  }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();