import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import {User} from "../users/users.model";
import {Post} from "./post.model";
import {SequelizeModule} from "@nestjs/sequelize";
import {FilesService} from "../files/files.service";
import {FilesModule} from "../files/files.module";

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [
      SequelizeModule.forFeature([User, Post]),
      FilesModule
  ]
})
export class PostsModule {}
