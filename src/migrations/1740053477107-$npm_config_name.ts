import { MigrationInterface, QueryRunner } from 'typeorm';

export class $npmConfigName1740053477107 implements MigrationInterface {
  name = ' $npmConfigName1740053477107';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" RENAME COLUMN "passworde" TO "password"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" RENAME COLUMN "password" TO "passworde"`,
    );
  }
}
