import { MigrationInterface, QueryRunner } from "typeorm";

export class First1756966204685 implements MigrationInterface {
    name = 'First1756966204685'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email_id" character varying NOT NULL, "password" character varying NOT NULL, "is_delete" boolean NOT NULL DEFAULT false, "deleted_at" TIMESTAMP, CONSTRAINT "UQ_e752aee509d8f8118c6e5b1d8cc" UNIQUE ("email_id"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tokens" ("id" SERIAL NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "is_deleted" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "user_email" character varying(255) NOT NULL, "token" character varying(500) NOT NULL, "type" character varying(50) NOT NULL, "expires_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_3001e89ada36263dabf1fb6210a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tokens"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
