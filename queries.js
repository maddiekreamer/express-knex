const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

listAll = () => database.select().from('students_table').orderBy('id', 'desc')

individualStudent = (id) => database.select().from('students_table').where('firstName', id)

create = (newStudent) => database('students_table').insert(newStudent).returning('*')

deleteStudent = (id) => database('students_table').where('id', id).del().returning('*')

module.exports = {
    listAll,
    individualStudent,
    create,
    deleteStudent
}