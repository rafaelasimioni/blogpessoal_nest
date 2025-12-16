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
import { AppController } from './app.controller';
import { ProdService } from './data/services/prod.service';

@Module({
  imports: [
    //Carrega variáveis do .env para todo o projeto
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    //Configuração do MySQL usando variáveis do .env
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
	  useClass: ProdService,
    imports: [ConfigModule],
}),
    PostagemModule,
    TemaModule,
    AuthModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
