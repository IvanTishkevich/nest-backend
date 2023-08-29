import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import * as process from "process";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {JwtAuthGuard} from "./auth/jwt-auth.guard";
import {ValidationPipe} from "./pipes/validation.pipe";

async function start(){
    const PORT = process.env.PORT || 3000;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle("Бэкенд на nest.js")
        .setDescription("Документация рест-апи")
        .setVersion("1.8.8")
        .addTag("Tishka")
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    app.useGlobalPipes(new ValidationPipe());

    await app.listen(3000, ()=>{
        console.log(`server started on port = ${PORT}`);
    })
}

start();
