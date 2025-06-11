import { Injectable } from '@nestjs/common';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Classroom } from 'generated/prisma';

@Injectable()
export class ClassroomService {
  constructor(private prisma: PrismaService) {}
  create(createClassroomDto: CreateClassroomDto): Promise<Classroom> {
    return this.prisma.classroom.create({
      data: createClassroomDto,
    });
  }

  findAll(): Promise<Classroom[]> {
    return this.prisma.classroom.findMany();
  }

  findOne(id: number): Promise<Classroom | null> {
    return this.prisma.classroom.findUnique({
      where: { id: id },
    });
  }

  update(
    id: number,
    updateClassroomDto: UpdateClassroomDto,
  ): Promise<Classroom> {
    return this.prisma.classroom.update({
      where: { id: id },
      data: updateClassroomDto,
    });
  }

  remove(id: number): Promise<Classroom> {
    return this.prisma.classroom.delete({
      where: { id: id },
    });
  }
}
