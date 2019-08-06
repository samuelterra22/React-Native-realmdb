import Realm from 'realm'

import RespositrySchema from '../schemas/RepositorySchema'

export default function getRealm () {
  return Realm.open({
    schema: [RespositrySchema]
  })
}
