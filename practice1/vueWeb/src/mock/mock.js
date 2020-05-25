import Mock from 'mockjs'

const baseUrl = process.env.NODE_ENV

console.log(Mock)

const url = {
  table1: 'table1',
  table2: 'table2',
  table3: 'table3'
}

module.exports = [
  Mock.mock(baseUrl + url.table1, {
    'tab1|5': [
      {
        'key|+1': 1,
        'mockTitle|1': ['newone', 'newtwp']
      }
    ]
  })
]
