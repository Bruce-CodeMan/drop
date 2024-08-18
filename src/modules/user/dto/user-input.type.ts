import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class UserInput {

	@Field({ description: "展示的用户名" })
	name: string;

	@Field({ description: "用户的描述" })
	desc: string;
}