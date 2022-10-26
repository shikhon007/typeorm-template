import { MigrationInterface, QueryRunner } from 'typeorm';

export class TableUpdate1666004915895 implements MigrationInterface {
  name = 'TableUpdate1666004915895';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "logs" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "desc" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fb1b805f2f7795de79fa69340ba" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "mobile" character varying NOT NULL, "email" character varying NOT NULL, "gender" character varying NOT NULL, "age" integer, "createdBy" character varying NOT NULL, "createDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" character varying, "updateDate" TIMESTAMP WITH TIME ZONE DEFAULT now(), CONSTRAINT "UQ_d376a9f93bba651f32a2c03a7d3" UNIQUE ("mobile"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "logs"`);
  }
}
