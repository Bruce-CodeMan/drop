import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// Import the libraries from the external
import { UserModule } from '@/modules';
import { configOptions, connectionOption } from './utils';

@Module({
  imports: [
		ConfigModule.forRoot(configOptions),
		TypeOrmModule.forRoot(connectionOption),
		UserModule
	]
})
export class AppModule {}
