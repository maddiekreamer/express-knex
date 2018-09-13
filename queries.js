const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

listAll = () => database.select().from('students_table').orderBy('id', 'desc')

individualStudent = (id) => database.select().from('students_table').where('firstName', id)

create = (calliItWhatYouWill) => database('students_table').insert(callItWhatYouWill).returning('*')

module.exports = {
    listAll,
    individualStudent,
    create
}