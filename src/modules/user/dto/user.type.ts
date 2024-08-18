import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class UserType {

	@Field()
	id?: string;

	@Field({ description: "用于展示" })
	name: string; 

	@Field({ description: "描述信息" })
	desc: string;

	@Field({ description: "用于登录" })
	account: string;
}