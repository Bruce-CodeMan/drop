import { Injectable } from "@nestjs/common";

import * as OSS from "ali-oss";
import * as dayjs from "dayjs";

// Import the custom files
import { OssType } from "@/modules/oss/dto/oss.type";

@Injectable()
export class OssService {

	// 获取签名
	async getSignature(): Promise<OssType> {
		const config = {
			accessKeyId: '',
			accessKeySecret: '',
			bucket: 'water-drop-bruce',
			dir: 'images/'
		}

		const client = new OSS(config);

		const date = new Date();
		date.setDate(date.getDate() + 1);

		const policy = {
			expiration: date.toISOString(),
			condition: [
				["content-length-range", 0, 10485760000]
			]
		}

		// 签名
		const formData = await client.calculatePostSignature(policy)

		// bucket域名
		const host = `http://${config.bucket}.${
			(await client.getBucketLocation()).location
		}.aliyuncs.com`.toString()

		// 返回参数
		const params = {
			expire: dayjs().add(1, "days").unix().toString(),
			policy: formData.policy,
			signature: formData.Signature,
			accessId: formData.OSSAccessKeyId,
			host
		}

		return params
	}
}