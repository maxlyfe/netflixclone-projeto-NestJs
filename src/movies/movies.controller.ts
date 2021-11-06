import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Movie } from '@prisma/client';
import { Role } from 'src/auth/role.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { UserRole } from 'src/users/enum/role.enum';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesService } from './movies.service';
@Controller('movies')
export class MoviesController {
  constructor(private services: MoviesService) {}

  @Post('create')
  @Role(UserRole.ADMIN)
  @UseGuards(AuthGuard(), RolesGuard)
  createMovie(@Body() data: CreateMovieDto): Promise<Movie> {
    return this.services.create(data);
  }

  @UseGuards(AuthGuard())
  @Get('find-all')
  findMany(): Promise<Movie[]> {
    return this.services.findMany();
  }

  @UseGuards(AuthGuard())
  @Get('find/:id')
  findOne(@Param('id') id: string): Promise<Movie> {
    return this.services.findOne(id);
  }

  @Delete('delete/:id')
  @Role(UserRole.ADMIN)
  @UseGuards(AuthGuard(), RolesGuard)
  deleteOne(@Param('id') id: string): Promise<{ message: string }> {
    return this.services.deleteOne(id);
  }
}
