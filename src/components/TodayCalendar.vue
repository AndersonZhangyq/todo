<template>
  <div style="position: relative; width: 24px; height: 24px">
    <!-- <q-icon color="primary" class="fas fa-calendar" tag="i" style="font-size: 1.3em" /> -->
    <q-icon name="mdi-calendar-blank" style="font-size: 24px; position: absolute" />
    <div
      style="position: absolute;
    line-height: 24px;
    width: 24px;
    height: 24px;
    top: 2px;
    text-align: center;
    font-size: 10px;"
    >
      {{ date }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TodayCalendar",
  props: {
    date: Number
  }
};
</script>
