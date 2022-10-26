import { MigrationInterface, QueryRunner } from 'typeorm';

export class TableUpdated1666072834970 implements MigrationInterface {
  name = 'TableUpdated1666072834970';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "logs" ADD "createdBy" character varying NOT NULL DEFAULT 'ADMIN'`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "logs" DROP COLUMN "createdBy"`);
  }
}
