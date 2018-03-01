<style type="text/css">
  #mainIndex {
    margin: 5px;
  }
  #mainIndex .myinfo ul li {
    list-style: none;
  }
</style>
<template>
  <div id="mainIndex">
    i want to get data
    <div class="myinfo">
      <p>happy to get data from Local Services</p>
      <ul>
        <li>author:{{respD.author}}</li>
        <li>mySqlTable:{{respD.title}}</li>
        <li>date:{{respD.date}}</li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'getD',
  data () {
    return {
      respD: {}
    }
  },
  mounted () {
    this.getddd()
  },
  methods: {
    getddd () {
      this.$ajax.get('http://local-gd/gd/')
        .then((res) => {
          console.log(res)
          for (let d of res.data) {
            this.respD = {
              id: d.runoob_id,
              title: d.runoob_title,
              author: d.runoob_author,
              date: d.submission_date
            }
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
