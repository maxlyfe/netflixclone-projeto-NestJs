import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  name: string;

  year: string;

  length: string;

  @IsNotEmpty()
  storyLine: string;

  @IsUrl()
  image: string;
}
