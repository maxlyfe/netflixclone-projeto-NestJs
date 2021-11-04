import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  name: string;

  year: Date;

  length: Date;

  @IsNotEmpty()
  storyLine: string;

  @IsUrl()
  image: string;
}
