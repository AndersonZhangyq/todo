<template>
  <q-list>
    <template v-for="(title, index) in titleArray">
      <q-item
        clickable
        tag="a"
        :active="selectedIndex === index"
        @click="selectedIndex = index"
        :key="index"
      >
        <q-item-section avatar v-if="index < 1">
          <TodayCalendar :date="new Date().getDate()" />
        </q-item-section>
        <q-item-section avatar v-else>
          <q-icon
            color="primary"
            :name="iconArray[index]"
            tag="span"
          /> </q-item-section
        ><q-item-section
          :class="{ 'text-weight-bold': selectedIndex === index }"
          >{{ title }}</q-item-section
        >
        <q-item-section side>
          <span>1</span>
        </q-item-section>
      </q-item>
    </template>
  </q-list>
</template>

<script>
import TodayCalendar from "components/TodayCalendar";
export default {
  name: "Drawer",
  components: { TodayCalendar },
  data: function() {
    return {
      titleArray: ["今天", "最近7天", "日历", "收集箱"],
      iconArray: [
        "mdi-calendar-blank",
        "mdi-numeric-7-box",
        "mdi-calendar-month",
        "mdi-inbox-full"
      ],
      selectedIndex: 0
    };
  },
  watch: {
    selectedIndex: {
      handler: function(val) {
        this.selectedIndex = val;
        this.$store.commit("common/changeToolbarTitle", this.titleArray[val]);
      },
      immediate: true
    }
  }
};
</script>

<style scoped>
.q-item__section--avatar {
  min-width: 0px !important;
}
</style>
