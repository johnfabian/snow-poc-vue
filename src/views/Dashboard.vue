<template>
  <div class="grid mt-4">
    <div class="col">
      <ChartWrapper title="Pie Chart">
        <PieChart />
      </ChartWrapper>
    </div>
    <div class="col">
      <ChartWrapper title="Doughnut Chart">
        <DoughnutChart />
      </ChartWrapper>
    </div>
  </div>
  <div class="grid">
    <div class="col" >
      <ChartWrapper title="Vertical Bar Chart">
        <VerticalBarChart />
      </ChartWrapper>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChartWrapper from '@/components/charts/ChartWrapper.vue'
import BasicChart from '@/components/charts/BasicChart.vue'
import PieChart from '@/components/charts/PieChart.vue'
import DoughnutChart from '@/components/charts/DoughnutChart.vue'
import VerticalBarChart from '@/components/charts/VerticalBarChart.vue'
</script>

<style scoped></style>
