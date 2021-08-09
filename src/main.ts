import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true
  }));
  const config = new DocumentBuilder()
    .setTitle('Challenge')
    .setDescription('The challenge API description')
    .setVersion('1.0')
    .addTag('challenge')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('challenge/docs', app, document);
  await app.listen(8080);
}
bootstrap();
