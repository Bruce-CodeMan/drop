import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';

// Import the libraries from the external
import { 
	UserModule,
	OssModule
} from '@/modules';
import { configOptions, connectionOption } from './utils';

@Module({
  imports: [
		ConfigModule.forRoot(configOptions),
		TypeOrmModule.forRoot(connectionOption),
		GraphQLModule.forRoot({
			driver: ApolloDriver,
			autoSchemaFile: true
		}),
		UserModule,
		OssModule
	]
})
export class AppModule {}
