<template>
    <div>
      <div>
        <fairy-title
          :text="'checkbox多选下拉框'"
          :icon="'icon-bussiness-man'"
        ></fairy-title>
      </div>
      <div class="inner_box">
        <select-checkbox :value="checkboxModel" :list="checkboxList"></select-checkbox>
      </div>
    </div>
  </template>
  
  <script>
  import selectCheckbox from "@/components/selectCheckbox/selectCheckbox.vue";
  export default {
    name: "connections",
    data() {
      return {
        name: 'fairy',
        checkboxModel: [0,1,2],
      checkboxList: [
        {
          "label": "选项0",
          "value": 0
        },
        {
          "label": "选项1",
          "value": 1
        },
        {
          "label": "选项2",
          "value": 2
        },
        {
          "label": "选项3",
          "value": 3
        },
        {
          "label": "选项4",
          "value": 4
        },
        {
          "label": "选项5",
          "value": 5
        },
        {
          "label": "选项6",
          "value": 6
        },
        {
          "label": "选项7",
          "value": 7
        },
        {
          "label": "选项8",
          "value": 8
        },
        {
          "label": "选项9",
          "value": 9
        },
        {
          "label": "选项10",
          "value": 10
        },
        {
          "label": "选项11",
          "value": 11
        },
        {
          "label": "选项12",
          "value": 12
        },
        {
          "label": "选项13",
          "value": 13
        },
        {
          "label": "选项14",
          "value": 14
        },
        {
          "label": "选项15",
          "value": 15
        },
        {
          "label": "选项16",
          "value": 16
        },
        {
          "label": "选项17",
          "value": 17
        },
        {
          "label": "选项18",
          "value": 18
        },
        {
          "label": "选项19",
          "value": 19
        },
        {
          "label": "选项20",
          "value": 20
        },
        {
          "label": "选项21",
          "value": 21
        },
        {
          "label": "选项22",
          "value": 22
        },
        {
          "label": "选项23",
          "value": 23
        },
        {
          "label": "选项24",
          "value": 24
        },
        {
          "label": "选项25",
          "value": 25
        },
        {
          "label": "选项26",
          "value": 26
        },
        {
          "label": "选项27",
          "value": 27
        },
        {
          "label": "选项28",
          "value": 28
        },
        {
          "label": "选项29",
          "value": 29
        },
        {
          "label": "选项30",
          "value": 30
        },
        {
          "label": "选项31",
          "value": 31
        },
        {
          "label": "选项32",
          "value": 32
        },
        {
          "label": "选项33",
          "value": 33
        },
        {
          "label": "选项34",
          "value": 34
        },
        {
          "label": "选项35",
          "value": 35
        },
        {
          "label": "选项36",
          "value": 36
        },
        {
          "label": "选项37",
          "value": 37
        },
        {
          "label": "选项38",
          "value": 38
        },
        {
          "label": "选项39",
          "value": 39
        }
      ],
      }
    },
    components: { selectCheckbox },
    methods: {
      conSoleName() {
        console.log(this.name)
      }
    }
  };
  </script>
  
  <style scoped>
  .divp {
    text-align: center;
    font-size: 22px;
    font-weight: bold;
  }
  a {
    color: #3a8ee6;
  }
  h1 {
    font-family: 华文楷体;
    font-size: 72px;
    font-weight: bold;
  }
  </style>