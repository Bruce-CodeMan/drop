import { Module } from "@nestjs/common";

// Import the custom files
import { OssResolver } from "@/modules/oss/oss.resolver";
import { OssService } from "@/modules/oss/oss.service";

@Module({
	providers: [OssResolver, OssService]
})
export class OssModule{}