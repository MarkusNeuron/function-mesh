function process(params) {
  params['age']['int'] = params['age']['int'] + 1
  return params
}

const definitions = {
  name: 'Student',
  type: 'record',
  fields: [
    {name: 'name', type: ["null", "string"]},
    {name: 'age', type: ["null", "int"]},
    {name: 'grade', type: ["null", "int"]}
  ]
}

module.exports.definitions = definitions
