import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './students.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(Student)
        private readonly StudentRepository: Repository<Student>,
    ) {}

    async createStudent(data: Partial<Student>): Promise<Student> {
        const student = this.StudentRepository.create(data);
        return this.StudentRepository.save(student);

    }
}