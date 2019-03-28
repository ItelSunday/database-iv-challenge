exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl) {
        //primary key called id, integer, auto-increment
        tbl.increments();
    
        tbl
        .string('name', 128)
        .notNullable()
        .unique();

        tbl
        .integer('dishId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

    }); 
    };
    
    exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('recipes');
    };
    
    // MIGRATION