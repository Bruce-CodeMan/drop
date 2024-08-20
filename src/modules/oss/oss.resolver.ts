import { Query, Resolver } from "@nestjs/graphql";

import { OssService } from "@/modules/oss/oss.service";
import { OssType } from "@/modules/oss/dto/oss.type";

@Resolver()
export class OssResolver {
	constructor(private readonly ossService: OssService) {}

	@Query(() => OssType)
	async getOssInfo(): Promise<OssType> {
		return await this.ossService.getSignature();
	}
}