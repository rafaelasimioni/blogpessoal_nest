import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';
import { ConfigModule } from '@nestjs/config';
import { Tema } from './tema/entities/Tema.entity';
import { TemaModule } from './tema/tema.module';
import { Bcrypt } from './auth/bcrypt/bcrypt';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { Usuario } from './usuario/entities/usuario.entity';

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
      entities: [Postagem,Tema,Usuario],
      synchronize: true,
    }),
    PostagemModule,
    TemaModule,
    AuthModule,
    UsuarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
