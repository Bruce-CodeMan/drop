// Import the core libraries
import { TypeOrmModule } from "@nestjs/typeorm";

// Import the custom files
import { DBEnum } from "@/enum/config.enum";
import { loadConfig } from "@/utils/config.loader";

function parsePort(value: string | undefined, defaultValue: number): number {
	return value ? parseInt(value, 10) : defaultValue;
}

function parseBoolean(value: string | undefined, defaultValue: boolean): boolean {
	return value ? value === "true": defaultValue;
}

const config = loadConfig();

export const connectionOption: TypeOrmModule = {
	type: config[DBEnum.DB_TYPE],
	host: config[DBEnum.DB_HOST],
	port: parsePort(config[DBEnum.DB_PORT], 3306),
	username: config[DBEnum.DB_USERNAME],
	password: config[DBEnum.DB_PASSWORD],
	database: config[DBEnum.DB_DATABASE],
	entities: [`${__dirname}/../modules/**/*.entity.{ts,js}`],
	synchronize: parseBoolean(config[DBEnum.DB_SYNC], false),
	logging: parseBoolean(config[DBEnum.DB_LOGGING], false)
}