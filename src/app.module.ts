import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';
import { ConfigModule } from '@nestjs/config';
import { Tema } from './tema/entities/Tema.entity';
import { TemaModule } from './tema/tema.module';

@Module({
  imports: [
    //Carrega variáveis do .env para todo o projeto
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    //Configuração do MySQL usando variáveis do .env
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [Postagem,Tema],
      synchronize: true,
    }),
    PostagemModule,
    TemaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
