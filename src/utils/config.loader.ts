import * as fs from "fs";
import * as path from "path";

import * as dotenv from "dotenv";

export function loadConfig(): Record<string, any> {
	const basePath = process.cwd();
	const defaultEnvPath = path.resolve(basePath, ".env");
	const enviroment = process.env.NODE_ENV || `development`;
	const envFilePath = path.resolve(basePath, `.env.${enviroment}`);

	let config = {};

	if(fs.existsSync(defaultEnvPath)) {
		Object.assign(config, dotenv.parse(fs.readFileSync(defaultEnvPath)));
	}
	if(fs.existsSync(envFilePath)) {
		Object.assign(config, dotenv.parse(fs.readFileSync(envFilePath)));
	}

	return config;
}

