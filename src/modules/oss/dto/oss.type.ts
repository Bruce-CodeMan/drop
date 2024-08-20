import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class OssType {

	@Field({ description: "expirated time" })
	expire: string;

	@Field()
	policy: string;

	@Field()
	signature: string;

	@Field()
	accessId: string;

	@Field()
	host: string;
}