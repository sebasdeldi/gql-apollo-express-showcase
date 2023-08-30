import * as avocado from './avocado.resolver'
import * as scalars from './../scalars/date_time'

export default {
  ...scalars,
  Query: {
    avocado: avocado.findOne,
    avocados: avocado.findAll,
  },
  Mutation: {
    createAvocado: avocado.createAvocado,
  },
  Avocado: avocado.resolver,
}
