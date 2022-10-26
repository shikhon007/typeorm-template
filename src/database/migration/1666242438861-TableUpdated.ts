import { MigrationInterface, QueryRunner } from 'typeorm';

export class TableUpdated1666242438861 implements MigrationInterface {
  name = 'TableUpdated1666242438861';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
  }
}
