import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ClassroomModule } from './classroom/classroom.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [PrismaModule, ClassroomModule, StudentModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
