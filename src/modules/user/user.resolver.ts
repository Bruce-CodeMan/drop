// Import the core libraries
import { Resolver, Mutation, Query, Args } from "@nestjs/graphql";

// Import the custom files
import { UserService } from "@/modules/user/user.service";
import { UserInput } from "@/modules/user/dto/user-input.type";
import { UserType } from "./dto/user.type";

@Resolver()
export class UserResolver {
	constructor(
		private readonly userService: UserService
	) {}

	// Mutation to create a new user
	@Mutation(() => Boolean, { description: "create a new user" })
	async create(@Args("params") params: UserInput): Promise<boolean> {
		console.log("params: ", params)
		return await this.userService.create(params);
	}

	// Query to find a user by ID
	@Query(() => UserType)
	async find(@Args("id") id: string): Promise<UserType> {
		return await this.userService.findOne(id);
	}

	// Mutation to update a user information by ID
	@Mutation(() => Boolean, { description: "update a new user by id" })
	async update(@Args("id") id: string, @Args("params") params: UserInput): Promise<boolean> {
		return await this.userService.update(id, params);
	}

	// Mutation to delete a user by ID
	@Mutation(() => Boolean, { description: "delete a user by id" })
	async del(@Args("id") id: string): Promise<boolean> {
		return await this.userService.del(id);
	}
}