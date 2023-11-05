import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { dataSourceOptions } from 'database/data-source';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    CompanyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
