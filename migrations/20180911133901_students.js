exports.up = function (knex, Promise) {
    return knex.schema.createTable('students_table', (student) => {
        student.increments('id')
        student.string('firstName')
        student.string('lastName')
        student.string('hometown')
        student.string('prevOccupation')
        student.integer('favoriteNum')
        student.string('pastime')
    });
}
exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('students_table')
};