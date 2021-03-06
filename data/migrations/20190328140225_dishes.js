exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', function(tbl) {
        //primary key called id, integer, auto-increment
        tbl.increments();
    
        tbl
        .string('name', 128)
        .notNullable()
        .unique(); 
        
        tbl.timestamps(true, true);
    }); 
    };
    
    exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('dishes');
    };
    
    // MIGRATION