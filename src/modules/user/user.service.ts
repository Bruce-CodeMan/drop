// Import the core libraries
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeepPartial, Repository } from "typeorm";

// Import the custom files
import { User } from "@/modules/user/models/user.entity";

/**
 * Service responsible for handling user-related operations
 */
@Injectable()
export class UserService {
	constructor(	
		@InjectRepository(User) private UserRepository: Repository<User>,
	) {}

	/**
	 * Create a new user in the database
	 * @param entity - Parital User Obejct containing user details
	 * @returns Promise<boolean> - True if user creation was successful, false otherwise
	 */
	async create(entity: DeepPartial<User>): Promise<boolean> {
		const res = await this.UserRepository.insert(entity);
		// Return true if at least one row was affected(i.e. user was created)
		return res && res.raw.affectedRows > 0;
	}

	/**
	 * Delete a user by user's id
	 * @param id - User id stored in the database
	 * @returns Promise<boolean> - True if user deletion was successful, false otherwise
	 */
	async del(id: string): Promise<boolean> {
		const res = await this.UserRepository.delete(id);
		return res && res.affected > 0;
	}

	/**
	 * Update a user's information
	 * @param id - User id stored in the database
	 * @param entity - Partial User Object containing updated user details
	 * @returns Promise<boolean> - True if user update was successful, false otherwise
	 */
	async update(id: string, entity: DeepPartial<User>): Promise<boolean> {
		const res = await this.UserRepository.update(id, entity);
		return res && res.affected > 0;
	}

	/**
	 * Find a user by User's id
	 * @param id - User id stored in the database
	 * @returns Promise<User>- User Object if found, null otherwise
	 */
	async findOne(id: string): Promise<User> {
		return await this.UserRepository.findOne({
			where: {
				id
			}
		})
	}
}