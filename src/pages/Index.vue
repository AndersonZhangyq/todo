<template>
  <q-page>
    <div class="row q-pa-sm" style="min-height:inherit">
      <div class="col-6 q-pa-sm">
        <div class="column">
          <div class="col-1">
            <q-input
              dense
              outlined
              v-model="todoTitle"
              placeholder="输入任务标题，回车添加任务"
              @focus="focused = true"
              @blur="focused = false"
            >
              <template v-slot:append>
                <TodayCalendar
                  v-show="focused"
                  :date="selectedDate"
                  class="cursor-pointer"
                >
                </TodayCalendar>
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-date minimal v-model="fullDate">
                    <div class="row items-center justify-end q-gutter-sm">
                      <q-btn
                        label="Cancel"
                        color="primary"
                        flat
                        v-close-popup
                      />
                      <q-btn
                        label="OK"
                        color="primary"
                        flat
                        @click="selectedDate = new Date(fullDate).getDate()"
                        v-close-popup
                      />
                    </div>
                  </q-date> </q-popup-proxy></template
            ></q-input>
          </div>
          <div class="col-auto">
            <TodoList />
          </div>
        </div>
      </div>
      <div class="col-6 q-pa-sm"></div>
    </div>
  </q-page>
</template>

<script>
import TodayCalendar from "components/TodayCalendar";
import TodoList from "components/TodoList";
export default {
  name: "PageIndex",
  components: { TodayCalendar, TodoList },
  data: function() {
    return {
      todoTitle: "",
      focused: false,
      selectedDate: new Date().getDate(),
      fullDate: "",
      showDatePicker: false
    };
  }
};
</script>
