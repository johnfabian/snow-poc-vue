<template>
  <div class="layout-wrapper">
    <header class="steelers-header">
      <Menubar :model="topMenuItems" class="p-menubar-dark" />
    </header>
    <div class="layout-content">
      <aside>
        <Menu :model="sideMenuItems" />
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>



<script setup lang="ts">
import { ref } from 'vue'
import Menubar from 'primevue/menubar'
import Menu from 'primevue/menu'
import router from './router';

const topMenuItems = ref([
  {
    label: 'Home',
    icon: 'pi pi-fw pi-home',
    command: () => router.push('/')
  },
  {
    label: 'Services',
    icon: 'pi pi-fw pi-cog',
    command: () => router.push('/services')
  },
  {
    label: 'Knowledge',
    icon: 'pi pi-fw pi-book',
    command: () => router.push('/knowledge')
  }
])

const sideMenuItems = ref([
  {
    label: 'Dashboard',
    icon: 'pi pi-fw pi-th-large',
    command: () => router.push('/dashboard')
  },
  {
    label: 'Tickets',
    icon: 'pi pi-fw pi-ticket',
    command: () => router.push('/tickets')
  },
  {
    label: 'Reports',
    icon: 'pi pi-fw pi-chart-bar',
    command: () => router.push('/reports')
  }
])
</script>

<style scoped>
body {
  padding: 0; 
  margin: 0; 
}
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.layout-content {
  display: flex;
  flex-grow: 1;
}

aside {
  width: 250px;
  background-color: #f8f9fa;
}

main {
  flex-grow: 1;
  padding: 20px;
}

/* Steelers-themed styles */
.steelers-header {
  color: #FFB612;
  background-color: #000000; /* Black background */
}

.steelers-header .p-menubar {
  background-color: #000000; /* Ensure menubar background is also black */
  border: none;
  border-radius: 0;
}

.steelers-header .p-menubar .p-menuitem-link .p-menuitem-text,
.steelers-header .p-menubar .p-menuitem-link .p-menuitem-icon {
  color: #FFB612; /* Yellow text and icons */
}

.steelers-header .p-menubar .p-menuitem-link:not(.p-disabled):hover {
  background-color: #333333; /* Darker background on hover */
}

.steelers-header .p-menubar .p-menuitem-link:focus {
  box-shadow: 0 0 0 0.2rem rgba(255, 182, 18, 0.4); /* Yellow focus ring */
}
</style>

<
