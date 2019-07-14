<template>
  <div>
    <div class="select-date">
      <a class="arrow back" @click="beforeMonth()"></a>
      <div class="month">{{ dispDate }}</div>
      <a class="arrow next" @click="afterMonth"></a>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.selectDate = this.thisMonth;
    this.dispDate = this.getYearMonth(this.selectDate);
  },
  data() {
    return {
      realDate: null,
      selectDate: null,
      dispDate: null
    };
  },
  computed: {
    thisMonth() {
      this.realDate = new Date();
      const date = new Date();
      date.setMonth(date.getMonth() + 1);
      return date;
    }
  },
  methods: {
    getYearMonth(date) {
      if (date.getMonth() === 0) {
        return date.getFullYear() - 1 + "/12";
      }
      return date.getFullYear() + "/" + ("0" + date.getMonth()).slice(-2);
    },
    beforeMonth() {
      this.realDate.setDate(1);
      this.realDate.setMonth(this.realDate.getMonth() - 1);
      this.selectDate.setDate(1);
      this.selectDate.setMonth(this.selectDate.getMonth() - 1);
      this.dispDate = this.getYearMonth(this.selectDate);
      this.$emit("date", this.realDate);
    },
    afterMonth() {
      this.realDate.setDate(1);
      this.realDate.setMonth(this.realDate.getMonth() + 1);
      this.selectDate.setDate(1);
      this.selectDate.setMonth(this.selectDate.getMonth() + 1);
      this.dispDate = this.getYearMonth(this.selectDate);
      this.$emit("date", this.realDate);
    }
  }
};
</script>
<style scoped lang="scss">
.select-date {
  text-align: center;
  max-width: 840px;
}
.month {
  font-size: 35px;
  color: grey;
  font-weight: bold;
  margin-top: 40px;
  display: inline-block;
  user-select: none;
}
.arrow {
  position: relative;
  display: inline-block;
  padding: 0 0 0 24px;
  color: #000;
  vertical-align: middle;
  text-decoration: none;
}
.arrow::before,
.arrow::after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  content: "";
  vertical-align: middle;
}
.back::before {
  bottom: 11px;
  width: 8px;
  height: 8px;
  border-top: 3px solid #00000052;
  border-left: 3px solid #00000052;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.next::before {
  left: 10px;
  bottom: 11px;
  width: 8px;
  height: 8px;
  border-top: 3px solid #00000052;
  border-right: 3px solid #00000052;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>