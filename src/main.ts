import { NestFactory } from '@nestjs/core';
import { ExamModule } from './exam.module';

async function bootstrap() {
  const app = await NestFactory.create(ExamModule);
  await app.listen(5000);
}
bootstrap();
