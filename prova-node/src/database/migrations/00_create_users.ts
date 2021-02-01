import Knex from 'knex';

export async function dropTableIfExist(knex: Knex) {
    return knex.schema.dropTableIfExists('users');
}

export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').unique().notNullable();
        table.string('username').unique().notNullable();
    });
}

export async function down(knex: Knex) { 
    return knex.schema.dropTable('users');
}