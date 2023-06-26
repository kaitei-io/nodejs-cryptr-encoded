declare class Cryptr {
	constructor(
		secret: string,
		options?: { pbkdf2Iterations?: number; saltLength?: number },
	);

	encrypt(value: string): string;

	decrypt(value: string): string;

    encrypt_and_encode(value: string): string;

	decode_and_decrypt(value: string): string;

}

export = Cryptr;
