// Import the core libraries
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// Import the custom files
import { User } from "@/modules/user/models/user.entity";

@Module({
	imports: [TypeOrmModule.forFeature([User])],
	providers: [],
	exports: []
})
export class UserModule{}